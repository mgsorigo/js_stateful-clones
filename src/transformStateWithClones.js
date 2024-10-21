'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const array = [];
  const newState = { ...state };

  for (const { type, ...rest } of actions) {
    if (type === 'addProperties') {
      Object.assign(newState, rest.extraData);
    }

    if (type === 'removeProperties') {
      for (const key of rest.keysToRemove) {
        delete newState[key];
      }
    }

    if (type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }
    }

    const newState1 = { ...newState };

    array.push(newState1);
  }

  return array;
}

module.exports = transformStateWithClones;
