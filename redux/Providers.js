'use client'

import {Provider} from 'react-redux';
import store from './store';


function Providers({children}) {
  return (

    // mikhay in component ro wrap bokoni doreh app 
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers





