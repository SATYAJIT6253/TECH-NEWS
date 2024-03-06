import { useEffect, useReducer} from "react";
import { createContext } from "react";
import reducer from './Reducer';
const initialstate = {
    isloading:true,
    query:"HTML",
    page:0,
    nbPages:0,
    hits:[],
}
const api = "http://hn.algolia.com/api/v1/search?";
export const AppContext = createContext();
export function AppContextProvider({children}) {
    
    const[state,dispatch] = useReducer(reducer,initialstate);
    
    async function fetchdata(url) {
        dispatch({
            type:"SET_LOADING",
        })
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            console.log(data);
            dispatch({
                type:"GET_STORIE",
                payload:{
                    hits : data.hits,
                    nbPages:data.nbPages,
                },
            })
            

        } catch (error) {
            console.log(error);
        }
    }
    const searchpost = (searchqueruy)=>{
            dispatch({
                type:"SEARCH_QUERIE",
                searchdata : searchqueruy,
            })
    }
    const getprevpage= ()=>{
        dispatch({
            type:"GET_PREV",
        })
    }
    const getnextpage = ()=>{
        dispatch({
            type:"GET_NEXT",
             
        })
    }
    useEffect(()=>{
        fetchdata(`${api}query=${state.query}&page${state.page}`);
    },[state.query,state.page])
    
    return <AppContext.Provider value ={{...state,searchpost,getprevpage,getnextpage}}>
        {children}
    </AppContext.Provider>
}