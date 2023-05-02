import PropTypes from "prop-types";

export function Button({ children, ...props }) {
  return (
    <button
      className="h-10 bg-gradient-to-r from-purple3 to-purple4 text-white flex items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
