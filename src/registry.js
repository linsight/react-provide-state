const stateHandlers = {};
const stateValues = {};

export function getState(namespace, name) {
  const nsState = stateValues[namespace] || {};
  return nsState[name];
}

export function setState(namespace, name, value) {
  const nsState = stateValues[namespace] || {};
  nsState[name] = value;
  stateValues[namespace] = nsState;
}

export function addHandler(namespace, name, handler) {
  const nsHandlers = stateHandlers[namespace] || {};
  const namedHandlers = nsHandlers[name] || [];

  if (!namedHandlers.includes(handler)) {
    namedHandlers.push(handler);
  }

  nsHandlers[name] = namedHandlers;
  stateHandlers[namespace] = nsHandlers;
}

export function getHandlers(namespace, name) {
  const nsHandlers = stateHandlers[namespace] || {};
  return nsHandlers[name] || [];
}

export function removeHandler(namespace, name, handler) {
  const nsHandlers = stateHandlers[namespace] || {};
  const namedHandlers = nsHandlers[name] || [];

  nsHandlers[name] = namedHandlers.filter(h => h !== handler);
  stateHandlers[namespace] = nsHandlers;
}
