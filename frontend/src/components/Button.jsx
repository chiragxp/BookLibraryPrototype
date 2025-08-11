const Button = ({
  onClick,
  children,
  ariaLabel,
  className = "btn",
  type = "button",
}) => (
  <button
    type={type}
    onClick={onClick}
    aria-label={ariaLabel}
    className={className}
  >
    {children}
  </button>
);

export default Button;
