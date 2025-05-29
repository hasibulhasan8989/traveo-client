import  { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import google from "../assets/google_2965278.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const { logIn,googleRegister,githubRegister } = useContext(AuthContext);

  const handleGithub=()=>{
       
      githubRegister()
       .then(()=>{
        toast.success("Github Register Successful")
       })
       .catch(error=>{
          const message = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
          });
      
  
       })
  
    }
  
    const handleGoogle = () => {
      googleRegister()
        .then(() => {
          toast.success("Registration Successful");
        })
        .catch((error) => {
          const message = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
          });
        });
    };
  

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then(() => {
        toast.success("Login Success");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="min-h-[calc(100vh-300px)] flex justify-center flex-col items-center">
      <h1 class="text-4xl font-bold text-center md:mb-18 my-8 text-lime-500">
        Login now!
      </h1>
      <fieldset className=" bg-base-200 border-base-300 rounded-box min-w-lg border px-8 py-18">
        <form className="fieldset" onSubmit={handleLogIn}>
          <label className="font-bold text-lg">Email address :</label>
          <input
            type="email"
            name="email"
            className="input w-full my-3"
            placeholder="Email"
          />

          <label className="font-bold text-lg">Password :</label>
          <input
            type="password"
            name="password"
            className="input w-full my-3"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div className="my-8 flex items-center gap-4">
          <p className="font-semibold text-[15px]">Continue with : </p>
          <div>
               <button onClick={handleGoogle}>
            <img src={google} alt="" className="w-6 " />
          </button>
          <button onClick={handleGithub} className="ml-4"> <FaGithub size={25}></FaGithub> </button>
          </div>
        </div>
        <Link to='/register'  ><button  className="btn btn-link">Register</button></Link>
      </fieldset>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LoginPage;
