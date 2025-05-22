import React from "react";
import { Form } from "react-bootstrap";

// styles
import styles from "./styles.module.css";

export default function CustomInputComponent({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <Form.Group className={styles.inputGroup} controlId={`form${name}`}>
      <Form.Label className={styles.inputLabel}>{label}</Form.Label>
      <Form.Control
        className={styles.inputControl}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required
      />
    </Form.Group>
  );
}
