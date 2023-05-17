import React, { useState } from "react";
import Image from "next/image";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebaseDB";

import userIco from "../../public/userIco.svg";
import lockIco from "../../public/lockIco.svg";
import robotIco from "../../public/robotIco.svg";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [reppassword, setRepPassword] = useState('')
  const [ID, setID] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (password == reppassword) {
      //TODO: check if the ID number exists in the DB
      //TODO: also POST the new user to the "users" collections
      try {
        await signUp(email, password);
        router.push("/dashboard");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-7 ">
        <div className="flex flex-row-reverse border rounded-2xl">
          <input
            type="email"
            id="email"
            name="first"
            required
            placeholder="Email"
            className="bg-background mx-2 my-2 outline-none peer"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Image src={userIco} alt="userIco" className="ml-2 peer-focus:scale-90" />
        </div>
        <div className="flex flex-row-reverse border rounded-2xl">
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            className="bg-background mx-2 my-2 outline-none peer"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Image src={lockIco} alt="lockIco" className="ml-2 peer-focus:scale-75 transform transition duration-y" />
        </div>
        <div className="flex flex-row-reverse border rounded-2xl">
          <input
            type="password"
            id="repeatpassword"
            name="repeatpassword"
            required
            placeholder="Repeat Passsword"
            className="bg-background mx-2 my-2 outline-none peer"
            onChange={(e) => setRepPassword(e.target.value)}
          />
          <Image src={lockIco} alt="lockIco" className="ml-2 peer-focus:scale-75 transform transition duration-y" />
        </div>

        <div className="flex flex-row-reverse border rounded-2xl">
          <input
            type="text"
            id="robotID"
            name="robotID"
            required
            placeholder="Robot ID Number"
            className="bg-background mx-2 my-2 outline-none peer"
            onChange={(e) => setID(e.target.value)}
          />
          <Image src={robotIco} alt="robotIco" className="ml-2 peer-focus:scale-75 transform transition duration-y" />
        </div>
        <button
          type="submit"
          className="flex justify-center bg-primary rounded-2xl shadow-md	"
        >
          <p className="my-2">Register</p>
        </button>
        <div className="flex flex-col justify-end group relative">
          <div className="flex justify-end underline">What&apos;s robot ID number?</div>
          <div className="hidden justify-end group-hover:block absolute top-10 left-0 border rounded-2xl shadow-md p-2 text-sm">You can find the ID number at the back of the device.</div>
        </div>
      </form>
    </div>
  );
};

export default Register;
