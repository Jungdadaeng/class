import axios from "axios"

export default function RestGetPage(){
    //비동기
    function onClickAsync(){
        const result = axios.get('https://koreanjson.com/posts/1');
        console.log('비동기', result);
    }
    //동기
    async function onClickSync(){
        const result = await axios.get('https://koreanjson.com/posts/1');
        console.log('동기', result);
    }


    return(
        <div>
            <button onClick={onClickAsync}>REST-API 요청하기(비동기)</button>
            <button onClick={onClickSync}>REST-API 요청하기(동기)</button>
        </div>
    )
}