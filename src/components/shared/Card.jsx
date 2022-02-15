import PropTypes from "prop-types";

export default function Card({ reverse, children }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.prototypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
