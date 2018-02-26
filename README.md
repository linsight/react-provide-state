# react-provide-state

A simple higher order function for managing a small amount of state.  It allows:

1. Easy provision of state to a components without the need to implement 
   the details with React's `setState`.
2. Share states with multiple components.


Redux is recommended for managing main application state. However, there are times when you need
to manage a small pieces of state that only relevant to one of two components. 

For example:

1. Selected font size or color of a paragraph;
2. Selected tabs, checkbox or radio buttons;
3. Temporary text input ( while user typing );

These states are most likely UI states that only concerns a handful of components
However, with that said, Redux is often a better solution for sharing states with multiple components. 
 

# Example

```
import provideState from 'react-provide-state';

const ComponentA = ({value, setValue}) => {
    return (<div>
        <span>You are entering: </span>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>);
}

const ComponentB = ({text, setText}) => {
    return (<div>
        <span>You have entered: </span>
        <span>{value}</span>
    </div>);
}

const stateConfig = {
    namespace: 'optional namespace',
    name: 'value',
    initValue: 'initial value',
};

export const ComponentAWithState = provideState(stateConfig)(MyComponent);
export const ComponentBWithState = provideState({name: 'value', alias: 'text'})(MyComponent);


```

 
# How it works

1. API: `provideState([config])`
1. `config` is an object with the following fields:

Config fields|Description
---|---
`name`|The name of the state
`namespace`|Optional namespace for avoiding name collision when providing multiple components with the same state name. By default, all components provided with same state name will share the the same state. You can choose to use a different namespace so that it is isolated from state in other namespace. If you do not provide a namespace, the default namespace of `defaultNamespace` is used.
`alias`|Optional. The wrapped component will be past with two props. One of them share the same `name` of the state (e.g. `value`) with the state value; The other prop is a callback function in the format of `set[Name]` e.g.(`setValue`). If you want to use different names, you can use 'alias' config. For example, if alias is `text`, the two property past will be `text` and `setText`.    



# Tips

1. If you want to make sure your state name will not collide with ANY existing states, you can use a Symbol as the namespace. e.g. `{namspace: Symbol(), name: 'text'}`;
2. You component is responsible for calling the `set[Name]` function when update of the state value is required;

