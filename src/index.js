import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { setUser, tempSetUser } from './modules/user';

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  composeWithDevTools(
    applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory })),
  ),
); // 여러개의 미들웨어를 적용 할 수 있습니다.

(() => {
  try {
    const user = localStorage.getItem('authUser');
    if (!user) return;
    store.dispatch(tempSetUser(user)); //새로고침 관련 임시 user저장
    store.dispatch(setUser(user));
  } catch (e) {
    console.log('localStorage not working');
  }
})();

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
