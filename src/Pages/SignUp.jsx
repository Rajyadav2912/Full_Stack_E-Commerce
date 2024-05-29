import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
// import toast from "react-hot-toast";
import ImageToBase64 from "../Helper/ImageToBase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    profilePic: "",
  });

  // const navigate = useNavigate();
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

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await ImageToBase64(file);

    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
    // console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data SignUp", data);

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

  return (
    <section
      id="signup"
      className="w-full h-[80vh] flex items-center justify-center"
    >
      <div className="mx-auto container p-1">
        <div className="bg-white p-5 w-full max-w-md mx-auto rounded-3xl border shadow-xl shadow-neutral-400">
          <div className="w-[5.5rem] h-[5.5rem] mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="signup icons" />
            </div>
            <form>
              <label>
                <div className="absolute bg-opacity-80 text-xs bottom-0 w-full bg-slate-200 pb-4 pt-2 cursor-pointer text-center">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                  required
                />
              </label>
            </form>
          </div>

          <form className="pt-2 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="ml-2">Name : </label>
              <div className="bg-slate-200 p-3 px-4 rounded-full">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
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

            <div className="flex flex-col gap-1">
              <label className="ml-2">Password : </label>
              <div className="bg-slate-200 p-3 px-4 flex items-center rounded-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password..."
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  required
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
            </div>

            <div className="flex flex-col gap-1">
              <label className="ml-2">Confirm Password : </label>
              <div className="bg-slate-200 p-3 px-4 flex items-center rounded-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your confirm password..."
                  value={data.confirmpassword}
                  name="confirmpassword"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? (
                      <FaEyeSlash fontSize={20} />
                    ) : (
                      <FaEye fontSize={20} />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-90 transition-all mx-auto block mt-6">
              Register
            </button>
          </form>

          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
