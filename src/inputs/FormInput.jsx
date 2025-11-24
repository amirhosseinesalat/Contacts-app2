import styles from "../components/ContactForm.module.css";

function FormInput({ error, ...rest }) {
  return (
    <>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        {...rest}
      />

      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}

export default FormInput;
