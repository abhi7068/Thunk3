import React, { Component } from 'react'
import { connect } from "react-redux";
import {getUserData} from './Action'
class UserRepo extends Component {
    componentDidMount() {
        const user = this.props.userInfo.filter((item) => item.login === this.props.match.params.login)
        console.log("userdata", user[0].repos_url)
        const repoUrl = user[0].repos_url;
        this.props.dispatch(getUserData(repoUrl))
        
    }
     render() {
         console.log("checking", this.props.userInfo)
         
        return (
            <div>
                {
                    this.props.userRepoDetails.map((element, i) => {
                        while (i < 1) {
                            return (
                            <>
                                <p>login:{element.owner.login}</p>
                                <p>type:{element.owner.type}</p>
                                <p>node id:{element.owner.node_id}</p>
                                    <img src={element.owner.avatar_url} alt="avatar" width="100px" />
                                    <p>Open issues:{element.open_issues}</p>
                                </>
                        )
                        }
                        
                    })

                }
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.initialdetails,
        userRepoDetails:state.userRepo
    };
  }
export default connect(mapStateToProps)(UserRepo)