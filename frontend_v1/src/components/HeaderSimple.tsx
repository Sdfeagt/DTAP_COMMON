import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter()
  return (
    <div className="border-b border-white z-30">
      <Image src={Logo} alt="Logo" onClick={() => { router.push("/") }} className='cursor-pointer' />
    </div>
  );
};

export default Header;
