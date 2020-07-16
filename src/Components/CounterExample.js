import React, {useState} from "react";

//declare components:

function CounterExample(){
    const [count,setCount] = useState(0)
    console.log(useState(0))

        return(
            <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={()=> setCount(count +1 )}>
                +
            </h1>
                <h1 onClick={() => setCount(count -1)}>
                    -

                </h1>
            </div>
        )

}

export default CounterExample;