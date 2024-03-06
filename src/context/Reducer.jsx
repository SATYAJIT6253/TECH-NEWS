 const reducer = (state,action)=>{
    if(action.type === "GET_STORIE")
    {
        return {
            ...state,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages,
            isloading:false,
        }
    }else if(action.type === "SET_LOADING")
    {
        return {
            ...state,
            isloading:true,
        }
    }else if(action.type === "SEARCH_QUERIE")
    {
        return{
            ...state,
            query:action.searchdata,
        }
    }else if(action.type === "GET_PREV")
    {
        let pagenum = state.page-1;
        if(pagenum <= 0)
        {
            pagenum = 0;
        }else{
            pagenum = pagenum-1;
        }
        return{
            ...state,
            page:pagenum,
        }
    }else if(action.type === "GET_NEXT")
    {
        let pagenum = state.page+1;
        if(pagenum >= state.npPages)
        {
            pagenum = 0;
        }else{
            pagenum = state.page+1;
        }
        return{
            ...state,
            page:pagenum,
        }
    }
    return state;
}
export default reducer;