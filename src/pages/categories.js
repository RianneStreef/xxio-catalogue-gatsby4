import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";

import headerDemoDay from "../images/header-demoday_2022.jpg";
import download from "../images/icon-download-v2.png";

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

import logo from "../images/logo.svg";

import "../styles/index.css";

const CategoriesPage = (props) => {
  console.log("categories props");
  console.log(props);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      let deferredPrompt;
      const addBtn = document.querySelector(".add-button");
      const saveMsg = document.getElementById("save-message");
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = "flex";

      addBtn.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        {
          addBtn && (addBtn.style.display = "none");
        }

        {
          saveMsg && (saveMsg.style.display = "none");
        }

        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });

      if (addBtn.style.display === "flex") {
        saveMsg.style.display = "none";
      }
    });
  });

  let categories = props.data.allContentfulMenuItem.nodes;

  const categoriesList = categories.map((category) => {
    return (
      <Link
        to={category.slug}
        key={category.id}
        className="category-list-link"
        style={{
          backgroundImage: `url(${category.categoryImage.file.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="category-list-title">{category.categoryTitle}</h2>
      </Link>
    );
  });

  return (
    <>
      <div className="categories-page">
        <Helmet>
          <title>XXIO EU & UK Catalogue</title>
          <meta name="robots" content="nofollow" />
        </Helmet>
        <div className="logo-container">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="categories-list">
          {categoriesList}
          <Link
            to="/demo-day"
            className="category-list-link"
            style={{
              backgroundImage: `url(${headerDemoDay})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="category-list-title">Demo Day</h2>
          </Link>
        </div>
      </div>
      <div className="download">
        <p className="save-message" id="save-message">
          <i>Don't forget to save the XXIO EU Catalogue on your home screen</i>
        </p>

        <div className="add-button" id="add-button">
          <img src={download} alt="add app to home screen" />
        </div>
      </div>
      <p className="copyright">©️ 2023 Dunlop Sports. ALL RIGHTS Reserved.</p>
    </>
  );
};

export const categoriesQuery = graphql`
  query categoriesQuery {
    allContentfulMenuItem(sort: { fields: index }) {
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
      }
    }
  }
`;

CategoriesPage.Layout = Layout;
export default CategoriesPage;
