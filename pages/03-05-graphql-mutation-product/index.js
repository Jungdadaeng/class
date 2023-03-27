import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 변수의 타입 적는 곳
        createProduct(seller:$seller, createProductInput: $createProductInput){         # 실제 우리가 전달할 변수 적는 곳
        _id,
        number,
        message
        }
    }
`

export default function GraphqlMutationProductPage(){
    const [createProduct] = useMutation(CREATE_PRODUCT);
   

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables:{ 
                seller: "제욱",
                createProductInput: {
                    name: "키보드",
                    detail: "정말 좋은 키보드",
                    price: 200000
                }
            }
        });
        console.log(result);
        alert(result.data.createProduct.message)
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPQL-API 요청하기(동기)</button>
        </>
    )

}