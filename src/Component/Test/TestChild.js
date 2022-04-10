import React from 'react';

const TestChild = (props) => {

    const onTrigger = (event) => {
        console.log(event)
        props.parentCallback(event.target.elements.myname.value);
        event.preventDefault();
    }

    return (
        <div>
             <form onSubmit = {(event)=>onTrigger(event)}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
    );
};

export default TestChild;