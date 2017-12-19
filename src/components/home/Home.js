import React, {Component} from 'react';
import PropTypes from 'prop-types'
import base from '../../base';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {authActions} from '../../auth';
import firebase from 'firebase/app';
import Header from '../header/Header';
import Main from '../main/Main';

class HomePage extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    };
};

export default HomePage;