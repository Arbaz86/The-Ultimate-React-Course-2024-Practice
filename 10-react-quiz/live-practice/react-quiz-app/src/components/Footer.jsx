import PropTypes from "prop-types";

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

Footer.proptypes = {
  children: PropTypes.any.isRequired,
};

export default Footer;
