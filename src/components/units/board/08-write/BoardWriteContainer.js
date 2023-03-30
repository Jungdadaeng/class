import { useMutation,useQuery } from "@apollo/client"
import { useState } from "react";
import BoardWriteUI from "./BoardWritePresenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";


export default function BoardWrite(props){
    const [mycolor, setMycolor] = useState(false);
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
    const router = useRouter();

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
        router.push(`/08-01-board/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {

        const myvariables = {number:Number(router.query.number)};
        if(writer) myvariables.writer = writer;
        if(title) myvariables.title = title;
        if(contents) myvariables.contents = contents;
        //1. 수정하기 뮤테이션 날리기
        const result = await updateBoard({
            variables: myvariables
        });
        console.log(result);
        alert(result.data.updateBoard.message)
        
        //2. 상세 페이지로 이동하기
        router.push(`/08-01-board/${result.data.updateBoard.number}`)
    }

    
    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        if(event.target.value && title && contents ){
            setMycolor(true);
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if(writer && event.target.value && contents ){
            setMycolor(true);
        }
    }
    const onChangeContents = (event) => {
        setContents(event.target.value);
        if(writer && title && event.target.value ){
            setMycolor(true);
        }
    }


    return(
        <>
            <BoardWriteUI 
                data={props.data}
                isEdit={props.isEdit}
                onClickSubmit={onClickSubmit} 
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter} 
                onChangeTitle={onChangeTitle} 
                onChangeContents={onChangeContents}
                mycolor={mycolor}
            />
        </>
    )
}