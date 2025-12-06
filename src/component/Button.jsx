import React from 'react';

const Button = ({ 
    children, 
    className = "", 
    variant = "primary", 
    type = "button",
    onClick,
    ...props 
}) => {
    const baseStyles = "font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer";
    
    const variants = {
        primary: "bg-primary hover:bg-primary/90 text-white",
        secondary: "bg-secondary hover:bg-secondary/90 text-white",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-800"
    };

    const variantStyles = variants[variant] || variants.primary;

    return (
        <button 
            type={type}
            className={`${baseStyles} ${variantStyles} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
