import React, { useEffect, useState, useRef} from 'react';
import useScript from '../hooks/useScript';
import './hooksExample.css';
import GridLayout from '../common components/grid';

import { Button } from "reactstrap";
import HookUseRef from './HookUseRef';
function HooksExample(){
    const [userData, setUserData] = useState();
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    useScript('//jsfiddle.net/sanyalruchi333/zudpk4jo/24/embed/result/');

    useEffect(() => {
        let ignore = false;
        async function fetchData(){
            const result = await fetch('https://reqres.in/api/users?page=2');
            const data = await result.json();
            if(!ignore) setUserData(data);
        }

        fetchData();
        console.log("inside fetch dat ")
        return () => {
            console.log("inside unmount of hook");
            ignore = true;
        }
    },[]);

    useEffect(() => {
       console.log(inputRef.current, "current ref");
       inputRef.current.focus();
    },[])

    useEffect(() => {
        console.log(count, "inside useEffect");
    },[count]);
   
    return (
        <div>
            <header id="image-slider"></header>
            <input ref={inputRef} type="text"></input>
            <p> you clicked {count} times</p>
            <Button onClick={() => setCount(count+1)}>click me</Button>
            <HookUseRef></HookUseRef>
            <h1>User data</h1>
            <GridLayout data = {userData}></GridLayout>
        </div>
    )
}

export default HooksExample;