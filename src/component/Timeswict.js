import React, { useState } from 'react'

function Timeswict(props) {
    const component1 =props.component1;
    const component2 =props.component2;
    const time = props.time;
    const [obj,setobj] = useState(component1);

    setTimeout(() => {
        setobj(component2)
    }, time*1000);
  return (
    <div onClick={()=>setobj(component2)}>
      {obj}
    </div>
  )
}

export default Timeswict
