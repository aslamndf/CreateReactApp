import React, { useState } from 'react'

const BesantTechnologyDetails = () => {
    const [Deatils] = useState(
        {
            Trainer : "sameer",
            Course : "FrontEnd"
        }
    );
  return (
    <div>
      <h3>Traniner is {Deatils.Trainer} and he is taking the {Deatils.Course} developing.</h3>
    </div>
  )
}

export default BesantTechnologyDetails
