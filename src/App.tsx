import React from 'react';

import {Provider} from 'react-redux';

import store from './store';
import Contact from './components/Contact'
import AddModal from './components/AddModal';

export default ()=>(
    <Provider store ={store}>
        <AddModal />
        <Contact />
    </Provider>
)