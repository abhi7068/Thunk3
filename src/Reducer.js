const initialState = {
    initialdetails: [],
    userRepo:[],
}
const reducer=(state=initialState,action) => {
    console.log(action.details);
    switch(action.type){
        case "DISPLAY_STATE":
            return {
                ...state,
                initialdetails : action.details,
            }
        case "SHOW_USER":
            console.log("reducer",action.users)
            return {
                ...state,
                userRepo : action.users,
            }
        default: return state;
    }
}
export default reducer;