import React from 'react';
import ReactDom from 'react-dom';
import provideState from '../../src/provideState';

const ComponentA = ({ value, setValue }) => {
  return (<div className='form-group'>
    <label for='exampleInput'>Please enter something</label>
    <input className='form-control' id='exampleInput'
           value={value} onChange={(e) => setValue(e.target.value)} />
  </div>);
};


const ComponentB = ({text}) => {
  return (<div className='form-group'>
    <label for='exampleInput2'>You've entered</label>
    <input className='form-control' id='exampleInput2'
           value={text} readOnly="readOnly"/>
  </div>);
};

const stateConfig = {
  namespace: 'optional namespace',
  name: 'value',
  initValue: '',
};

export const ComponentAWithState = provideState(stateConfig)(ComponentA);
export const ComponentBWithState = provideState({...stateConfig, alias: 'text'})(ComponentB);

ReactDom.render(
  <div className="container">
    <ComponentAWithState />
    <ComponentBWithState />
  </div>,
  document.querySelector('#root')
);
