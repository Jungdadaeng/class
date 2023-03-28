import { useMutation,gql } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWritePresenter";


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { # 변수의 타입 적는 곳
        createBoard(writer:$writer, title:$title, contents:$contents){         # 실제 우리가 전달하라 변수 적는 곳
        _id,
        number,
        message
        }
    }
`


export default function BoardWrite(){
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables:{ // variables가 $ 역할을 해줌
                writer: writer, 
                title: title,
                contents: contents
            }
        });
        console.log(result);
        alert(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    return(
        <>
            <BoardWriteUI onClickSubmit={onClickSubmit} onChangeWriter={onChangeWriter} onChangeTitle={onChangeTitle} onChangeContents={onChangeContents}/>
        </>
    )
}