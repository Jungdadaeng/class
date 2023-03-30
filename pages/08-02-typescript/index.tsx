export default function TypeScriptPage(){
    //타입추론
    let aaa = "안녕하세요";
    //aaa = 3

    //타입명시
    let bbb:string = "반갑습니다";

    //문자타입(선언과 할당 분리)
    let ccc:string;
    ccc ="하이방가";

    //숫자타입
    let ddd:number = 10;
    //ddd="철수"

    //불린타입
    let eee:boolean = true;
    //eee="false" //문자열

    //배열타입
    let fff:number[] = [1,2,3,4,5];
    let ggg:string[] = ["다윤","민성"];
    let hhh:(string | number)[] = ["철수", "영희", 10] //타입을 추론해서 어떤 타입 사용하는지 알아보기!

    //객체타입
    interface IProfile{
        name: string
        age: number | string
        school: string
    }
    const profile:IProfile = {
        name:"철수",
        age: 8,
        school: "다람쥐 초등학교"
    }

    profile.age="8살"// 타입이 추론되어 있기 떄문에 문자열은 사용 불가.. 이런 현상을 막기 위해 타입 명시가 필요함

    //함수타입  --어디서 몇번이든 호출 가능하므로, 타입 추론 불가, 반드시 타입 명시 필요
    const add = (num1:number, num2:number, unit:string) => {    //함수는 추론이 안되는 이유? 할당의 개념이 아니기 때문! 반드시 명시가 필요!
        return num1+num2+unit
    }

    add(1000,2000,"원");

    //any타입
    let qqq: any="철수" //js와 동일!

   
}