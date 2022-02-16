import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import home from "../images/home.png";
import back from "../images/back.png";

import Layout from "../components/Layout";

import "../styles/categories.css";

const CategoryPage = (props) => {
  let categories = props.data.allContentfulMenuItem.nodes;
  let menSubs = props.data.allContentfulMenCollection.nodes;
  let womenSubs = props.data.allContentfulLadiesCollection.nodes;
  let softGoodsSubs = props.data.allContentfulAccessoiresSubCategory.nodes;
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const categoryTitle = categories
    .filter((category) => category.category === slug)
    .map((category) => {
      return (
        <div key={category.id}>
          <h1>{category.categoryTitle}</h1>
        </div>
      );
    });

  const categoryInfo = categories
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

  const menSubsList = menSubs.map((menSub) => {
    return (
      <Link to={menSub.slug} key={menSub.id}>
        <div
          className="accessoires-sub"
          style={{
            backgroundImage: `url(${menSub.categoryImage.file.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="category-list-title">{menSub.categoryTitle}</h2>
        </div>
      </Link>
    );
  });

  const womenSubsList = womenSubs.map((womenSub) => {
    return (
      <Link to={womenSub.slug} key={womenSub.id}>
        <div
          className="accessoires-sub"
          style={{
            backgroundImage: `url(${womenSub.categoryImage.file.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="category-list-title">{womenSub.categoryTitle}</h2>
        </div>
      </Link>
    );
  });

  const softGoodsSubsList = softGoodsSubs.map((softGoodsSub) => {
    return (
      <Link to={softGoodsSub.slug} key={softGoodsSub.id}>
        <div
          className="accessoires-sub"
          style={{
            backgroundImage: `url(${softGoodsSub.categoryImage.file.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="category-list-title">{softGoodsSub.categoryTitle}</h2>
        </div>
      </Link>
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

          <div>
            {product.new ? <p className="new">new!</p> : null}
            <p className="product-name">{product.productName}</p>
          </div>
        </Link>
      );
    });

  return (
    <>
      <Helmet>
        <title>XXIO Golf EU & UK Catalogue</title>
        <meta name="robots" content="nofollow" />
      </Helmet>
      <div className="category-title">
        <Link to="/categories" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </Link>
        {slug === "men" ? <h1>Men Collection</h1> : null}
        {slug === "ladies" ? <h1>Ladies Collection</h1> : null}
        {slug === "soft-goods" ? <h1>Soft Goods</h1> : null}
        {slug === "balls" ? <h1>Balls</h1> : null}
        {slug !== "men" &&
        slug !== "ladies" &&
        slug !== "soft-goods" &&
        slug !== "balls" ? (
          <div>{categoryTitle}</div>
        ) : null}
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>
      <div className="menu-placeholder" />

      {slug === "men" ? <div>{menSubsList}</div> : null}
      {slug === "ladies" ? <div>{womenSubsList}</div> : null}

      {slug === "soft-goods" ? <div>{softGoodsSubsList}</div> : null}

      {slug === "balls" ? (
        <>
          <div>{categoryInfo}</div>
          <div className="padding">
            <div className="product-list">{productList}</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export const menuItemsQuery = graphql`
  query menuItemsQuery {
    allContentfulAccessoiresSubCategory {
      nodes {
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt

        categoryTitle

        slug
      }
    }
    allContentfulLadiesCollection {
      nodes {
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        slug
      }
    }
    allContentfulMenCollection {
      nodes {
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        index
        slug
      }
    }
    allContentfulMenuItem {
      nodes {
        category
        categoryImage {
          file {
            url
          }
        }
        categoryImageAlt
        categoryTitle
        slug
      }
    }
    allContentfulProduct {
      nodes {
        categorySlug
        productName
        slug
        new
        productImage {
          file {
            url
          }
        }
        productImageAlt
      }
    }
  }
`;

CategoryPage.Layout = Layout;
export default CategoryPage;
