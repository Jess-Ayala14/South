import { useState, useEffect } from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import './Contact.css'
import Logo from '../Img/real-logo.png'

const Contact = () => {

  useEffect(() => {

    //run();

  }, []);

  const [validated, setValidated] = useState(false);

  const client = new SESClient({ region: "us-east-1" });
  const input = { // SendEmailRequest
    Source: "jessaydi@gmail.com", // required
    Destination: { // Destination
      ToAddresses: [ // AddressList
        "alonsom@southwestdowel.com",
      ],
      CcAddresses: [
        "STRING_VALUE",
      ],
      BccAddresses: [
        "STRING_VALUE",
      ],
    },
    Message: { // Message
      Subject: { // Content
        Data: " New test", // required
        Charset: "STRING_VALUE",
      },
      Body: { // Body
        Text: {
          Data: "Hello there", // required
          Charset: "STRING_VALUE",
        },
        Html: {
          Data: "STRING_VALUE", // required
          Charset: "STRING_VALUE",
        },
      },
    },
    ReplyToAddresses: [
      "STRING_VALUE",
    ],
    ReturnPath: "STRING_VALUE",
    SourceArn: "STRING_VALUE",
    ReturnPathArn: "STRING_VALUE",
    Tags: [ // MessageTagList
      { // MessageTag
        Name: "STRING_VALUE", // required
        Value: "STRING_VALUE", // required
      },
    ],
    ConfigurationSetName: "STRING_VALUE",
  };

  const run = async () => {
    const command = new SendEmailCommand(input);

    try {
      const response = await client.send(command);
      // { // SendEmailResponse
      //   MessageId: "STRING_VALUE", // required
      // };
    } catch (e) {
      console.error("Failed to send email.");
      return e;
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='Contact'>
      <Container>
        <Row>
          <Col xs={1} md={1} lg={2} />
          <Col xs={10} md={5}>
            <img src={Logo} alt='Logo' />
          </Col>
          <Col xs={1} md={5} />
        </Row>
        <br />
        <Row>
          <br />
          <Col xs={1} md={2} lg={3} />
          <Col className='text-left form' xs={10} md={8} lg={6}>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={1} md={2} />
                <Col className='content-form' xs={10} md={8}>
                  <h1>Write us</h1>
                  <Form.Group className='form-group' controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='form-group' controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='form-group' controlId="validationEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="name@example.com"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='form-group' controlId='validationText'>
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <br />
                  <Button variant="info" type="submit">Send</Button>

                </Col>
                <Col xs={1} md={2} />
              </Row>
            </Form>
          </Col>
          <Col xs={1} md={2} lg={3} />
        </Row>


      </Container>
    </div>
  );
};

export default Contact;