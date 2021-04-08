/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-07 18:09:07
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import initStore from 'src/redux/store';

const propTypes = {
	children: PropTypes.node.isRequired,
};

const defaultProps = {
	// classes: {},
};

const ReduxProvider = (props) => {
	const { children } = props;

	const { store, persistor } = initStore();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

ReduxProvider.propTypes = propTypes;

ReduxProvider.defaultProps = defaultProps;

export default ReduxProvider;
