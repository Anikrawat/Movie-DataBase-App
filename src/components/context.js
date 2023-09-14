import React, { useEffect, useState , useContext} from "react";

const AppContext = React.createContext();

const URL = `http://www.omdbapi.com/?apikey=74607774`


const AppProvider = ({children}) => {
    
    const [Movie,setMovie] = useState([])
    const [Title,setTitle] = useState("Avengers")
    const [isLoading,setisLoading] = useState(true)

    const FetchedApi = async (API_URL) => {
        try{
        let data = await fetch(API_URL)
        let parsedData = await data.json()
        
        if (parsedData.Response === 'True') {
            setisLoading(false)
            setMovie(parsedData.Search)
        }else{
            setisLoading(true)
        }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {

        let timerOut = setTimeout(() => {
            FetchedApi(`${URL}&s=${Title}`)
        }, 300);

        return () => {clearTimeout(timerOut)}
    },[Title])

    return <AppContext.Provider value={{Movie,setTitle,Title,isLoading}}>
        {children}
    </AppContext.Provider>

}
    const useGlobalContext = () => {
        return useContext(AppContext);
    };

export {AppContext,AppProvider,useGlobalContext}
