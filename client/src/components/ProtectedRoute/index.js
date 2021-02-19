import React from 'react'
import { Redirect } from 'react-router-dom'
import API from "../../utils/API"

class ProtectedRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           isAuthenticated: false
        };
      }

      checkLoginStatus = async () => {
        const results = await API.isloggedin();

        if (results.data !== 'Not Authorized') {
            console.log('You are in!');
           this.setState({isAuthenticated:true});
        } 
      }
     
       
      async componentDidMount() {
        await this.checkLoginStatus();
      }

    render() {
        const Component = this.props.component;
        
        if (this.state.isAuthenticated) {
          return <Component />
        } else 
         {
           return <Redirect to={{ pathname: '/login' }} />
         }

    }
}

export default ProtectedRoute;