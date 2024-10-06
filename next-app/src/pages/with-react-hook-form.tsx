import { FieldValues, useForm } from "react-hook-form";

export default function withoutReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    reset();
  };

  return (
    <section id="form">
      <div className="container m-auto px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-area flex flex-col top-44 relative font-bold">
            <div className="flex justify-center flex-col">
              <input
                {...register("email", {
                  required: "Email is required",
                })}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Password must be larger than 7 char",
                  },
                })}
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
                {...register("confirmPassword", {
                  required: "Confirm password in required",
                  validate: (value) =>
                    value === getValues("password") || "Password must match",
                })}
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
