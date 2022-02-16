import React, { useState } from "react";

import "../styles/global.css";

const Layout = ({ children }) => {
  const [collection, setCollection] = useState("");

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      // props to drill
      collection,
      setCollection,
    })
  );
  return (
    <div className="layout">
      <section className="content">{childrenWithProps}</section>
    </div>
  );
};

export default Layout;
