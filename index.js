const NavLink = require("react-router-dom").NavLink;
const React = require("react");

export class GenerateRoutesArray {
  // TODO
  // Validations for checking if array
  static toArray = (...routes) => {
    // this.routes = routes[0];

    // this.paths = routes[0].map(route => {
    //   return route.props.path;
    // });

    return [...routes][0];
  };

  static textFromRoute = route => {
    // TODO
    // Logic for hyphens and nested routes
    const strippedSlash =
      route.split("/").join("") === "" ? "home" : route.split("/").join("");
    const capitalized =
      strippedSlash.split("")[0].toUpperCase() + strippedSlash.slice(1);

    return capitalized;
  };
}

export const dynamicLink = (route, linkText) => {
  // TODO
  // active className prop
  linkText = linkText || GenerateRoutesArray.textFromRoute(route);
  return (
    <div key={route}>
      <NavLink to={route}>{linkText}</NavLink>
    </div>
  );
};
