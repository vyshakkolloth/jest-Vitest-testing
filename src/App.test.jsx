import { describe,expect,it } from "vitest";
import{render,screen} from"@testing-library/react"
import "@testing-library/jest-dom/vitest"
import App from './App.jsx'
import userEvent from "@testing-library/user-event";


describe("App",()=>{
    // it("checking if there i h1 tag",()=>{
    //    render( <App/> )
    // //    expect(screen.getByRole("heading").toHaveTextContent("hello"))
    //   const pageHeader = screen.getByRole("heading",{
    //     name:"hello"
    //   })
    //   expect(pageHeader).toBeInTheDocument();

    // })
    // it("checking by id",()=>{
    //            render( <App/> );
    //            expect(screen.getByTestId("mySpanId")).toBeInTheDocument();
            
            
    //         })
    it("user interaction",async ()=>{
        userEvent.setup();
        render(<App/>);
        const beforeIncreament =screen.getByTestId("span")
        expect(beforeIncreament).toHaveTextContent(0)

     const submitbutton = screen.getByRole("button");
     await userEvent.click(submitbutton);

     const afterIncreament= screen.getByTestId("span");
     expect(afterIncreament).toHaveTextContent(1)

     const input=screen.getByRole("textbox");
     await userEvent.type(input,"10");
     expect(input).toHaveValue()

    })
})

// describe("by  id",()=>{
//     it("checking by id",()=>{
//        render( <App/> )
//        expect(screen.getByTestId("span").toBeInTheDocument())
    
     

//     })
// })
