import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router";

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

export default function DynamicRoutedBoardQueryPage(){
    const router = useRouter();
    console.log(router);

    const {data} = useQuery(FETCH_BOARD,{
        variables: {
            number: Number(router.query.qqq)
        }
    });

    return(
        <>
            <div>
            {router.query.qqq}게시글로 이동이 완료되었습니다.
            </div>
            <div>작성자 : {data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
            {/* 조건부 랜더링이라고 함 */}
            <div>제목 : {data && data.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
            {/* 옵셔널 체이닝 : 가장 많이 쓰이는 방식 */}
        </>
    )
}