import { useEffect, useState } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
function Cart()
{
    var [products,setProducts] = useState([]); 
    function getProducts()
    {
        var obj = {"token":localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        });
    } 
    useEffect(()=>{
        getProducts();
    },[]);

    function remove_cart_qty(product_econ_cart_id)
    {
        console.log("product_econ_cart_id",product_econ_cart_id);
        console.log("token",localStorage.getItem("user_token"));
        var obj = {"product_econ_cart_id":product_econ_cart_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty",obj).then((res)=>{
            console.log("result",res);
            getProducts();
        });
    }

    function inc_qty(product_econ_cart_id)
    {
        var obj = {"product_econ_cart_id":product_econ_cart_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty",obj).then((res)=>{
            console.log("result",res);
            getProducts();
        });
    }

    return (<>
        <Navbar />
        <br/><br/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center">Your Cart</h1>
                    <table className="table">
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Qty</th>
                            <th>Product Total</th>
                            <th></th>
                        </tr>
                        { products.map((val, index)=>(
                            <tr>
                                <td> <img src={val.product_img} width="100px"/></td>
                                <td> {val.product_name} </td>
                                <td> &#8377; {val.price} </td>
                                <td> 
                                    <button className="btn me-2 ms-2 pt-0">-</button>
                                    {val.qty} 
                                    <button className="btn me-2 ms-2 pt-0" onClick={ () => inc_qty(val.product_econ_cart_id) } >+</button>
                                </td>
                                <td> &#8377; {val.qty * val.price} </td>
                                <td>
                                    <button className="btn" onClick={ () => remove_cart_qty(val.product_econ_cart_id) } >&#10005;</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <div className="text-center">
                        <Link to="/checkout">
                            <button className="btn btn-primary btn-lg">Proceed To Buy</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


        

        <br/><br/>
        <br/><br/>
        <Footer />
    </>)
}

export default Cart;


// onClick={()=>{ calltofunction(parameter) }}

// onClick={calltofunction}

// { name() }


// getProducts() => fetch products


// remove        => delete from cart