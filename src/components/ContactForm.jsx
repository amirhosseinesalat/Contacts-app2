import { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import styles from "./ContactForm.module.css";
import FormInput from "../inputs/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../validation/contactSchema";

function ContactForm() {
  const {
    addContactHandler,
    updateHandler,
    editingContact,
    setEditingContact,
    setShowForm,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  useEffect(() => {
    if (editingContact) {
      reset(editingContact);
    }
  }, [editingContact, reset]);

  const submitHandler = (data) => {
    if (editingContact) {
      updateHandler({ ...editingContact, ...data });
    } else {
      addContactHandler({ ...data, id: crypto.randomUUID() });
    }

    reset();
    setEditingContact(null);
    setShowForm(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          
          <FormInput
            placeholder="Name"
            error={errors.name?.message}
            {...register("name")}
          />

          <FormInput
            placeholder="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />

          <FormInput
            placeholder="Email"
            error={errors.email?.message}
            {...register("email")}
          />

          <FormInput
            placeholder="Phone"
            error={errors.phone?.message}
            {...register("phone")}
          />

          <div className={styles.btnRow}>
            <button type="submit" className={styles.buttonPrimary}>
              {editingContact ? "Update" : "Add Contact"}
            </button>

            <button
              type="button"
              className={styles.buttonSecondary}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
