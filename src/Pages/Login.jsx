import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const dataResponse = await fetch(0, {
    //   // method: SummaryApi.signIn.method,
    //   // credentials: "include",
    //   // headers: {
    //   //   "content-type": "application/json",
    //   // },
    //   // body: JSON.stringify(data),
    // });

    // const dataApi = await dataResponse.json();

    // if (dataApi.success) {
    //   toast.success(dataApi.message);
    //   navigate("/");
    // fetchUserDetails();
    // fetchUserAddToCart();
    // }

    // if (dataApi.error) {
    //   toast.error(dataApi.message);
    // }
  };

  console.log("data login", data);

  return (
    <section
      id="login"
      className="w-full h-[80vh] flex items-center justify-center"
    >
      <div className="mx-auto container p-4">
        <div className="bg-white p-9 w-full max-w-md mx-auto rounded-3xl border shadow-xl shadow-neutral-400">
          <div className="w-[5.5rem] h-[5.5rem] mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="pt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="ml-2">Email : </label>
              <div className="bg-slate-200 p-3 px-4 rounded-full">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="ml-2">Password : </label>
              <div className="bg-slate-200 p-3 px-4 flex items-center rounded-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password..."
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>
                    {showPassword ? (
                      <FaEyeSlash fontSize={20} />
                    ) : (
                      <FaEye fontSize={20} />
                    )}
                  </span>
                </div>
              </div>

              <div>
                <Link
                  to={"/forgot-password"}
                  className="block w-fit ml-auto hover:underline hover:text-red-600"
                >
                  Forgot password ?
                </Link>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-90 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/signup"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
