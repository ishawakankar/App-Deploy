/*eslint react/jsx-filename-extension: 0 */

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import * as Rx from 'rxjs-compat';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import '../styles/home.css';

import { Link } from 'react-router-dom';

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
      <AppBar position="static" className="app">
        <Toolbar>
          <Link to={`/home`} className="lnk">
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <Home />
            </IconButton>
          </Link>
          <Link to={`/listUrl`} className="lnk">
            <Typography variant="h6" color="inherit" className="grow">
              App
            </Typography>
          </Link>
          <Link to={`/newApp`} className="lnk">
            <Typography variant="h6" color="inherit" className="grow">
              NewApp
            </Typography>
          </Link>
          <span className="heading">
          Rx-Actor Model</span>
          {/* <Typography>My profile</Typography> */}

        </Toolbar>
      </AppBar>

      <Paper className="root1" elevation={20}>

        <Button
          variant="outlined"
          color="primary"
          className="button1"
          id="outlined-email-input"
          name="buttonSubmit"
          href={`/logout`}>

          Logout
        </Button>

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
                src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
                // src="https://secure.gravatar.com/avatar/a5ecc9d1b6a72e80aa50cc5275db0757?s=800&d=identicon"
                className="avatar1"
                />
                <br/><br/>
             </div>

             <div className="flex-item1">
                {this.state.data.map((x , i) =>
                <div className="root">
                    
                       <strong>Name: </strong> &nbsp;&nbsp;{x.displayName}<br/>
                       <strong>Email: </strong>&nbsp;&nbsp; {x.email}<br/>
                       <strong>Gitlab username: </strong> &nbsp;&nbsp; {x.userName} <br/>
                       <strong>Gitlab Profile: </strong> &nbsp;&nbsp;
                       <a href={x.profileUrl} target="_blank">
                       {x.profileUrl}</a><br/>
                
                  </div>
              )}
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
