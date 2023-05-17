import React, { useState } from "react";

import userIco from "../../public/userIco.svg";
import lockIco from "../../public/lockIco.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "@/database/firebaseDB";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await logIn(email, password);
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
      <div className="flex flex-row-reverse border rounded-2xl">
        <input
          type="email"
          id="first"
          name="first"
          required
          placeholder="Email"
          className="bg-background mx-2 my-2 outline-none peer"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Image src={userIco} alt="userIco" className="ml-2 peer-focus:scale-75 transform transition duration-y" />
      </div>
      <div className="flex flex-row-reverse border rounded-2xl">
        <input
          type="password"
          id="last"
          name="last"
          required
          placeholder="Password"
          className="bg-background mx-2 my-2 outline-none peer"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Image src={lockIco} alt="lockIco" className="ml-2 peer-focus:scale-75 transform transition duration-y" />
      </div>
      <button
        type="submit"
        className="flex justify-center bg-primary rounded-2xl shadow-md	"
      >
        <p className="my-2">Login</p>
      </button>
      <div className="flex flex-col justify-end group relative">
        <Link href="/forgot" className="flex justify-end underline">Forgot your password?</Link>
      </div>
    </form>
  );
};

export default Login;
