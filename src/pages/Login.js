import { useState } from "react";
import styled from "styled-components";

import { login } from "../redux/apiCalls";
import { largeMobile, mobile, tabletPlus } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 95vh;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background: white;
  width: 25%;
  padding: 20px;
  ${tabletPlus({ width: "50%" })}
  ${largeMobile({ width: "60%" })}
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  margin: 10px 0px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
  font-size: 16px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFecthing, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Error>Invalid email/password</Error>}
            <Link
              to=""
              style={{
                margin: "5px 0px",
                fontSize: "12px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "black",
              }}
            >
              DON'T REMEMBER THE PASSWORD?
            </Link>
            <Link
              to="/register"
              style={{
                margin: "5px 0px",
                fontSize: "12px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "black",
              }}
            >
              CREATE A NEW ACCOUNT
            </Link>
            <Button onClick={handleClick} disabled={isFecthing}>
              Login
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
