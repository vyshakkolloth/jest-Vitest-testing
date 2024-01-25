import { describe ,it,test,expect } from "vitest";
import { add, isAuthenticated, language, reverse, user, userDetails } from "./helper";



// unit testing use java script


describe("add function",()=>{
   it("it return sum",()=>{
    expect(add(1,2)).toBe(3)
   })
   it("it return failed",()=>{
    expect(add(1,2)).toBe(3)
   })


})

describe("string test case",()=>{
    it("it should revese",()=>{
        expect(reverse("vys")).toBe("syv")
    })
    it("check the method is there",()=>{
        expect(reverse).toBeDefined("syv")  //check there is as function or not
    })
})

describe("arrat test case",()=>{
    it("it should display wnum",()=>{
        expect(language).toStrictEqual(["js","css","Html"])
    })
})

describe("object test case",()=>{
    it("it should display object",()=>{
        expect(userDetails).toStrictEqual({
            name:"vyshak"
            ,age:26
        })
        expect(userDetails).toHaveProperty("name");
        expect(userDetails).toHaveProperty("age")
    })
})
// api checking
// describe("api",()=>{
//     it("check api return data",async()=>{
//         const data= await user()
//         expect(data.title).toBe("delectus aut autem")
//         // expect(data).toHaveProperty("id")
//         // expect(data).toHaveProperty("completed")
//     },10000000)
// })

describe("is AUthenticated",()=>{
    it("if user is logged in?",()=>{
        expect(isAuthenticated(true)).toBeTruthy()
    })
})