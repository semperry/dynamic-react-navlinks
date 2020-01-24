const React = require("react");
const NavLink = require("react-router-dom").NavLink;

function DynamicNavbar(props) {
  const routes = props.children;

  const defaultWrapperStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    alignItems: "center",
    height: "70px"
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
    return routes.map(route => {
      const { path, linkStyles, activeClass, linkText } = route.props;

      const setLinkStyles = linkStyles
        ? { ...defaultLinkStyles, ...linkStyles }
        : { ...defaultLinkStyles };

      if (!path.includes("/:")) {
        return (
          <NavLink
            key={path}
            to={`${path}`}
            style={setLinkStyles}
            activeClassName={activeClass || "active"}
            className="dynamic-nav-link"
          >
            {linkText || textFromLink(path)}
          </NavLink>
        );
      }
    });
  };

  return (
    <div>
      <div className="react-dynamic-navbar" style={setNavbarStyles}>
        {renderNavbar()}
      </div>
      {routes}
    </div>
  );
}

export default DynamicNavbar;
