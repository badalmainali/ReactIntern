import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function LoginPage() {

    const[email,setemail]=useState('');
    return (
        <Container>
            <Row>
                <Col className="align-self-center col-reg" md={{ span: 5, offset: 3 }}>
                    <Form className="m-3 reg">
                        <h2 className="mt-1 reg-head">LOGIN</h2>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Email</Form.Label>
                            <Form.Control required className="inpt-field" type="email" placeholder="badalma12@gmail.com" value={email} onChange={(e)=>(setemail(e.target.value))} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Password</Form.Label>
                            <Form.Control required className="inpt-field" type="password" placeholder="Your Password" />
                        </Form.Group>
                        <p>Forgot Password?</p>
                        <div className="d-grid gap-2">
                            <Button variant="success" type="submit" className="ml-5">
                                Login
                            </Button>
                            <p className="mt-1">Already have an account?</p>
                            <Button href="/register" variant="outline-success" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}
export default LoginPage;