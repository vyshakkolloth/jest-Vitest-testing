// import { describe, expect } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook ,act} from "@testing-library/react";


describe("usecounter",()=>{
    it("render default count ",()=>{
        const {result}=renderHook(useCounter);
        expect(result.current.count).toBe(0)
    })
    it("render initial count ",()=>{
        const {result}=renderHook(()=>useCounter(10));
        expect(result.current.count).toBe(10)
    })
    it("render incrament count ",()=>{
        const {result}=renderHook(()=>useCounter(10));// arange
        act(()=>result.current.onIncreament()) //act
        expect(result.current.count).toBe(11)//assert
    })
})