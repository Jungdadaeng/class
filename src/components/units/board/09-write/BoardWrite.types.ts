import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps{
    isEdit: boolean,
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents:(event: ChangeEvent<HTMLInputElement>) => void
    onClickUpdate: () => void
    onClickSubmit: () => void
    mycolor: boolean
    isEdit: boolean
    data: Pick<IQuery, "fetchBoard">
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