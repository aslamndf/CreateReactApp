import React, { useState } from 'react';

const CarDetails = () => {
    const [car, setCar] = useState({
        name: "BMW",
        model: "x7",
        year: 2027
    });

    const UpdateCarDetails = () => {
        setCar(previousState => ({
            ...previousState,
            model: "X8"
        }));
    };

    return (
        <div>
            <h3>
                Car name is {car.name} and the model is {car.model} and I will purchase the car in {car.year}.
            </h3>
            <button
                type="button"
                onClick={UpdateCarDetails} 
            >
                Button
            </button>
        </div>
    );
};

export default CarDetails;
