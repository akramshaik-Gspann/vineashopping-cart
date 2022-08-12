import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
} from "../../redux/actions/productsActions";
import BreadCrumb from "../BreadCrumb/breadCrumb";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../../assets/scss/productDetail.css';
import Swatch1 from '../../assets/images/Swatch 01.png';
import Swatch2 from '../../assets/images/Swatch 02.png';
import Swatch3 from '../../assets/images/Swatch 03.png';
import Swatch4 from '../../assets/images/Swatch 04.png';
import heart from '../../assets/images/heart.png';




const ProductDetails = (props) => {

  const { cartItems, onAdd, onRemove } = props;
  const { productId } = useParams();
  let products = useSelector((state) => {
    return state.allProducts.products;
  });
  const dispatch = useDispatch();
  const product = products.find(product => product.id == productId);
  const { image, title, price, description, rating } = product;

  useEffect(() => {
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const [qty, setQty] = useState(1);

  function onChange(e) {
    const v = e.target.value;
    if (v <= 0) setQty(0);
    else if (v >= 6) setQty(6);
    else setQty(v);
  }


  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="productdetails">
          <div className="container">
            <div className="productdetails__right-breadcrumb mobile">
              <BreadCrumb />
            </div>

            <div class="aem-Grid aem-Grid--12 details ">
              <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12 colors_images">
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
              </div>

              <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                <div className="productdetails__left">
                  <img src={image} />
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="productdetails__right">
                  <div className="productdetails__right-breadcrumb">
                    <div className="breadcrumbs">
                      <Breadcrumbs aria-label="breadcrumb">
                        <Link
                          color="inherit"
                          href="/"
                        >
                          Home
                        </Link>
                        <Link
                          color="inherit"
                          href="/getting-started/installation/"
                          onClick={(event) => {
                            event.preventDefault();
                            alert("Jewellery Page Clicked");
                          }}
                        >
                          {product.category}
                        </Link>
                        <Typography color="textPrimary">
                          Outerwear
                        </Typography>
                      </Breadcrumbs>
                    </div>
                  </div>
                  <h1 className="productdetails__right-title">{title}</h1>
                  <h4 className="productdetails__right-price">
                    ${price}
                  </h4>
                  <h5 className="productdetails__right-rating">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i><span>({rating.count})</span>
                  </h5>
                  <p className="productdetails__right-description">{description}&nbsp;<span>Read More</span></p>
                  <hr />
                  <h3>Quantity</h3>
                  <div className="input-group w-auto align-items-center">
                    <input
                      type="button"
                      value="-"
                      className="button-minus border rounded-circle"
                      data-field="quantity"
                      onClick={() => onRemove(product)}
                    />&nbsp;&nbsp;
                    <h6 className="quant">{cartItems?.find((x) => x.id === product.id)?.qty || 1}</h6>&nbsp;&nbsp;
                    <input
                      type="button"
                      value="+"
                      className="button-plus border rounded-circle"
                      data-field="quantity"
                      onClick={() => onAdd(product)}
                    />
                  </div>
                  <button className="addtocart"
                    onClick={() => onAdd(product)}
                  >Add to Cart</button>
                  <div className="productdetails__right-share">
                    <ul>
                      <li><a href="#"><img src={heart} /> Save</a></li>
                      <li><a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i> Share</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                <div className="productdetails__left-desc">
                  <h2>{title}</h2>
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
