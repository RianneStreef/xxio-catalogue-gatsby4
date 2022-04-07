import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

import { Slide } from "react-slideshow-image";

import "../styles/product.css";
import "react-slideshow-image/dist/styles.css";

import home from "../images/home.png";
import back from "../images/back.png";

const ProductPage = (props) => {
  let products = props.data.allContentfulProduct.nodes;
  let slug = props.params.slug;

  const navBack = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      return (
        <Link
          to={`/${product.categorySlug}`}
          key={`/${product.categorySlug}`}
          className="nav-link"
          alt="Back"
        >
          <img src={back} className="nav-icon-back" alt="Back" />
        </Link>
      );
    });

  const productTitle = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      return (
        <div key={product.id}>
          <h1 className="product-title">{product.productName}</h1>
        </div>
      );
    });

  const productInfo = products
    .filter((product) => product.slug === `/${slug}`)
    .map((product) => {
      function currencyFormat(price) {
        return price
          .toFixed(2)
          .replace(".", ",")
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }

      const slideImages = product.headerImgs.map((headerImg) => {
        return { url: headerImg.file.url };
      });

      return (
        <>
          <div key={product.id}>
            <div className="slide-container">
              {slideImages.length > 1 ? (
                <Slide>
                  {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                      <div
                        style={{
                          backgroundImage: `url(${slideImage.url})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "30vh",
                        }}
                      />
                    </div>
                  ))}
                </Slide>
              ) : (
                <div>
                  {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                      <div
                        style={{
                          backgroundImage: `url(${slideImage.url})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          height: "20vh",
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {product.productUndertitle && <h3>{product.productUndertitle}</h3>}
            {product.productIntro && (
              <ReactMarkdown className="product-intro">
                {product.productIntro.productIntro}
              </ReactMarkdown>
            )}
            {product.techText1 && (
              <div className="tech-description">
                <h3>Technology</h3>
                {product.techImg1 && (
                  <img
                    src={product.techImg1.file.url}
                    className="tech-img"
                    alt=""
                  />
                )}
                <ReactMarkdown>{product.techText1.techText1}</ReactMarkdown>
              </div>
            )}
            {product.techText2 && (
              <div className="tech-description">
                {product.techImg2 && (
                  <img src={product.techImg2.file.url} className="tech-img" />
                )}
                <ReactMarkdown>{product.techText2.techText2}</ReactMarkdown>
              </div>
            )}
            {product.techText3 && (
              <div className="tech-description">
                {product.techImg3 && (
                  <img src={product.techImg3.file.url} className="tech-img" />
                )}
                <ReactMarkdown>{product.techText3.techText3}</ReactMarkdown>
              </div>
            )}
            {product.techText4 && (
              <div className="tech-description">
                {product.techImg4 && (
                  <img src={product.techImg4.file.url} className="tech-img" />
                )}
                <ReactMarkdown>{product.techText4.techText4}</ReactMarkdown>
              </div>
            )}
            {product.techText5 && (
              <div className="tech-description">
                {product.techImg5 && (
                  <img src={product.techImg5.file.url} className="tech-img" />
                )}
                <ReactMarkdown>{product.techText5.techText5}</ReactMarkdown>
              </div>
            )}
            {product.techText6 && (
              <div className="tech-description">
                {product.techImg6 && (
                  <img src={product.techImg6.file.url} className="tech-img" />
                )}
                <ReactMarkdown>{product.techText6.techText6}</ReactMarkdown>
              </div>
            )}
            {product.techText7 && (
              <div className="tech-description">
                {product.techImg7 && (
                  <img src={product.techImg7.file.url} className="tech-img" />
                )}
                <ReactMarkdown>{product.techText7.techText7}</ReactMarkdown>
              </div>
            )}
            {product.specs && (
              <div>
                <h3>{`${product.productName} specs`}</h3>
                <img
                  src={product.specs.file.url}
                  className="specs-img"
                  alt="Product Specs"
                />
              </div>
            )}
            {product.colors && (
              <div>
                <h4>Available colors</h4>
                <p>{product.colors}</p>
              </div>
            )}
            {product.euro && (
              <>
                {product.price1title == null ? (
                  <h3 className="price-title">{`${product.productName} price`}</h3>
                ) : (
                  <h3 className="price-title">{`${product.price1title} price`}</h3>
                )}

                <p>
                  {currencyFormat(product.euro)} &euro;/{" "}
                  {currencyFormat(product.swiss)} CHF /{" "}
                  {currencyFormat(product.kroner)} SEK /{" "}
                  {currencyFormat(product.pound)} &#163;
                </p>
              </>
            )}
            {product.euro2 && (
              <>
                {product.price2title == null ? (
                  <h3>{` ${product.productName} price`}</h3>
                ) : (
                  <h3>{`${product.price2title} price`}</h3>
                )}

                <p>
                  {currencyFormat(product.euro2)} &euro;/{" "}
                  {currencyFormat(product.swiss2)} CHF /{" "}
                  {currencyFormat(product.kroner2)} SEK /{" "}
                  {currencyFormat(product.pound2)} &#163;
                </p>
              </>
            )}
            {product.euro3 && (
              <>
                {product.price3title == null ? (
                  <h3>{` ${product.productName} price`}</h3>
                ) : (
                  <h3>{` ${product.price3title} price`}</h3>
                )}

                <p>
                  {currencyFormat(product.euro3)} &euro;/{" "}
                  {currencyFormat(product.swiss3)} CHF /{" "}
                  {currencyFormat(product.kroner3)} SEK /{" "}
                  {currencyFormat(product.pound3)} &#163;
                </p>
              </>
            )}
            {product.euro4 && (
              <>
                {product.price4title == null ? (
                  <h3>{` ${product.productName} price`}</h3>
                ) : (
                  <h3>{` ${product.price4title} price`}</h3>
                )}

                <p>
                  {currencyFormat(product.euro4)} &euro;/{" "}
                  {currencyFormat(product.swiss4)} CHF /{" "}
                  {currencyFormat(product.kroner4)} SEK /{" "}
                  {currencyFormat(product.pound4)} &#163;
                </p>
              </>
            )}
            {product.availableWhen && (
              <p>In store in {product.availableWhen}</p>
            )}
          </div>
        </>
      );
    });

  return (
    <>
      <Helmet>
        <title>XXIO EU & UK Catalogue</title>
        <meta name="robots" content="nofollow" />
      </Helmet>

      <div className="category-title">
        {navBack}
        <div> {productTitle}</div>
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" alt="Home" />{" "}
        </Link>
      </div>
      <div className="menu-placeholder" />

      <div className="padding">{productInfo}</div>
    </>
  );
};

export const productQuery = graphql`
  query productQuery {
    allContentfulProduct(sort: { fields: index }) {
      nodes {
        productName
        productIntro {
          productIntro
        }
        new
        categorySlug
        colors

        euro
        euro2

        headerImgs {
          file {
            url
          }
        }
        specs {
          file {
            url
          }
        }
        id
        index
        kroner
        kroner2

        new
        pound
        pound2

        price1title
        price2title

        productImage {
          file {
            url
          }
        }
        productUndertitle
        slug
        swiss
        swiss2

        techText1 {
          techText1
        }
        techImg1 {
          file {
            url
          }
        }
        techText2 {
          techText2
        }
        techImg2 {
          file {
            url
          }
        }
        techText3 {
          techText3
        }
        techImg3 {
          file {
            url
          }
        }
        techText4 {
          techText4
        }
        techImg4 {
          file {
            url
          }
        }
        techText5 {
          techText5
        }
        techImg5 {
          file {
            url
          }
        }
        techText6 {
          techText6
        }
        techImg6 {
          file {
            url
          }
        }
        techText7 {
          techText7
        }
        techImg7 {
          file {
            url
          }
        }
      }
    }
  }
`;

ProductPage.Layout = Layout;
export default ProductPage;
