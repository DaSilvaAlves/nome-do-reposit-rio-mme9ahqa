import from 'react';

interface ButtonProps {
 : string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick} aria-label={label}>
      {label    </button>
  );
};

export default Button;