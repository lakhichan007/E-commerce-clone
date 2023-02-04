import axios from "axios"
import env from "react-dotenv"
import * as actiontype from "../constants/productConstanst"
const URL= env.SERVER_URL //Backend server link.
// const URL=`http://localhost:5401`
export const getProducts = ()=>async(dispatch)=>{
    try{
        let response = await axios.get(`${URL}/products`)
        dispatch({type:actiontype.GET_PRODUCTS,payload:response.data})
    }
    catch(err){
        console.log(err.message)
    }
}