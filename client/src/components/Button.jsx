import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ icon, className, label, type, onClick, disabled, isLoading }) => {
  return (
    <button
      type={type || "button"}
      className={clsx(
        "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200",
        disabled ? "opacity-70 cursor-not-allowed" : "hover:shadow-md",
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default Button;