import PropTypes from "prop-types"

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

function Button({ text, size = "medium", onClick, disabled = false }){
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold rounded ${
        sizes[size]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

// Define prop types for better control
Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;