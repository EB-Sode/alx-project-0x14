import React from "react";

interface LayoutButtonProps {
  label: string;
  onClick?: () => void;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
    >
      {label}
    </button>
  );
};

export default LayoutButton;
