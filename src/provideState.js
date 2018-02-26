import React from 'react';
import * as registry from './registry';

export default ({ namespace, name, alias, initValue }) => (Component) => {
  const ns = namespace || 'defaultNamespace';

  class ComponentWithState extends React.Component {
    constructor(props) {
      super(props);

      this.handleStateChange = this.handleStateChange.bind(this);

      let value = registry.getState(ns, name);

      if (value === undefined) {
        value = initValue;
        registry.setState(ns, name, value);
      }

      this.state = { [name]: value };
    }

    componentWillMount() {
      registry.addHandler(ns, name, this.handleStateChange);
    }

    componentWillUnmount() {
      registry.removeHandler(ns, name, this.handleStateChange);
    }

    handleStateChange(newValue, updateRegistry = true) {
      this.setState({ [name]: newValue });

      if (updateRegistry) {
        const handlers = registry.getHandlers(ns, name);
        registry.setState(ns, name, newValue);
        handlers
          .filter(handler => handler !== this.handleStateChange)
          .forEach(handler => handler(newValue, false));
      }
    }

    render() {
      const propName = alias || name || 'default';
      const handlerName = `set${propName.replace(propName[0], propName[0].toUpperCase())}`;
      const stateProps = {
        [propName]: this.state[name],
        [handlerName]: this.handleStateChange,
      };

      return (
        <Component {...stateProps} {...this.props} />
      );
    }
  }

  return ComponentWithState;
};
