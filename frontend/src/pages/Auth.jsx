import React, { useState } from "react";
import Input from "../components/Input";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  var [email, setEmail] = useState("");
  var [name, setName] = useState("");
  var [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = () => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  };
  const register = async () => {
    // console.log("here in auth.tsx  =========", email, name, password);
    // try {
    //   console.log("here in auth.tsx  =========", email, name, password);
    //   await axios.post("/api/register", {
    //     email,
    //     name,
    //     password,
    //   });
    //   console.log("here in auth.tsx  =========", email, name, password);
    //   // login();
    // } catch (error) {
    //   console.log("here in catch of registration    ");
    //   console.log(error);
    // }

    console.log("shik shak shok");
  };
  return (
    <div className="relative h-full w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src={logo} className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={32} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}