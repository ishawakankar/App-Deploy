/*eslint react/jsx-filename-extension: 0 */
/*eslint react/prop-types: 0 */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';
import HomePageComponent from './HomePageComponent';
import '../styles/ListUrlComponent.css';
//import queryString from "query-string";
//const Rx = require('rxjs');
const moment = require('moment');

class ListUrlComponent extends React.Component {
  // const token = queryString.parse(props.location.search).token;
  // if (!token) {
  //     window.localStorage.setItem("jwt",token);
  //     props.history.push("/");
  //  }
  constructor(props){
    super(props);
    this.state = {
      listdata: []
    };
  }

  
  componentWillMount(){
   fetch('/apps')
             .then(data => data.json()).then( r => {
               this.setState({listdata: r});
             })
      this.setState({

      });
  }
  
  render(){
  //const { classes } = this.props;
  //const data = ['css', 'html', 'javascript', 'nodejs','react'];
  const {listdata} = this.state;
  return (
    <div>
      <HomePageComponent />
      {listdata.map((x) =>
          <div className="root">
            <Card className="card">
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className="avatar">
                    <CheckCircle className="checkCircle" />
                  </Avatar>
                }
                title={x.app_name}
                subheader={moment().format('MMMM Do YYYY, h:mm:ss a')} 
                                
              />
            </Card>
          </div>
        )
      }
    </div>
  );
}
}
export default (ListUrlComponent);

