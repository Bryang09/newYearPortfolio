import React from "react";

import { links } from "./NavLinks";

import { Link } from "react-router-dom";

const Nav = () => {
  const nav = links.map((res, i) => {
    const { link, text } = res;
    return (
      <h4 key={i} className={i === 3 ? "resume" : null}>
        {i !== 3 ? <span>{`0${i + 1}.`}</span> : ""}

        {i === 2 || i === 3 ? (
          <a href={link}>{text}</a>
        ) : (
          <Link to={`/${link}`}>{text}</Link>
        )}
      </h4>
    );
  });
  return nav;
};

export default Nav;
