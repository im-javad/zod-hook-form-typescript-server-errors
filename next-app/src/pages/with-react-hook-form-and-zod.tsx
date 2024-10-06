import { SignUpSchemaType, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function withoutReactHookFormAndZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    const response = await fetch("../api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: 2834893745385784,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      alert("Submitting form failled!");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong!");
      }
    }

    // reset();
  };

  return (
    <section id="form">
      <div className="container m-auto px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-area flex flex-col top-44 relative font-bold">
            <div className="flex justify-center flex-col">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 bg-customAqua my-1 p-1 rounded-md text-black duration-1000"
              />
              {errors.email && (
                <strong className="bg-red-900 p-1 rounded-lg mb-3">
                  {`${errors.email.message}`}
                </strong>
              )}
            </div>
            <div className="flex justify-center flex-col">
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full md:w-1/2 bg-customAqua my-1 p-1 rounded-md text-black duration-1000"
              />
              {errors.password && (
                <strong className="bg-red-900 p-1 rounded-lg mb-3">
                  {`${errors.password.message}`}
                </strong>
              )}
            </div>
            <div className="flex justify-center duration-1000 flex-col">
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                className="w-full md:w-1/2 bg-customAqua my-1 p-1 rounded-md text-black duration-1000"
              />
              {errors.confirmPassword && (
                <strong className="bg-red-900 p-1 rounded-lg mb-3">
                  {`${errors.confirmPassword.message}`}
                </strong>
              )}
            </div>
            <div className="flex justify-center">
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-orange-700 w-1/2 my-3 md:w-1/4 p-1 rounded-md hover:bg-green-900 duration-1000"
              >
                Let me
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
