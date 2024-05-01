"use client";

import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full rounded-md justify-center bg-white px-4 py-2 text-gray-500 shado-sm ring-1 ring-inset ring-green-300 hover:bg-green-50 focus:outline-offset-0"
    >
      <Icon className="text-green-500" size={20} />
    </button>
  );
};

export default AuthSocialButton;
