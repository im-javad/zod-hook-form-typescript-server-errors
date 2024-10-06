type props = {
  email: string;
  password: string;
  confirmPassword: string;
  isSubmitting: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
};

const Form: React.FC<props> = ({
  email,
  password,
  confirmPassword,
  isSubmitting,
  setEmail,
  setPassword,
  setConfirmPassword,
}) => {
  return (
    <div className="form-area flex flex-col top-44 relative font-bold">
      <div className="flex justify-center">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full md:w-1/2 bg-customAqua my-1 p-1 rounded-md text-black duration-1000"
        />
      </div>
      <div className="flex justify-center">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full md:w-1/2 bg-customAqua my-1 p-1 rounded-md text-black duration-1000"
        />
      </div>
      <div className="flex justify-center duration-1000">
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          className="w-full md:w-1/2 bg-customAqua my-1 p-1 rounded-md text-black duration-1000"
        />
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
  );
};

export default Form;
