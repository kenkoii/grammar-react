import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from '../Navbar';
// import { userActions } from '../actions';
import { sheetService } from '../services'
import { SheetList } from '../SheetList/index';
import { AddSheet } from '../AddSheet/index';


class HomePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
        sheetService.getSheetValues('1GKWQ0WEec0icTm2fGfLmNYrR44v6Lch8btTG2v7Bs0s', 'TestSheetForSystem!A2:Z')
                .then(result => {
                    console.log(result);
                })
    }

    render() {
        // const { user, users } = this.props;
        return (
            <div className="container">
                <Navbar/>
                <AddSheet/>
                {
                    /*
                    <div className="jumbotron col-md-6 col-md-offset-3">
                        <h1>Hi ToyKents!</h1>
                        <p>You're logged in with React!!</p>
    
                        <Link to="/login">Logout</Link>
                    </div>
                    */
                }
                <SheetList/>
                {
                    
                }
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