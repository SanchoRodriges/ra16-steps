import React, { useState } from "react";
import AddForm from "./AddForm";
import StepsList from "./StepsList";

export default function Steps () {

  const [steps, setSteps] = useState([]);

  return (
    <div>
      <AddForm
        addStep={(step) => {

          setSteps( steps => {

            const index = steps.findIndex(item => item.date === step.date);

            if (index !== -1) {
              steps[index].distance = +steps[index].distance + +step.distance;

              return [...steps];
            }

            return [...steps, step];
          })
        }}
        
      />
      <StepsList
       list={steps}
       deleteStep={stepId => {
        setSteps( steps => {
          return steps.filter( (step) => step.id !== stepId )
        })
       }}
      />
    </div>
  )
}