import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { fetchCartItems } from "../../actions/cart_item_actions";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  user: state.session.id,
  cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCartItems: () => dispatch(fetchCartItems())
})

const NavbarContainer = connect(mSTP, mDTP)(Navbar);
export default NavbarContainer;
