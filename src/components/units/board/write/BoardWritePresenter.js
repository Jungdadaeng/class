import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI(props){
    
    return(
        <>
            작성자 : <RedInput type="text" onChange={props.onChangeWriter}/><br/>
            제목 : <input type="text" onChange={props.onChangeTitle}/><br/>
            내용 : <input type="text" onChange={props.onChangeContents}/><br/>
            <BlueButton onClick={props.onClickSubmit}>GRAPQL-API 요청하기(동기)</BlueButton>
        </>
    )
}