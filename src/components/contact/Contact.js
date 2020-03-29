import React from 'react'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { subitForm } from '../../actions';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long"),
  lastName: yup
    .string()
    .required("First name is required")
    .min(2, "Last name must be at least 2 characters long"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	message: yup
		.string()
		.required("The message is required")
		.min(10, "Messages must be at least 10 characters long")
});

export const Contact = (props) => {
  const { register, handleSubmit, errors } = useForm({validationSchema: schema});
  const { formData } = useSelector(state => state)
  const dispatch = useDispatch()

  function onSubmit(data) {
    return dispatch(subitForm(data))
  }

  if (Object.keys(formData).length !== 0) {
    return (
      <Row>
        <Col>
          <h3>Your message, {formData.firstName + ' ' + formData.lastName}:</h3>
          <p><em>{formData.message}</em></p>
        </Col>
      </Row>
    )
  }
  
  console.log(formData)
  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control name="firstName" placeholder="First name" ref={register}  />
            {errors.firstName && <Alert variant={'warning'}>{errors.firstName.message}</Alert>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control name="lastName" placeholder="Last name" ref={register}  />
            {errors.lastName && <Alert variant={'warning'}>{errors.lastName.message}</Alert>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" placeholder="Enter email" ref={register} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors.email && <Alert variant={'warning'}>{errors.email.message}</Alert>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" as="textarea" rows="3" ref={register} />
            {errors.message && <Alert variant={'warning'}>{errors.message.message}</Alert>}
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  )
}
