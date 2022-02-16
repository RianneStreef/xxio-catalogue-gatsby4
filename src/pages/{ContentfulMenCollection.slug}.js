import React from "react";
import { Link, graphql } from "gatsby";
import home from "../images/home.png";
import back from "../images/back.png";

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

import "../styles/categories.css";

const menSubCategoryPage = (props) => {
  let menSubs = props.data.allContentfulMenCollection.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const categoryTitle = menSubs
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <h1>{category.categoryTitle}</h1>
        </div>
      );
    });

  const categoryInfo = menSubs
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <img
            className="category-info-image"
            src={category.categoryImage.file.url}
            alt={category.categoryImageAlt}
          />
          <div className="padding">
            {category.categoryUnderTitle ? (
              <h2>{category.categoryUnderTitle}</h2>
            ) : null}
            {category.categoryIntroText ? (
              <p className="category-intro-text">
                {category.categoryIntroText.categoryIntroText}
              </p>
            ) : null}
          </div>
        </div>
      );
    });

  const productList = products
    .filter((product) => product.categorySlug === slug)
    .map((product) => {
      return (
        <Link to={product.slug} key={product.id} className="product-listing">
          <img
            className="product-list-image"
            src={product.productImage.file.url}
            alt={product.productImageAlt}
          />

          <div className="product-list-title">
            <p>
              {product.new ? <p className="new">new!</p> : null}
              <p className="product-name">{product.productName}</p>
            </p>
          </div>
        </Link>
      );
    });

  return (
    <>
      <Helmet>
        <title>XXIO EU & UK Catalogue</title>
        <meta name="robots" content="nofollow" />
      </Helmet>
      <div className="category-title">
        <Link to="/men" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </Link>

        <div> {categoryTitle}</div>
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>
      <div className="menu-placeholder" />
      <div>{categoryInfo}</div>
      <div className="padding">
        <div className="product-list">{productList}</div>
      </div>
    </>
  );
};

export const menCollectionQuery = graphql`
  query menCollectionQuery {
    allContentfulMenuItem {
      nodes {
        id
        slug
        categoryImageAlt
        categoryTitle
        categoryImage {
          file {
            url
          }
        }

        categoryIntroText {
          categoryIntroText
        }
      }
    }

    allContentfulMenCollection(sort: { fields: index }) {
      nodes {
        id
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        slug
        index
      }
    }

    allContentfulProduct(sort: { fields: index }) {
      nodes {
        id
        index
        productName
        slug
        new
        availableWhen
        categorySlug
        productImage {
          file {
            url
          }
        }
      }
    }
  }
`;

menSubCategoryPage.Layout = Layout;
export default menSubCategoryPage;
