import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"다윤", title:"제목", contents:"내용"){
        _id,
        number,
        message
        }
    }
`

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await 나의함수();
        console.log(result);
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPQL-API 요청하기(동기)</button>
        </>
    )

}