import React from "react";

import { links } from "./NavLinks";

import { Link } from "react-router-dom";

const Nav = () => {
  const nav = links.map((res, i) => {
    return (
      <h4 key={i}>
        <span>0{i + 1}.</span>
        {i === 2 || i === 3 ? (
          <a href={res.link}>{res.text}</a>
        ) : (
          <Link to={`/${res.link}`}>{res.text}</Link>
        )}
      </h4>
    );
  });
  return nav;
};

export default Nav;
