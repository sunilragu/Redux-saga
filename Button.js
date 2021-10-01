import React from 'react';
import { connect } from 'react-redux';
import { getNews,newsReceived } from '../actions/action'

import {fetchNews} from '../api/index'


let styles = {
  backgroundColor: 'HotPink',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <button style={ { ...styles, backgroundColor: 'DarkTurquoise' }}
        
        onClick={this.getNews}

      >Press to see News</button>
    );
  }

  
  getNews=()=>{
    // comment it if saga is runing...
   // fetchNews().then(json=>this.props.newsReceived(json));
    this.props.getNews();
  }

};

const mapDispatchToProps = {
  getNews: getNews,
  newsReceived:newsReceived
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
