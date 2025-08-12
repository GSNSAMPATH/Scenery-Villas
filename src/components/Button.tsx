// import { FC } from 'react';

// interface ButtonProps {
//   color?: string;
//   size?: string;
//   size0?: string; // Remove this line if you don't need it
//   children: React.ReactNode;
// }

// const Button: FC<ButtonProps> = ({
//   color = 'yellow-300',
//   size = 'md',
//   size0 = '6',
//   children,
//   ...props
// }) => {
//   const buttonClassName = `bg-${color} font-semibold py-${size} px-${size0} rounded-full shadow hover:bg-${color}-400 transition`; // Use size0 here if you need it
//   return (
//     <button className={buttonClassName} {...props}>
//       {children}
//     </button>
//   );
// };

// export default Button;


import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  size?: string;
  size0?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  color = 'yellow-300',
  size = 'md',
  size0 = '6',
  children,
  ...props
}) => {
  const buttonClassName = `pointer-events-auto cursor-pointer  bg-${color} font-semibold py-${size} px-${size0} rounded-full shadow hover:bg-${color}-400 transition`;
  
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
