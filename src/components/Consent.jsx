import React, { useEffect } from "react";

import "../styles/Consent.css";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const Consent = () => {
  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    console.log("InitGA");
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    initGA("G-4FDN5XH7W9");
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();

    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div>
      <CookieConsent onAccept={handleAcceptCookie} buttonText={"Accept"}>
        <p className="cookie-text-header">
          By browsing on this page, or clicking "Accept", you consent to our use
          of cookies to analyze traffic.
        </p>
      </CookieConsent>
    </div>
  );
};

export default Consent;
