import { Link, useParams } from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Product_det()
{
    var { product_id } = useParams();
    var [product_info, setProductInfo] = useState({});
    useEffect(()=>{
        var obj = {"product_id":product_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
            console.log(res.data);
            setProductInfo(res.data);
        })
    },[])

    function add_to_cart()
    {
        var obj = {"product_id":product_id, "token": localStorage.getItem("user_token")};
        axios.post("https://a2zithub.org/dairy/abi/addtocart",obj).then((res)=>{
            console.log(res.data);
            window.location.reload();
        })
    }

    return (<>
    <Navbar />
    <br/>
    <br/>
    <h1 className="text-center">Product Details {product_id}</h1>
    <br/>
    <div className="container">
        <div className="row">
            <div className="col-5">
                <img src={product_info.product_img} width="100%" />
            </div>
            <div className="col-7">
                <h3 className="text-primary">{product_info.product_name}</h3>
                <h4> &#8377; {product_info.price} /- </h4>

                { product_info.cart == 'No' ? <button className="btn btn-primary btn-lg" onClick={add_to_cart}>Add To Cart</button> : '' }

                { product_info.cart == 'Yes' ? <Link to="/cart" className="btn btn-success btn-lg">Continue With Cart</Link> : '' }

            </div>
        </div>
    </div>
    
    
    <br/>
    <br/>
    <br/>
    
    <Footer />
    </>)
}

export default Product_det;