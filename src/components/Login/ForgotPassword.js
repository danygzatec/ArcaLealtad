import React, { useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleButton } from "react-google-button";

import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const [setEmail] = useState("");
  const [password] = useState("");
  const [error, setError] = useState("");
  const [ setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const { googleSignIn, resetPassword } = UserAuth();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
        setMessage("");
        setError("");
        setLoading(true);
        await resetPassword(password);
        setMessage("Check your inbix for further instructions")
    }catch(e){
        setError(e.message);
        console.log(e.message);
    }
    setLoading(false)
  }

  const hangleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center ">
        <div className="w-100" style={{ maxWidth: "500px", borderRadius: 10 }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required
                    className="input"
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100 signup"
                  type="submit"
                  style={{ backgroundColor: "#701e19" }}
                >
                  <Link
                    to="/home"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginTop: 10,
                    }}
                  >
                    Reset Password
                  </Link>
                </Button>
              </Form>
              <div style={{ marginTop: 10 }}>
                <GoogleButton
                  onClick={hangleGoogleSignIn}
                  style={{ marginLeft: "22%" }}
                />
              </div>
              <div className="w-100 text-center mt-3">
                <Link to="/" style={{ color: "black" }}>
                  Login
                </Link>
              </div>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Need an account?{" "}
              <Link to="/signup" style={{ color: "black" }}>
                Sign Up
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}
