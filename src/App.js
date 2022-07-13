import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MobileCard from './components/cards/mobile_card'
import './App.css'

function App() {

  const [MobileData, setMobileData] = useState()

  useEffect(()=>{
    axios
    .get('https://s3.amazonaws.com/open-to-cors/assignment.json')
    .then((res)=>{
      setMobileData(Object.values(res.data?.products).sort((a, b) => (parseInt(a.popularity) < parseInt(b.popularity) ? 1 : -1)))
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div className="app container py-5">
      <div className="row">
        <div className="col-12">
          <h4 style={{textAlign: 'center'}}>Sanket Banerjee's Assignment</h4>
          <h5>Task:</h5>
          <ol>
            <li>Fetch the JSON file programmatically and store the data in the data structure of your choice.</li>
            <li>Display the data in the presentation of your choice with Title, Price ordered based on the descending popularity.</li>
          </ol>
        </div>
        <div className="col-12">
          <h5>Deliverables:</h5>
          <ul>
            <li>Hosting URL: <a href='https://charming-liger-7e0b34.netlify.app/'>https://charming-liger-7e0b34.netlify.app/</a></li>
            <li>Github repository link to your solution: <a href='https://github.com/Sanket2604/Smart_Serv_Assignment' target='_blank'>https://github.com/Sanket2604/Smart_Serv_Assignment</a></li>
            <li>Time taken to complete this: 1 and half hour</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4 result">Result: {MobileData?.length}</div>
        {MobileData ? MobileData.map((data,i)=>
          <MobileCard key={i} data={data} />
        ):<div className='col-12 mt-5'><h5 style={{textAlign: 'center'}}>Loading......</h5></div>}
      </div>
    </div>
  );
}

export default App;
