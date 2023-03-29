import { useQuery,gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled";
import { message } from "antd";


const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number,
            writer,
            title,
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`


export default function MapBoardPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const {data} = useQuery(FETCH_BOARDS);

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        border: 0.5px solid gray;
    `

    const Column = styled.div`
        width: 25%;
    `

    const onClickDelete =  async (event) => {
        await deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{query: FETCH_BOARDS}]
        });
    }
    return(
       <>
         {data?.fetchBoards.map(el=>(
            <Row key={el.number}>
                <Column><input type="checkbox"/></Column>
                <Column>{el.number}</Column>
                <Column>{el.title}</Column>
                <Column>{el.contents}</Column>
                <Column>
                    <button onClick={onClickDelete} id={el.number}>삭제</button>
                </Column>
            </Row>
         ))}
       </>
    )
}