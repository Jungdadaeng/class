import { useState } from "react"

export default function SignUpStatePage(){
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    function onChangeEmail(event){
        setEmail(event.target.value);
    }
    function onChangePwd(event){
        setPwd(event.target.value)
    }
    function onClickSignup(){
        console.log(email, pwd)
    }
    return(
        <>
            이메일 : <input type="text" onChange={onChangeEmail} />
            비밀번호 : <input type="password" onChange={onChangePwd}/>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}