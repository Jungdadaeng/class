import { useQuery,gql } from "@apollo/client"
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer,
            title,
            contents
        }
    }
`

export default function StaticRoutedBoardQueryPage(){

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: {
            number: 274416
        }
    });
    console.log(data);
    return(
       <>
        <div>
           1번 게시글로 이동이 완료되었습니다.
        </div>
        <div>작성자 : {data ? data.fetchBoard?.writer : "로딩중입니다..."}</div>
        {/* 조건부 랜더링이라고 함 */}
        <div>제목 : {data && data.fetchBoard?.title}</div>
        <div>내용 : {data?.fetchBoard?.contents}</div>
        {/* 옵셔널 체이닝 : 가장 많이 쓰이는 방식 */}
       </>
    )
}