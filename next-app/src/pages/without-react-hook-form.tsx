import { FormEvent, useState } from "react";
import Form from "../Components/Form";
import Errros from "@/Components/Errros";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmited(true);

    if (password !== confirmPassword) {
      setErrors(["Password not mached with your confirm password"]);

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setIsSubmited(false);
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setErrors([]);

    setIsSubmited(false);
  };

  return (
    <section id="form">
      <div className="container m-auto px-4">
        <form onSubmit={handleSubmitForm}>
          <Errros errors={errors} />
          <Form
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            isSubmitting={isSubmited}
          />
        </form>
      </div>
    </section>
  );
}
