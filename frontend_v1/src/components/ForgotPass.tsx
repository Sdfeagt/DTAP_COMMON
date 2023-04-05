import React from 'react'
import Image from "next/image";

import userIco from "../../public/userIco.svg";
import Link from 'next/link';


const ForgotPass = () => {
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
    
        var formData = new FormData(event.target);
        const form_values = Object.fromEntries(formData);
        console.log("form values", form_values);
    
        console.log(
          `Here do the Firebase validation later on. If it is correct, then sen the email`
        );

      };
      return (
        <div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
        <div className=''>
            <div className=''>Write your email in order to reset the password.</div>
        </div>
          <div className="flex flex-row-reverse border rounded-2xl">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              className="bg-background mx-2 my-2 outline-none w-full peer"
            />
            <Image src={userIco} alt="userIco" className="ml-2 peer-focus:scale-75 transform transition duration-y" />
          </div>
          <button
            type="submit"
            className="flex justify-center bg-primary rounded-2xl shadow-md	"
          >
            <p className="my-2">Send</p>
          </button>
          <div className="flex flex-col justify-end group relative">
          <Link href="/" className="flex justify-end underline">Go back</Link>
        </div>
        </form>
        </div>
      );
}

export default ForgotPass