import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SignInForm({ errors, onSubmitCallback }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmitCallback({ email, password });
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group control="email">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={errors.email}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Form.Group control="password">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={errors.password}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>

      
    </Form>
  );
}
