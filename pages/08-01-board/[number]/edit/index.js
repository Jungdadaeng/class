import BoardWrite from "../../../../src/components/units/board/08-write/BoardWriteContainer"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number,
            writer,
            title,
            contents
        }
    }
`

export default function BoardEditPage(){

    const {data} = useQuery(FETCH_BOARD,{
        variables: {
            number: Number(router.query.number)
        }
    });

    return <BoardWrite isEdit={true} data={data}/>
}