# React Dynamic NavLinks

**This package allows you to redner dynamic NavLinks and a basic navbar from the Routes within a react-router-dom BrowserRouter component.**

**It will render the proper navigation link based on the path in the given route's props. Link text is generated from the path as well, but can be customized.**

## Usage

### In your entrypoint:

**_Import the DynamicNavbar Component_**

```
import DynamicNavbar from "dynamic-react-navlinks"
```

**_Wrap your Routes within the DynamicNavbar HOC (Higher Order Component)_**

```
...

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
        <DynamicNavbar>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </DynamicNavbar>
  </BrowserRouter>,
  rootElement
);
```

**DynamicNavbar returns a navbar in its own div tag. The div has a className of "react-dynamic-navbar", and returns with NavLinks to each route. The routes returned will be as children to the React Router Dom Switch component. This package will exclude any routes with url params**

> <Route path="somePath/:slug" component={SomeComponent} />

**_This Route will be available for navigation, however the DynamicNavbar component will not create a link for it._**

_Note: It will not render links for nested Routes_

## Styles

### The DynamicNavbar and NavLinks render with default style objects. These styles can be kept, or they can be overwritten using props (listed below in the "Props" section). The default styles are:

**_Navbar:_**

```
defaultWrapperStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    alignItems: "center",
    height: "70px"
  };
```

**_NavLinks:_**

```
defaultLinkStyles = {
    textDecoration: "none",
    width: "100px",
    fontSize: "2rem",
    fontWeight: "500"
  };
```

_Note on Styles: Styles are all inline._

## Props

1. **DynamicNavbar**

- ##### These Props directly relate to the Navbar layout.

- **_navbarStyles_**
- Use the navbarStyles Props to overwrite the defaults. Pass in an object with standard JSX syntax styles.
  > <DynamicNavbar navbarStyles={{ backgroundColor: 'black' }} />

2. **Route Component**

- ##### Route Component Props have effect on the NavLinks that are returned in your dynamic navbar.

- **_linkText_** Prop (optional):
- Pass linkText prop to use a custom link name instead of the auto generated text (this defaults to a formatted version of the path).
  > <Route path="/blog-detail" component={Blog} />
  > Returns "Blog-detail" as the link.
- The above code would create a default NavLink of 'Blog-detail'. Passing in the "linkText" prop allows you to define what text to use for that particular link.
  > <Route linkText="blog" path="/blog-detail" component={Blog} />
  > Returns "Blog" as the link.
- If no linkText prop is passed for a Route with "/" as its path, the link will default to "Home"
  Ex:

  > <Route exact path="/" component={Home} />
  > Returns "Home" as the link.

- **_linkStyles_** Prop (optional):
- Pass the linkStyles props to the Route component with an object of JSX styles.
  > <Route exact path="/" linkStyles={{ fontSize: "3rem", color: "white"}} component={Home} />
- This will overwrite the default linkStyles given by the HOC.

### Props built in to the Route component are still fully available.

**_activeClass_** Prop (optional):

- The activeClass props works with react-router-dom's NavLink activeClassName prop.
- By default, NavLinks come with the "active" className when active.
- Passing the activeClass props allows you to define a custom name.
  > <Route exact path="/" activeClass="active-home-link" component={Home} />
  > Appends "active-home-link" to the element's class list when active, instead of "active"

_Note: NavLinks here are returned with a className of "dynamic-nav-link". The activeClass appends to that class list: "dynamic-nav-link active"._

### To make new links, simply add a new Route component to your array.

### Standard BrowserRouter functionality is persisted. Route guards, render props, etc work the same as normal.

## Thanks for using React Dynamic Navlinks!
