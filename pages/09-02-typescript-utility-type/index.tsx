export default function TypescriptUtilityPage(){
    interface IProfile{
        name: string
        age: number
        school: string
        hobby?: string
    }

    type IProfile2{
        name: string
        age: number
        school: string
        hobby?: string
    }

    // 1. Pick 타입
    type aaa = Pick<IProfile, "name" | "age">   //IProfile에서 원하는 값의 타입을 가져와 새로운 타입을 만드는 것
    // 2. Omit 타입
    type bbb = Omit<IProfile, "school"> //IProfile에서 제외할 값을 제외하고 새로운 타입을 만드는 것
    // 3. Partial 타입
    type ccc = Partial<IProfile> //전체를 다 (?)선택적으로 만들어주는 것
    // 4. Required 타입
    type ddd = Required<IProfile> //전체를 다 (!)필수적으로 만들어 주는 것
    // 5. Record 타입
    type eee = "철수" | "영희" | "훈이"
    let child: eee
    //child = "맹구"    //맹구는 안됨 철수 또는 영희 또는 훈이만 가능함

    type fff = Record<eee, IProfile>    //앞이 key 뒤가 value가 됨



    // ==== (type vs interface) 차이 : 선언병합 ====
    interface IProfile{
        candy: number   //interface는 이렇게 candy를 넣으면 위에 선언한 것과 함쳐진다
    }

    let profile: Partial<IProfile> = {}
    profile.candy = 10
    
}