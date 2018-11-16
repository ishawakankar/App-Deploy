/*eslint react/jsx-filename-extension: 0 */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import * as Rx from 'rxjs-compat';
import Avatar from '@material-ui/core/Avatar';
import '../styles/home.css';

import { Link } from 'react-router-dom';
import HomePageComponent from './HomePageComponent';

// import '../styles/homepage.css';


class HomeProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listdata: [],
      data: []
    };
  }

  componentWillMount() {
    Rx.Observable.fromPromise(fetch('/profile').then((data) => data.json()))
      .subscribe((data) => {
        this.setState({
          data: data
        })
        
      });

      
  }


render() {
  return (
    <div className="root">
      <HomePageComponent />

      <Paper className="root1" elevation={20}>

        

        <div className="profile">
          
          <div className="text">
            Profile Details:
          </div>
          <br/><br/><br/>
          
          <div className="details">

          <div className="flex-container">
             <div className="flex-item">
                <Avatar
                alt="Thumb"
                src={this.state.data.avatar_url}
                // "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
                // src="https://secure.gravatar.com/avatar/a5ecc9d1b6a72e80aa50cc5275db0757?s=800&d=identicon"
                className="avatar1"
                />
                <br/><br/>
             </div>

             <div className="flex-item1">
                
                <div className="root">
                    {console.log('state',this.state.data)}
                    {console.log('state2',this.state.data)}
                      
                      <strong>Name:</strong> &nbsp;&nbsp; {this.state.data.name} <br/>
                      <strong>Username:</strong> &nbsp;&nbsp; {this.state.data.username}<br/>
                      <strong>Email:</strong> &nbsp;&nbsp; {this.state.data.email}<br/>
                      <strong>Git URL:</strong> &nbsp;&nbsp; 
                      <a href={this.state.data.web_url}>{this.state.data.web_url}</a><br/>
                  </div>
              
             </div>
          </div>
          </div>

        </div>

      </Paper>

    </div>

  );

}
}
export default (HomeProfile);
