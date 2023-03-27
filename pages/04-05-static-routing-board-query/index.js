import { useRouter } from "next/router";

export default function StaticRoutingBoardQueryPage(){
    const router = useRouter();
    
    const onClickMove1 = () => {
        router.push("/04-06-static-routed-board-query/1")
    }

    const onClickMove2 = () => {
        router.push("/04-06-static-routed-board-query/2")
    }

    const onClickMove3 = () => {
        router.push("/04-06-static-routed-board-query/3")
    }

    return(
        <div>
            <button onClick={onClickMove1}>1번 게시글로 이동</button><br/>
            <button onClick={onClickMove2}>2번 게시글로 이동</button><br/>
            <button onClick={onClickMove3}>3번 게시글로 이동</button><br/>
        </div>
    )
}