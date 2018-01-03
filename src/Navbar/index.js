import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Grammar Checking System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="nav navbar-nav ml-auto">
                        <Link to='/login'><button className="btn btn-primary">Logout</button></Link>
                    </ul>
                </div>
            </nav>
        )
    }
};
