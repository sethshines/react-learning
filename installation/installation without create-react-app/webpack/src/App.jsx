import React, { useState } from 'react';

const App = () => {
    const [inputVal, setInputVal] = useState('Rahul Seth');
    return (<div>
        <input type={'text'}  value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
        <h1>{inputVal}</h1>
    </div>);
}

export default App;