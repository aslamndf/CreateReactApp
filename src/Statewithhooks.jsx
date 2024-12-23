import React, { useState } from 'react'

const CarDetails = () => {
    const [car,setCar]= useState(
        {
            name : "BMW",
            model : "x7",
            year : 2027
        }
        
    );

    const UpdateCarDetails=()=>{
        setCar (previousState = ()=>{
            return {
                ...previousState,model:"X8"
            }
        });
    }

  return (
    <div>
      <h3>Car name is {car.name} and the model is {car.model}and i will purchase the car in {car.year}.</h3>
      <button
        type="button"
        onClick={() => setCar(UpdateCarDetails)}
      >Button</button>
    </div>
  )
}

export default CarDetails
