import { createStore} from 'redux';
import { city } from '../reducers/city';

const intialState = {
      city: 'Buenos Aires,ar'
};

export const store = createStore(city, intialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());