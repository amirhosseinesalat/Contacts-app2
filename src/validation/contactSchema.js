import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
yup.object({
  name: "Name is required",
  lastName: "Last name is required",
  email: "Invalid email format",
  phone: "Phone must be between 8 and 15 characters",
});
