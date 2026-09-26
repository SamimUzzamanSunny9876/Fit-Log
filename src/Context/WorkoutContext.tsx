'use client'

import React, { createContext, ReactNode, useState } from 'react';


 export const WorkoutContext = createContext({})

const WorkoutProvider = ({children} : {children : ReactNode}) => {

     const [todPlan, setTodPlan] = useState([])
     const [saved, setSaved] = useState([])

     const sharedData ={
        todPlan,
        setTodPlan,
        saved,
        setSaved  
     }

    return (
        <div>
            <WorkoutContext.Provider value={sharedData} >{children}</WorkoutContext.Provider> 
        </div>
    );
};

export default WorkoutProvider;