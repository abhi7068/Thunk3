import axios from "axios";

export const getstate = (name) => {
   return(dispatch)=>{
       return axios
       .get("https://api.github.com/search/users?q="+ name)
       .then((res)=>{
           dispatch(goingToReducer(res.data))
       })
   }
  };

  export const goingToReducer=(details)=>{
    return {
        type:"DISPLAY_STATE",
        details:details.items,
    }
}
export const getUserData = (url) => {
   return(dispatch)=>{
    axios.get(url)
       .then((res)=>{
           dispatch(goingToRepo(res.data))
           console.log("check api",res.data)
       })
           .catch(error => {
           console.log("my error",error)
       })
   }
};
export const goingToRepo = (user) => {
    console.log("action",user)
    return {
        type: 'SHOW_USER',
        users:user
    }
}
  
  