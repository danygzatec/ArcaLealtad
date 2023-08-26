import React, {  useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [loading] = useState(false);
  const navigate = useNavigate();

  const {createUser} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try{
        await createUser(email, password);
        navigate('/inicio')
    }catch(e){
        setError(e.message)
        console.log('error', e.message)
    }
  }
  

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center "
      >
        <div className="w-100" style={{ maxWidth: "500px", borderRadius: 10 }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4"> Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                  />
                </Form.Group>
                <Form.Group id="password" style={{marginBottom: 10}}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100 signup"
                  type="submit"
                  style={{backgroundColor: '#701e19'}}
                >
                  <Link
                    to="/inicio"
                    style={{ color: "white", textDecoration: "none", marginTop: 10 }}
                  >
                    Sign Up
                  </Link>
                </Button>
              </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
            Already have an account??{" "}
            <Link to="/" style={{ color: "black" }}>
              Sign In
            </Link>
          </div>
          </Card>
          
        </div>
      </Container>
    </>
  );
}