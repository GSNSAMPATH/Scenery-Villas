import { FC, HTMLProps } from 'react';
interface ButtonProps {
  color?: string; // e.g. 'yellow-300', 'blue-500', etc.
  size?: string;
  size0?: string; // e.g. 'sm', 'md', 'lg', etc.
  children: React.ReactNode;
  className?: string; // Add this property to pass additional class names
}

const Button: FC<ButtonProps> = ({
  color = 'yellow-400',
  size = '4',
  size0 = '2',
  children,
  className,
  ...props
}) => {
const buttonClassName = `bg-${color} font-semibold py-${size} px-6 rounded-full shadow hover:bg-${color}-400 transition`;  return (
    <button className={`${buttonClassName} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;