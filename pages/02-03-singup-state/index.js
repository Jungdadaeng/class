import { useState } from "react"

export default function SignUpStatePage(){
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [emailError, setEmailError] = useState('');
   
    function onChangeEmail(event){
        setEmail(event.target.value);
    }
    function onChangePwd(event){
        setPwd(event.target.value)
    }
    function onClickSignup(){
        console.log(email, pwd)

        if(email.includes('@') === false){
            setEmailError("이메일이 올바르지 않습니다. @가 없습니다.")
            //document.getElementById('error').innerText = "이메일이 올바르지 않습니다. @가 없습니다."
           // alert('이메일이 올바르지 않습니다. @가 없습니다.')
        }else{
            //메시지 알림 이전 , 백엔드 api 함수 호출
            alert('회원가입을 축하합니다!')
        }
    }
    return(
        <>
            이메일 : <input type="text" onChange={onChangeEmail} />
            <div style={{ color: 'red', fontSize: '5px'}}>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePwd}/><br></br>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}