import React from 'react';

import {Provider} from 'react-redux';

import store from './store';
import Contact from './components/Contact'
// import Add from './components/Add';

export default ()=>(
    <Provider store ={store}>
        <Contact />
        {/*<Add />*/}
    </Provider>
)