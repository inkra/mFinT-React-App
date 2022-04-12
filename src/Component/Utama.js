import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import Qr from './qr/Qr';

const Utama = () => (
    
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/qr" component={Qr} />
    </Switch>
)

export default Utama;