import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import {useRouter} from "next/router";
interface dashboardInfo {
  info: string,
}
const Header = (props: dashboardInfo) => {
    const router = useRouter()
    const logout = () =>{
      //later on logout the user here
      router.push("/")
    }
    return (
      <div className="flex justify-between border-b border-white">
        <div className="flex"><Image src={Logo} alt="Logo" onClick={()=>{router.push("/")}}  className='cursor-pointer'/></div>
        <div className="flex self-center"><p className="text-2xl">{props.info}</p></div>
        <div className="flex"><button className="flex justify-center self-center bg-primary rounded-2xl shadow-md	px-20 py-2" onClick={() => logout()}>Logout</button></div>
      </div>
    );
}

export default Header