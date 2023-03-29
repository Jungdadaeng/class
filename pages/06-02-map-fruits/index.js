
export default function MapFruitPage(){
    // 백엔드에서 받아온 데이터라고 가정(컴포넌트 위에 만든 이유 : 컴포넌트 리렌더링돼도 다시 안만들어짐)
    const FRUITS = [
        {number: 1, name: "레드향"},
        {number: 2, name: "산청딸기"},
        {number: 3, name: "한라봉"},
        {number: 4, name: "샤인머스켓"},
        {number: 5, name: "사과"},
        {number: 6, name: "애플망고"},
        {number: 7, name: "딸기"},
        {number: 8, name: "천혜향"},
        {number: 9, name: "과일선물세트"},
        {number: 10, name: "귤"},

    ]
    // const fruits = [ {number: 1, name: "레드향"},
    // {number: 2, name: "산청딸기"},
    // {number: 3, name: "한라봉"}].map(el => <div>{el.name}</div>);

    const fruits = FRUITS.map(el => <div>{el.name}</div>);

    return(
        <div>
            {fruits}
        </div>
    )
}