import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
const Login = () => {
    return (
        <div>
            <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm = {{size : 6, offset : 3}}>
                        <Card>
                        <CardHeader>
                            <h5>Login Form</h5>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for = "email">Email</Label>
                                    <Input type = "email" placeholder="Enter your email" id="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for = "password">Password</Label>
                                    <Input type = "password" placeholder="Enter your password" id="password" />
                                </FormGroup>
                                <Container className="text-center">
                                    <Button color="info">Login</Button>
                                    <Button type="reset" color="secondary" className="ms-2">Reset</Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </Base>
        </div>
    );
}

export default Login;