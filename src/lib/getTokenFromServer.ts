import { headers } from "next/headers";
import { auth } from "./auth";


 
 
 export const GetTokenFromServer = async ()=> {
        const jwtToken = await auth.api.getToken({
       headers : await headers() 
  })
  console.log( 'get token : ', jwtToken?.token)

     return  jwtToken?.token ;
 }