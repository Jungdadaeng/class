import axios from "axios"
import { useState } from "react";

export default function RestGetPage(){
    const [title, setTitle] = useState('');
    //비동기
    function onClickAsync(){
        const result = axios.get('https://koreanjson.com/posts/1');
        console.log('비동기', result);
    }
    //동기
    async function onClickSync(){
        const result = await axios.get('https://koreanjson.com/posts/1');
        console.log('동기', result.data.title);
        setTitle(result.data.title);
    }


    return(
        <div>
            <button onClick={onClickAsync}>REST-API 요청하기(비동기)</button>
            <button onClick={onClickSync}>REST-API 요청하기(동기)</button>
            <div>{title}</div>
        </div>
    )
}