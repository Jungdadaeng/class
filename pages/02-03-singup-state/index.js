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

        if(email.includes('@') === false){
            alert('이메일이 올바르지 않습니다. @가 없습니다.')
        }else{
            //메시지 알림 이전 , 백엔드 api 함수 호출
            alert('회원가입을 축하합니다!')
        }
    }
    return(
        <>
            이메일 : <input type="text" onChange={onChangeEmail} />
            비밀번호 : <input type="password" onChange={onChangePwd}/>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}