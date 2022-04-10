import React,{useState} from 'react';
import './Test.css'
import TestChild from './TestChild';



const Test = () => {

    const [data,setData] = useState("Sushanta")

    const handleCallback = (childData) =>{
        setData(childData)
    }
    return (
        <div>
                <TestChild parentCallback = {handleCallback}/>
                {data}
            </div>
    );
};

export default Test;
 
