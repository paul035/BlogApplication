import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "../components/Base";
const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState({
        error: {},
        isError: false,
    })
    
    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    
    //handle change function
    const handleChange = (event, property) => {
        /*console.log("Name field changed..");
        console.log(event.target.value);*/
        setData({...data, [property]: event.target.value});
    }

    //Two way binding is getting used in resetData function
    const resetData = () => {
        setData({
            name: "",
            email: "",
            password: "",
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log(data);
    }
    
    return (
        <div>
        <Base>
                    {/*Container will create a container with padding and margin from left and right */}
                    <Container>
                        {JSON.stringify(data)}
                        {/**mt-4 : margin-top = 4 */}
                        <Row className="mt-4">
                            {/**sm : small screen and by default row uses 12 col, size 6 : col use only 6
                             * offest 3 : 3 from left and 3 from right side <=> 12 = 6 + 3 + 3 */}
                            <Col sm = {{size : 6, offset : 3}}>
                                {/** Card can have multiple components */}
                                <Card>
                                    <CardHeader>
                                        <h5>Signup Form</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Form onSubmit={submitForm}>
                                            <FormGroup>
                                                <Label for = "name">Name</Label>
                                                <Input type = "text" placeholder="Enter your name" id="name"
                                                    onChange={(event) => handleChange(event, "name")} value = {data.name} /> {/** value = data.name : two way binding */}
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for = "email">Email</Label>
                                                <Input type = "email" placeholder="Enter your email" id="email"
                                                    onChange={(event) => handleChange(event, "email")} value  = {data.email}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for = "password">Password</Label>
                                                <Input type = "password" placeholder="Enter your password" id="password"
                                                    onChange={(event) => handleChange(event, "password")} value = {data.password} />
                                            </FormGroup>
                                            <Container className="text-center">
                                                <Button color="info">Register</Button>
                                                {/** type = reset means it will reset the form fields
                                                 * ms-2 : margin from start 2px
                                                 */}
                                                <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
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

export default Signup;