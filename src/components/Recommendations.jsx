import React, { useEffect,useState } from "react";
import {mockdata} from "../utils/apiData"


const Recommendations = () => {
    const [data,setData]=useState([]);


    useEffect(()=>{
        setData(mockdata)
    })
  return (
    <div className="container mx-auto p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#2B2D42] shadow-lg rounded-lg overflow-hidden mb-4"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">{item.name}</h2>
            <p className="text-gray-100 mb-2">
              Resource ID: {item.resource_id}
            </p>
            <p className="text-gray-100 mb-2">
              AWS Account Name: {item.aws_account_name}
            </p>
            <p className="text-gray-100 mb-2">Region: {item.region}</p>
            <p className="text-gray-100 mb-2">
              Current Cost: ${item.current_cost}
            </p>
            <p className="text-gray-100 mb-2">
              Potential Savings: ${item.potential_savings}
            </p>
            <p className="text-gray-100 mb-2">Finding: {item.finding}</p>
            <p className="text-gray-100 mb-2">Status: {item.ticket_status}</p>
            <a
              href={item.ticket_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Ticket
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
