import React, { useContext } from "react";
import { AuthContext } from "../Components/Contexts/AuthProvider";
import Loading from "../Components/Loading/Loading";
import Swal from "sweetalert2";

type Props = {};
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

const resetPassword = (props: Props) => {
  const { loading, setLoading, resetPassword } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector<HTMLInputElement>(
      'input[name="email"]'
    );
    console.log(emailInput);
    if (emailInput) {
      const email = emailInput.value;

      Promise.resolve(resetPassword(email))
        .then((result) => {
          console.log(result);
          Toast.fire({
            icon: "success",
            title: `Please Check Your Email`,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          Toast.fire({ icon: "error", title: `${err.message}` });
          setLoading(false);
        });
    }
  };
  return (
    <div className="relative top-40 ">
      <form
        onSubmit={handleSubmit}
        className="min-w-screen mb-[320px] flex-col flex justify-center items-center"
      >
        <label htmlFor="Email" className="pr-40 pb-3 uppercase font-light">
          Email :
        </label>
        <input
          type="email"
          name="email"
          className="p-3 outline-none border border-indigo-500"
        />
        <div className="relative">
          <button
            type="submit"
            className=" w-full text-center text-indigo-700 border border-indigo-700 bg-white p-1  mt-5  hover:bg-indigo-100 transition-all duration-150 ease-in rounded-md"
          >
            {" "}
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default resetPassword;
