import { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
const apiUrl = 'http://localhost:9090/api/';





export const UserContext = createContext();

const UserContextProvider = (props) =>{
    
    const [CvMakerData, setMakerCvData] = useState([])
const CvData = async () => {

    try {
        let api_Url = apiUrl + 'CvLocal';
        const res = await axios.get(api_Url);
        setMakerCvData(res.data);
        console.log(res.data);
        return res;
    } catch (error) {
        throw error;
    }
};


const value = {CvMakerData, setMakerCvData,CvData}

return (
   <UserContext.Provider value={value}>
       {props.children}
   </UserContext.Provider>
)
}
export default UserContextProvider;