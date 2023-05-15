import React from "react";

import userIco from "../../public/userIco.svg";
import lockIco from "../../public/lockIco.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter()

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);
    console.log("form values", form_values);

    console.log(
      `Here do the Firebase validation later on. If it is correct, then router.push to the dashboard`
    );
    router.push("/dashboard")
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
