import React, { useEffect, useState , useContext} from "react";

const AppContext = React.createContext();

const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const AppProvider = ({children}) => {
    
    const [Movie,setMovie] = useState([])
    const [Title,setTitle] = useState("Avengers")

    const FetchedApi = async (API_URL) => {
        try{
        let data = await fetch(API_URL)
        let parsedData = await data.json()
        console.log(parsedData.Search)
        
        if (parsedData.Response === 'True') {
            setMovie(parsedData.Search)
        }else{
            console.log("kuch ni hai")
        }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        FetchedApi(`${URL}&s=${Title}`)
    },[Title])

    return <AppContext.Provider value={{Movie,setTitle,Title}}>
        {children}
    </AppContext.Provider>

}
    const useGlobalContext = () => {
        return useContext(AppContext);
    };

export {AppContext,AppProvider,useGlobalContext}