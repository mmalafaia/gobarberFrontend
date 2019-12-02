import createSagaMiddeware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddeware({ sagaMonitor });

const middewares = [sagaMiddleware];

const store = createStore(rootReducer, middewares);

sagaMiddleware.run(rootSaga);

export default store;
