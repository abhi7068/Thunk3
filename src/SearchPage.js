import React, { Component } from 'react';
 import AppBar from '@material-ui/core/AppBar'; 
 import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'; 
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import {getstate} from "./Action";
import {connect} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import Map from "./Map";

class SearchPage extends Component {
  state={
    name:""
  }
  func=(event)=>{

  this.setState({
    name:event.target.value
  })
  }

  handleclick=()=>{

    this.props.dispatch(getstate(this.state.name));
  }
    render() {
        return (
           
                 <div >
            <div >
              <SearchIcon />

            </div>
            <InputBase
            onChange={this.func}
              placeholder="Search…"
             
              inputProps={{ 'aria-label': 'search' }}
            />
            <button onClick={this.handleclick}>search</button>
            <Map/>
            </div>
        );
    }
}


function mapStateToProps(state) {
  return { initialdetails:state.initialdetails};
}
export default connect(mapStateToProps)(SearchPage);