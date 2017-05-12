import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/reducer';
import App from './App';

const store = createStore(reducers);

export default ()=> (
	<Provider store={store}>
		<App/>
	</Provider>
);
