import { PropTypes } from "prop-types";
const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
