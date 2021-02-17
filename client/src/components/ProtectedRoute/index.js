import React from 'react'
import { Redirect } from 'react-router-dom'
import API from "../../utils/API"

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        
           return (async () => {
            const results = await API.isloggedin();
            console.log(results);
            console.log(results.data.username);

            if (results.data !== 'Not Authorized') {
                console.log('You are in!');
                return true;
            } else {
                console.log('Sorry Not Authorised!');
                return false;
            }
        })() ? (
            <Component />
        ): (
            <Redirect to={{ pathname: '/login' }} />
        );
            
    }
}

export default ProtectedRoute;