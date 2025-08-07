 import { useState } from "react"

 export default function Buttoncard(){
      const [status,setstatus] = useState("Accept")
      return (
        <button onClick={()=>{
          if( status === 'Accept'){
              setstatus("Rejected")
          }else {
            setstatus("Accept")
          }     
        }}>{status}</button>
      )
    }
   