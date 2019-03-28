import React from 'react';

const Form = function(){
    return(
        <form>
            <input type ='text' 
                placeholder="Name Of Data.."
                name="dataName"
                />
            <input type ='number' 
                placeholder="Enter Data.."
                name="data"
                />
            <button>add to pie chart</button>
        </form>
    )
}

export default Form;