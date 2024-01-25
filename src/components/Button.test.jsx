// import { describe } from "vitest";
// import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom/vitest"

describe("button test",()=>{
    it("props",()=>{
        render(<Button type="button" title="submit"/>)
        expect(screen.getByRole("button")).toHaveTextContent("submit")
    })
})