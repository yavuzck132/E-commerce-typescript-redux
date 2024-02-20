import { useState } from "react";


const NotePage = () => {
    const [text, setText] = useState<string>("");


    return <>
        <input value={text} onChange={(event)=>{setText(event.target.value)}}/>
        <button>+</button>    
    </>
}

export default NotePage;