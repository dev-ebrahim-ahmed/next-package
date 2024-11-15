import { useState } from "react";

const FAQ = ({id, title, description}) => {
    const [ toggle, setToggle ] = useState(false);
  return (
    <article>
        <div>
            <h4>{title}</h4>
            <button onClick={()=>{setToggle(!toggle)}}>
                {toggle ? '-' : '+'}
            </button>
        </div>
       <div>
        {toggle &&  <p>{description}</p>}
       </div>
    </article>
  )
}

export default FAQ;