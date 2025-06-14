import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Textbox = React.forwardRef(({ 
  type, 
  placeholder, 
  label, 
  className, 
  register, 
  name, 
  error, 
  icon,
  rightIcon,
  ...rest 
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          ref={ref}
          {...register}
          {...rest}
          className={clsx(
            "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all duration-200",
            icon ? "pl-10" : "pl-3",
            rightIcon ? "pr-10" : "pr-3",
            error ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500" : "border",
            "py-2.5",
            className
          )}
          aria-invalid={error ? "true" : "false"}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Textbox.displayName = 'Textbox';

Textbox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  register: PropTypes.object,
  name: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  rightIcon: PropTypes.node
};

export default Textbox;