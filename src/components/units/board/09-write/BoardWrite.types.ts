import { ChangeEvent } from "react"

export interface IBoardWriteProps{
    isEdit: boolean,
    data?: {
        number: number,
        writer: string,
        title: string,
        contents: string
    }
}

export interface IBoardWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents:(event: ChangeEvent<HTMLInputElement>) => void
    onClickUpdate: () => void
    onClickSubmit: () => void
    mycolor: boolean
    isEdit: boolean
    data: any
}


export interface IBlueButtonProps{
    rrr: string
    zzz: boolean
}

export    interface IMyvariablese{
    number: number
    writer?: string
    title?: string
    contents?: string
}