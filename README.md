# React Dynamic NavLinks

**This package allows you to redner dynamic NavLinks from the Routes within a react-router-dom BrowserRouter comopnent.**

**It will render the link based on the path. Link text is generated from the path as well**

## Usage

### entry.js

```
import { GenerateRoutesArray } from "dynamic-react-navlinks"

...

const routes = [
  <Route exact path="/" component={App} />,
  <Route path="/about" component={About} />,
  <Route path="/contact" component={Contact} />
];

const dynamicRoutes = GenerateRoutesArray.toArray(routes);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <DynamicNavBar dynamicRoutes={dynamicRoutes} />
      <Switch>
        {dynamicRoutePaths}
      </Switch>
    </div>
  </BrowserRouter>,
  rootElement
);
```

### Nav component (if importing, otherwise add this in lieu of the above listed NavBar component)

```
import { dynamicLink } from "dynamic-react-navlinks";

export default function DynamicNavBar(props) {

  ...

  const renderLinks = () => {
    return props.dynamicRoutes.map(route => {
      return dynamicLink(route.props.path);
    });
  };

  return <div>{renderLinks()}</div>;
}

```

## Props

1. **Route Component**

- **Key** Prop (recommended):

  - Pass a key prop to your routes to remove warning.
    > <Route key={"your-unique-key"} />

- **linkText** Prop (optional):
- Pass linkText prop to use a custom link instead of auto generated text (this defaults to the route text). Use with dynamicLink method.
  > <Route linkText={"Home"} />

## Methods

1. GenerateRoutesArray.**toArray(routesArray)**

- Call static method and pass in array of routes to strip properties from each.
- Returns array of objects used to render dynamic links.

2. **dynamicLink(route, linkText)**

- Returns JSX to render.
- Map your routes and call dynamicLink for each element.
- Route argument can be passed by using props.path.
- linkText (optional argument) defaults to Path. Use with props.linkText
- ex:

```
const renderLinks = () => {
  return props.dynamicRoutes.map(route => {
    return dynamicLink(route.props.path, route.props.linkText);
  });
};

```

To make new links, simply add a new Route component to your array.
