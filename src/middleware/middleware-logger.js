const middlewareLogger = store => next => action => {
  console.log('Original state', store.getState());
  console.log('current action', action);
  next(action);
  console.log('new state', store.getState());
};

export default middlewareLogger;