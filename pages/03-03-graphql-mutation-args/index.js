import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { # 변수의 타입 적는 곳
        createBoard(writer:$writer, title:$title, contents:$contents){         # 실제 우리가 전달하라 변수 적는 곳
        _id,
        number,
        message
        }
    }
`

export default function GraphqlMutationArgsPage(){
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables:{ 
                writer: "다댕", 
                title: "제목",
                contents: "방가"
            }
        });
        console.log(result);
        alert(result.data.createBoard.message)
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPQL-API 요청하기(동기)</button>
        </>
    )

}