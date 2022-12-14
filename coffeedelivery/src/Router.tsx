import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/Index";
import { Checkout } from "./pages/Checkout/Index";
import { Done } from "./pages/Done/Index";
import { Home } from "./pages/Home/Index";

export function Router(){
    return(
        <Routes>
         <Route path="/" element={<DefaultLayout />}>
         <Route path="/" element={<Home />} /> 
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/done" element={<Done />} />
         </Route> 
        </Routes>
    )
}