import styles from "../components/ContactForm.module.css";

function FormInput({ name, value, onChange, placeholder, error }) {
  return (
    <>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}

export default FormInput;
