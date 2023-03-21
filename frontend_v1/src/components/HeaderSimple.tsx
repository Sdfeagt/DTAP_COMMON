import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
const Header = () => {
  return (
    <div className="border-b border-white">
      <Image src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
