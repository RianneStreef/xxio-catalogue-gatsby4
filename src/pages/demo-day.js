import React from "react";
import { Link } from "gatsby";

import "../styles/demo-day.css";

import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import home from "../images/home.png";
import back from "../images/back.png";

import EUFlag from "../images/EU-flag.svg";
import UKFlag from "../images/UK-flag.svg";

const DemoDayPage = () => {
  return (
    <>
      <Helmet>
        <title>XXIO EU & UK Catalogue</title>
        <meta name="robots" content="nofollow" />
      </Helmet>
      <div className="category-title">
        <Link to="/categories" className="nav-link">
          <img src={back} className="nav-icon-back" />
        </Link>
        <div>Demo Days</div>
        <Link to="/categories" className="nav-link">
          <img src={home} className="nav-icon-home" />{" "}
        </Link>
      </div>
      <div className="menu-placeholder" />
      <div className="demo-day-links padding-sides">
        <p className="demo-title">
          To find a Demo Day near you, <br />
          follow one of the following links:
        </p>
        <hr className="separator" />

        <div className="flag-container">
          <a
            className="demo-link"
            href="https://www.xxio.eu/event-days.html"
            target="blank"
          >
            <img className="flag-link" src={EUFlag} alt="european flag" />
            <p>EU Events website</p>
          </a>
          <a
            className="demo-link"
            href="https://www.xxiouk.com/en/event-days.html"
            target="blank"
          >
            <img className="flag-link" src={UKFlag} alt="united kingdom flag" />
            <p>UK Events website</p>
          </a>
        </div>
      </div>
      <div className="padding-sides">
        <hr className="separator" />

        <h6 className="demo-day-texts">English</h6>
        <p>
          For any information concerning the location and dates of the Demo
          Days, please contact us on infodemoday@srixoneurope.com. Clearly
          indicate the country and your postal code. We will send you the
          details as quickly as possible.
        </p>
        <br />
        <h6>Español</h6>
        <p>
          Si necesita cualquier información sobre las fechas y lugares de los
          “Demo Days”, por favor escribanos un email a la dirección
          infodemoday@srixoneurope.com indicando su código postal y país, y
          estaremos encantados de responderle lo antes posible.
        </p>
        <br />
        <h6>Français</h6>
        <p>
          Pour tout renseignement concernant les dates et lieus des Demo Day,
          contactez-nous sur l’adresse infodemoday@srixoneurope.com en indiquant
          votre pays et votre code postal, nous nous ferons un plaisir de vous
          donner toutes les informations nécessaires dans les meilleurs délais.
        </p>
        <br />
        <h6>Deutsch</h6>
        <p>
          Für genaue Informationen zu Daten und Adressen dieser Demotage in
          Ihrer Umgebung, dürfen Sie uns gerne unter folgender Emailadresse :
          infodemoday@srixoneurope.com kontaktieren. Bitte geben Sie hierfür
          Ihre Postleitzahl und Ihr Land an und wir werden uns schnellstmöglich
          mit Ihnen in Verbindung setzen.
        </p>
      </div>
    </>
  );
};

DemoDayPage.Layout = Layout;
export default DemoDayPage;
