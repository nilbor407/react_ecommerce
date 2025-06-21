import { useEffect, useState } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import ProductCard from "./common/ProductCard";
import axios from "axios";

function Products(){

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
            setProducts(res.data);
        });
    },[])

    return (<>
        <Navbar />
        <br/><br/>
        <h1 className="text-center">Products</h1>
        <br/>
        <div className="container">
            <div className="row">
                { products.map((val,index)=>(
                    <ProductCard data={val} />
                ))}
            </div>
        </div>
        <br/><br/>
        <br/><br/>
        <Footer />
    </>)
}

export default Products;