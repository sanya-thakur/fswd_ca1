import React from "react";
import TestimonalCard from "./components/TestimonalCard";

function App(){

  const customers=[
    {name: 'John Doe',
      text: 'Highly recommended.',
    },
    {name: 'Emma Green',
      text: 'Superb service! 10/10 recommendation!',
    }
  ];

  const h1style={
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  }

  return(
    <div>
      <h1 style={h1style}>Client Testimonals</h1>
        {
        customers.map((customer, index)=>(
          <TestimonalCard customer={customer} key={index}/>
        ))
      } 
      </div>
  );
};

export default App;