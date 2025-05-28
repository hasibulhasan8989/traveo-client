
import { useContext} from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const { registerWithEmail } = useContext(AuthContext);
  // const [passError,setPassError]=useState('')

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if(password.length<6){
      toast.error("Must be at least 6 characters long ")
      return;
    }
    if(!/[A-Z]/.test(password)){
      toast.error("Must contain at least one uppercase letter")
      return;
    }
    if(!/[a-z]/.test(password)){
      toast.error("Must contain at least one lowercase letter")
      return;
    }

    

    registerWithEmail(email, password)
      .then(() => {
        toast.success("User Created Successfully");
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

  return (
    <div className="min-h-[calc(100vh-300px)] flex justify-center flex-col items-center">
      <h1 class="text-4xl font-bold text-center  md:mb-18 my-8 text-amber-500">
        Register now!
      </h1>

      <fieldset className="bg-base-200 border-base-300 rounded-box min-w-lg border px-8 pb-8 pt-18">
        <form className="fieldset  " onSubmit={handleRegister}>

          <label className="font-bold text-lg">Name :</label>
          <input
            type="text"
            name="name"
            className="input w-full my-3"
            placeholder="Your Name"
          />
          <label className="font-bold text-lg">Email address :</label>
          <input
            type="email"
            name="email"
            className="input w-full my-3"
            placeholder="Email"
          />
          <label className="font-bold text-lg">Photo URL :</label>
          <input
            type="text"
            name="photoURL"
            className="input w-full my-3"
            placeholder="PhotoURL"
          />

          <label className="font-bold text-lg">Password :</label>
          <input
            type="password"
            name="password"
            className="input w-full my-3"
            placeholder="Password"
          />

          <input
            className="btn btn-neutral mt-4"
            type="submit"
            value="Register"
          />
        </form>
        <Link to='/login'  ><button  className="btn btn-link">Login</button></Link>
      </fieldset>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RegisterPage;
