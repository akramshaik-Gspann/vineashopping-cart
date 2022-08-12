import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import AccessoriesProductPage from "../ProductInformation/accessoriesPage";
import accessories from "../../assets/images/electronics.png";
// import BreadCrumb from '../BreadCrumb/breadCrumb';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../../assets/scss/breadCrumb.css';
import '../../assets/scss/productList.css';
import { FiSliders } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import Filter from '../Filter/Filter';

const AccessoriesProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const categoryList = products.filter((value) => value.category === "electronics");
  const {  category } = categoryList;
  return (
    <div className="productCatalog">
      <div className="productCatalog-mobile">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__image">
              <img src={accessories} alt="accessories" />
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__title">
              <h3>Accessories</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="productCatalog-desktop">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div className="productCatalog__title">
              <h3>Accessories</h3>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div className="productCatalog__image">
              <img src={accessories} alt="accessories" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadcrumbslist">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
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
                      alert("Dashboard Clicked");
                    }}
                  >
                     {categoryList[0].category}
                  </Link>
                  <Typography color="textPrimary">
                  Accessories
                  </Typography>
                </Breadcrumbs>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <div className="product-filter">
                <button><FiSliders />Filter Results</button><button><RiArrowUpDownLine /> Sort Products</button>
              </div>
              <div className="breadcrumbslist__filter">
                <p>{categoryList.length} Results</p>
                <div className="sortByLatest">
                  <select>
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div class="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <Filter />
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <AccessoriesProductPage />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccessoriesProductList;
