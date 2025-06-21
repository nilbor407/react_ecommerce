import { useState } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Checkout()
{
    const navigate = useNavigate();
    const [area,setArea] = useState(""); 
    const [city,setCity] = useState(""); 
    const [district,setDistrict] = useState(""); 
    const [state,setState] = useState(""); 
    const [country,setCountry] = useState(""); 
    const [pincode,setPincode] = useState("");
    const [payment_type,setPayementType] = useState("");

    function place_order(event)
    {
        event.preventDefault();

        var obj = {area,city,district,state,country,pincode,payment_type,"token":localStorage.getItem('user_token')};

        console.log(obj);
        axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
            // console.log("Order Placed",res);
            navigate("/order_list");
        });
    }

    return (<>
        <Navbar />
        <br></br>
        <h1 className="text-center">Secure Checkout</h1>
        <div className="container mt-5 mb-5">
        <div className="card shadow rounded">
            <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Checkout Process</h4>
            </div>
            <div className="card-body">
            <form onSubmit={place_order}>
                <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area" name="area" required  onChange={(e)=> setArea(e.target.value) } />
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" required   onChange={(e)=> setCity(e.target.value) }/>
                </div>
                </div>
                
                <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="district" className="form-label">District</label>
                    <input type="text" className="form-control" id="district" name="district" required   onChange={(e)=> setDistrict(e.target.value) }/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" name="state" required   onChange={(e)=> setState(e.target.value) }/>
                </div>
                </div>

                <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" name="country" required    onChange={(e)=> setCountry(e.target.value) }/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="pincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="pincode" name="pincode" required   onChange={(e)=> setPincode(e.target.value) }/>
                </div>
                </div>

                <div className="mb-4">
                <label htmlFor="payment_type" className="form-label">Payment Type</label>
                <select className="form-select" id="payment_type" name="payment_type" required   onChange={(e)=> setPayementType(e.target.value) }>
                    <option selected disabled value="">Select Payment Type</option>
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
                    <option value="upi">UPI</option>
                    <option value="card">Credit/Debit Card</option>
                </select>
                </div>
                <center>
                    <button type="submit" className="btn btn-success">Place Order</button>
                </center>
            </form>
            </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <Footer />
    </>);
}

export default Checkout;
