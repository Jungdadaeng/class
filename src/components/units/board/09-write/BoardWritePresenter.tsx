import { ChangeEvent } from "react"
import * as S from "./BoardWrite.styles"

interface IProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents:(event: ChangeEvent<HTMLInputElement>) => void
    onClickUpdate: () => void
    onClickSubmit: () => void
    mycolor: boolean
    isEdit: boolean
    data: any
}
export default function BoardWriteUI(props:IProps){
    return(
        <>
            <h1>{props.isEdit?"수정":"등록"}</h1>
            작성자 : <S.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/><br/>
            제목 : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/><br/>
            내용 : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/><br/>
            <S.BlueButton 
                onClick={props.isEdit? props.onClickUpdate : props.onClickSubmit} 
                rrr="20px"
                zzz={props.mycolor}
            >{props.isEdit?"수정":"등록"} 하기</S.BlueButton>
        </>
    )
}