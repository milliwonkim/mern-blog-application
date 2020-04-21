import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

/**<PrivateRoute exact path="/blog/post/create" component={CreatePostPage} /> 
 * Component => CreatePostPage
 * auth => 'state.auth' which is reducer of redux
 * ...rest => exact, path etc... properties
 * props => route props(match, location, history)
*/
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
   <Route
      {...rest}
      render={props =>
         auth.isAuthenticated === true ? (
            <Component {...props} />
         ) : (
            <Redirect to="/login" />
         )
      }
   />
);

PrivateRoute.propTypes = {
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
