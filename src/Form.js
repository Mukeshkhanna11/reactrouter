import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("full name is requied"),
    email: yup.string().email().required("correct format is required"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("age should be above 18"),
    password: yup.string().min(4).max(20).required("password should be strong"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), []])
      .required("enter the correct password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="full name...."
            {...register("fullName")}
          />
          <p>{errors.fullName?.message}</p>
        </div>
        <div>
          <input type="text" placeholder="email..." {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="number" placeholder="age..." {...register("age")} />
          <p>{errors.age?.message}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="password..."
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            type="password"
            placeholder="confirm password..."
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
