import PropTypes from "prop-types";

export default function Button({
  children,
  version,
  type,
  isDisabled,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  disabled: "false",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
