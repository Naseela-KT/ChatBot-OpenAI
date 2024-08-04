import "./App.css";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import { mockdata } from './utils/apiData';
import React, { useState, useEffect } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);
  

  useEffect(() => {
      setApiData(mockdata);
    
  }, []);
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        {apiData ? (
        <Chat initialData={apiData} />
      ) : (
        <p>Loading data...</p>
      )}
      </div>
      
    </>
  );
}

export default App;
