import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductList from "./ProductList";

function App2(){
    return (
        

        <BrowserRouter>
        <App />
        <Routes>
            <Route path="ProductList" element={<ProductList />}/>
        </Routes>        
        </BrowserRouter>
    )
}
export default App2;