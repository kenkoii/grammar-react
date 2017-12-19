import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from '../Navbar';
import { userActions } from '../actions';

class HomePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        // return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <Navbar/>
                <div className="container col-md-6 col-md-offset-3">
                    <h1>Hi ToyKents!</h1>
                    <p>You're logged in with React!!</p>

                    <Link to="/login">Logout</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };

// <p>
// <button onClick={this.handleLogout()}>Logout</button>
// </p>