import { useParams } from "react-router-dom";

function Order_details()
{
    const {order_id} = useParams();

    return (
        <>
            <h1>Order_details { order_id } </h1>
        </>
    )
}

export default Order_details;