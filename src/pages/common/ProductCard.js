import { Link } from "react-router-dom";

function ProductCard(props) 
{
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
        <div className="card-img-top-container overflow-hidden position-relative">
          <img 
            src={props.data.product_img} 
            className="card-img-top p-3" 
            alt="Dairy product" 
          />
          <div className="badge bg-success position-absolute top-0 end-0 m-2">New</div>
        </div>
        
        <div className="card-body pt-0">
          <h6 className="card-title fw-semibold mb-1">Premium Dairy Product</h6>
          <p className="card-text text-muted small mb-2">{props.data.product_name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-primary mb-0">₹ {props.data.price} </h6>
            <Link to={"/product_det/"+props.data.product_tbl_id}>
              <button className="btn btn-outline-primary btn-sm rounded-pill px-3">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;