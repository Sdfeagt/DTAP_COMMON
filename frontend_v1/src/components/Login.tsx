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
  const [showLoad, setShowLoad] = useState(false)
  const [wrongCred, setWrongCred] = useState(false)
  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setWrongCred(false)
    try {
      setShowLoad(true)
      await logIn(email, password);
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.message);
      setShowLoad(false)
      setWrongCred(true)
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-7" >
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
      <div className="flex justify-center relative">
        <button
          type="submit"
          className=" bg-primary rounded-2xl shadow-md w-full hover:bg-primary/75"
        >
          <p className="text-center my-2">Login</p>
        </button>
        {showLoad ? <div className="absolute left-60 bottom-0"><div className="flex justify-center group relative mr-4">
          <div aria-label="Loading..." role="status">
            <svg className="h-8 w-8 animate-spin stroke-gray-500">
              <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
              </line>
            </svg>
          </div>
          <div aria-label="Loading..." role="status">
            <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
              <path className="fill-gray-200" d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z">
              </path>
              <path className="fill-primary" d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z">
              </path>
            </svg>
          </div>
        </div>
        </div>
          : <div></div>}
      </div>
      {wrongCred ? <div className="flex justify-center text-sm text-red bg-surface_err border rounded-2xl shadow-md"> <p className="my-1">Wrong email or password</p></div> : <div></div>}
      <div className="flex flex-col justify-end group relative">
        <Link href="/forgot" className="flex justify-end underline">Forgot your password?</Link>
      </div>

    </form>
  );
};

export default Login;