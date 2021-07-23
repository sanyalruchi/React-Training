import React, { useState, useRef, useEffect } from 'react';

export default function HookUseRef(){
const [counter, setCounter] = useState(0);
const [isActive, setIsActive] = useState(false);
const counterRef = useRef();

useEffect(() => {
    if(isActive){
        const id = setTimeout(()=>setCounter(c => c+1), 1000);
        counterRef.current = id;
    }
})

// If we just wanted to set an interval, we wouldn’t need the ref (id could be local to the effect), but it’s useful if we want to clear the interval from an event handler:
const handleStop = () => {
    setIsActive(false);
    clearTimeout(counterRef.current);
}

const handleStart = () => {
    setIsActive(true);
}
    return(
        <div>
            <label>{counter}</label>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button>Reset</button>
        </div>
    )
}