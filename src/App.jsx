 import React, { useEffect, useState } from "react";
import './App.css';
 import GuviCard from "./components/Guvicard";
import { CardHeader } from "./components/CardHeader";


function App() {
  const [totalIntrested,setTotalIntrested] = useState(0) 
  const [allData, setAllData] = useState([]);

  //mounting
 // useEffect(() => {
  //  console.log("mounting happend");
  //  setAllData(data);
 // }, []); 

 const API = "https://6894a313be3700414e13f330.mockapi.io/batch";
 useEffect(()=>{
      fetch("https://6894a313be3700414e13f330.mockapi.io/batch",{method:"GET",})
       .then((response)=>response.json())
       .then((data)=> setAllData(data))
       .catch((err)=> console.log(err));
 },[]);
  return (
    <>
    <CardHeader intrested ={totalIntrested} />
      <div className="all-card"> 
      
        {allData.map((course, idx) => (
          <GuviCard courseDetails={course} key ={idx} setTotalIntrested={setTotalIntrested}
          totalIntrested ={totalIntrested}/>
        ))}
      </div>
    </> 
  );
}

export default App;




   
