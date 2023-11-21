import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) =>
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setEmailError("Field cannot be empty");
    }
    setLoading(true);
    setTimeout(() => {
      authenticateUser();
      setLoading(false);
    }, 1000);

    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
