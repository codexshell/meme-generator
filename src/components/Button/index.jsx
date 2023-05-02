import PropTypes from "prop-types";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={
        "rounded-[5px] h-10 bg-gradient-to-r from-purple3 to-purple4 text-white flex items-center justify-center font-karla font-bold leading-[18.7px] tracking-[-0.1em]" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
