// import { Chart } from "react-google-charts";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BarChart from "./BarChart";


function Charts(){
  const [userData, setUserData] = useState({})
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    async function getData() {
      try {
        setLoading(true)
        let res = await axios.get(`/sheet`)
        console.log(res.data.data)

        var xValues = res.data.data.map(ele=>ele[0]);
        xValues.splice(0,1);
        console.log("xvalues",xValues);
        var yValues = res.data.data.map(ele=> (ele[1]))
        // yValues.splice(0,1);
        console.log("yvalues",yValues);
        
        setUserData({
          labels: xValues,
          datasets: [
            {
              label: "Marks Gained",
              data: yValues,
              backgroundColor: ["red", "green", "blue", "orange", "brown","violet"],
            },
          ],
        })
        setLoading(false);

      } catch (error) {
        console.error(error);
    }
  }
  getData()

  console.log(userData)
  },[])



  if (isLoading) {
    return <div className="Chart">Loading...</div>;
  }

  return (
        <>
        <center>
          <div style={{width:500}}>
         <h1> Progress Card</h1>  
         <h2>Name - Student 1</h2>  
         <h2> Class - 2/B</h2>
         <h2>School Name- XYZ high School</h2></div>
         </center>
         <center><div style={{ width: 700}}>
        <BarChart chartData={userData} /></div></center>
         
        
      
        </>
      )
}
export default Charts;