import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
class Map extends Component {
    render() {
      console.log("tyuigfghjbn",this.props.initialdetails)
       return (
            <div>
                {this.props.initialdetails.map(element=>{
                    return(
                        <div>
                        <p>id:{element.id}</p>
                            <Link to={"/user/"+element.login}>
                                <p>name:{element.login}</p>
                            </Link>
                        
                        <img src={element.avatar_url}></img>
                        
                        </div>
                    )
                })}
            </div>
        );}}
function mapStateToProps(state) {
    return { initialdetails:state.initialdetails};
  }
  export default connect(mapStateToProps)(Map);