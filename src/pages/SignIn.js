import React, {useEffect, useState} from 'react';
import {Container,Row, Col, Card,} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SignInForm from '../components/froms/SigninForm';
import {useDispatch} from 'react-redux';
import validator from 'validator';
import { isObjEmpty } from '../helpers/helpers';


export default function SignIn() {

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    //
  });

  const login = ({email, password}) => {
    const errors = {};
    setErrors(errors);

    if(!validator.isEmail(email)){
      errors.email = 'El correo electronico no es valido';
    }

    if (validator.isEmpty(password)){
      errors.password = 'El password no puede estar vacio';
    }

    if (!isObjEmpty(errors)){
      setErrors(errors);
      return;
    }
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md={{span: 8, offset:2}} lg= {{span:6, offset:3}}>
          <Card body>
              <h3>Iniciar Sesión</h3>
              <br/>
              <SignInForm errors={errors} onSubmitCallback={login}></SignInForm>
              <div className="mt-4">
                <Link to={"/sigup"}> Notienes una cuenta? Registrate aquí.</Link>
              </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}