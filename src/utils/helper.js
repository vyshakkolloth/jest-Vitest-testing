import axios from "axios";

export const add=(num1,num2)=>{
    return num1+num2
}

export const reverse=(value)=>{
    return value.split("").reverse().join("");
}
export const language=["js","css","Html"];

export const userDetails={
    name:"vyshak"
    ,age:26
}

export const user=async ()=>{
    const respose = await axios("https://jsonplaceholder.typicode.com/todos/1")
    return respose.data

}

export const isAuthenticated=(islogged=false)=>{
    if(islogged){
        return "welcome"
    }
    throw new Error("not logged in")
}