import React from 'react';
import * as registry from './registry';

export default ({ namespace, name, alias, initValue }) => (Component) => {
  const stateNamespace = namespace || 'defaultNamespace';
  const stateName = name || 'defaultName';

  class ComponentWithState extends React.Component {
    constructor(props) {
      super(props);

      this.handleStateChange = this.handleStateChange.bind(this);

      let value = registry.getState(stateNamespace, stateName);

      if (value === undefined) {
        value = initValue;
        registry.setState(stateNamespace, stateName, value);
      }

      this.state = { [stateName]: value };
    }

    componentWillMount() {
      registry.addHandler(stateNamespace, stateName, this.handleStateChange);
    }

    componentWillUnmount() {
      registry.removeHandler(stateNamespace, stateName, this.handleStateChange);
    }

    handleStateChange(newValue, updateRegistry = true) {
      this.setState({ [stateName]: newValue });

      if (updateRegistry) {
        const handlers = registry.getHandlers(stateNamespace, stateName);
        registry.setState(stateNamespace, stateName, newValue);
        handlers
          .filter(handler => handler !== this.handleStateChange)
          .forEach(handler => handler(newValue, false));
      }
    }

    render() {
      const propName = alias || stateName;
      const handlerName = `set${propName.replace(propName[0], propName[0].toUpperCase())}`;
      const stateProps = propName ? {
        [propName]: this.state[stateName],
        [handlerName]: this.handleStateChange,
      } : {};

      return (
        <Component {...stateProps} {...this.props} />
      );
    }
  }

  return ComponentWithState;
};
