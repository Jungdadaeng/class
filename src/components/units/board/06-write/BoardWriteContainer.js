import { useMutation } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWritePresenter";
import { CREATE_BOARD } from "./BoardWrite.queries";


export default function BoardWrite(){
    const [mycolor, setMycolor] = useState(false);
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
        if(writer !== "" && title !== "" && contents !== "" ){
            setMycolor(true);
        }
    }


    return(
        <>
            <BoardWriteUI 
                onClickSubmit={onClickSubmit} 
                onChangeWriter={onChangeWriter} 
                onChangeTitle={onChangeTitle} 
                onChangeContents={onChangeContents}
                mycolor={mycolor}
            />
        </>
    )
}