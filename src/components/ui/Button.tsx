import React from 'react';
import clsx from 'clsx';
import '../../app/sections.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(
                    'btn',
                    `btn-${variant}`,
                    `btn-${size}`,
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
