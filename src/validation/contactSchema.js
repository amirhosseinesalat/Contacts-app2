import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().trim().required("Name is required"),

  lastName: yup.string().trim().required("Last name is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^\d+$/, "Phone must contain only digits")
    .min(8, "Phone must be at least 8 digits")
    .max(15, "Phone must be at most 15 digits"),
});
export default contactSchema;
