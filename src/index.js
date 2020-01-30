import React from "react";
import { BrowserRouter, Switch, NavLink } from "react-router-dom";

const DynamicNavbar = props => {
  const routes = props.children;

  const defaultWrapperStyles = {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    alignItems: "center",
    height: "70px",
    marginBottom: "35px"
  };

  const setNavbarStyles = props.navbarStyles
    ? { ...defaultWrapperStyles, ...props.navbarStyles }
    : { ...defaultWrapperStyles };

  const defaultLinkStyles = {
    textDecoration: "none",
    width: "100px",
    fontSize: "2rem",
    fontWeight: "500"
  };

  const textFromLink = path => {
    const strippedSlash =
      path.split("/").join("") === "" ? "home" : path.split("/").join("");

    return strippedSlash.split("")[0].toUpperCase() + strippedSlash.slice(1);
  };

  const renderNavbar = () => {
    if (!Array.isArray(routes)) {
      const { path, linkStyles, activeClass, linkText } = routes.props;
      const setLinkStyles = linkStyles
        ? { ...defaultLinkStyles, ...linkStyles }
        : { ...defaultLinkStyles };

      if (!path.includes("/:")) {
        return (
          <NavLink
            key={path}
            to={path}
            style={setLinkStyles}
            activeClassName={activeClass || "active"}
            className="dynamic-nav-link"
          >
            {linkText || textFromLink(path)}
          </NavLink>
        );
      }
    } else {
      return routes.map(route => {
        const { path, linkStyles, activeClass, linkText } = route.props;

        const setLinkStyles = linkStyles
          ? { ...defaultLinkStyles, ...linkStyles }
          : { ...defaultLinkStyles };

        if (!path.includes("/:")) {
          return (
            <NavLink
              key={path}
              to={path}
              style={setLinkStyles}
              activeClassName={activeClass || "active"}
              className="dynamic-nav-link"
            >
              {linkText || textFromLink(path)}
            </NavLink>
          );
        }
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <div className="react-dynamic-navbar" style={setNavbarStyles}>
          {renderNavbar()}
        </div>
        <Switch>{routes}</Switch>
      </div>
    </BrowserRouter>
  );
};

export default DynamicNavbar;
