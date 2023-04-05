import React from "react";
import Image from "next/image";

import userIco from "../../public/userIco.svg";
import lockIco from "../../public/lockIco.svg";
import robotIco from "../../public/robotIco.svg";

interface inLogin {
  inLoginValue: Boolean;
}

const Register = () => {
  const temp: inLogin = {
    inLoginValue: false,
  };
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    var formData = new FormData(event.target);
    const form_values = Object.fromEntries(formData);
    console.log("form values", form_values);

    console.log(
      `Here do the Firebase validation later on. If it is correct, then router.push to the dashboard`
    );
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
