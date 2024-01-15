import { createStore } from 'redux';
import loginReducer from './loginReducer';

// create redux store using loginReducer to manage state of login
const store = createStore(loginReducer);

export default store; 