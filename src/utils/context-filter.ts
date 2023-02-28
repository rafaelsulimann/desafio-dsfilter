import { createContext } from "react";

export type ContextProductsCountType = {
    contextProductsCount : number;
    setContextProductsCount : (contextProcutsCount : number) => void;
}

export const ContextProductsCount = createContext<ContextProductsCountType>({
    contextProductsCount : 0,
    setContextProductsCount : () => {}
})