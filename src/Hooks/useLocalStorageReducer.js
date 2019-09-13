import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultValue, reducer) {
  //make piece of state based off of value in local localStorage or default
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let val;
    try {
       val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    }
    catch(e) {
      val = defaultValue;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
    
  return[state, dispatch];
}

export { useLocalStorageReducer };