import { useQuery,gql } from "@apollo/client"

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

export default function MapBoardPage(){

    const {data} = useQuery(FETCH_BOARDS);
    console.log(data);

    return(
       <>
         {data?.fetchBoards.map(el=><div>{el.title}</div>)}
       </>
    )
}