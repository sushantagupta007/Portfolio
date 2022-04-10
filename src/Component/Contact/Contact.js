import {
  faEnvelope,
  faMapMarker,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container fluid className="bg-dark" id="contact">
      <Container>
        <h1 className="text-center text-white">
          {" "}
          Contact <span className="text-warning fw-bold">
            {" "}
            Information{" "}
          </span>{" "}
        </h1>
        <Row>
          <Col lg={6} xs={12} className="p-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column w-75 "
            >
              <label className="text-white"> NAME </label>
              <input
                type="text"
                className="my-2 border-primary bg-transparent p-2 text-white"
                {...register("Name", { required: true, maxLength: 20 })}
              />
              <label className="text-white"> EMAIL </label>
              <input
                type="email"
                className="my-2 border-primary bg-transparent p-2 text-white"
                {...register("email", { required: true })}
              />
              <label className="text-white"> MESSAGE </label>
              <textarea
                className="my-2 border-primary bg-transparent p-2 text-white"
                {...register("Message", { required: true })}
              >
                {" "}
              </textarea>

              <input type="submit" className="btn btn-warning" />
            </form>
          </Col>
          <Col lg={6} xs={12} className="text-white">
            <h3 className="text-white"> MY ADDRESS </h3>

            <div className="mb-2"> Find Me In The Following Addess </div>
            <Row className="m-0 my-3">
              <Col xs={1} className="border p-1 text-center">
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faPhoneAlt}
                ></FontAwesomeIcon>
              </Col>
              <Col xs={6} className="p-1 ms-1">
                +880-1737558258
              </Col>
            </Row>
            <Row className="m-0  my-3">
              <Col xs={1} className="border p-1 text-center">
                <FontAwesomeIcon
                  className="text-warning text-center"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </Col>
              <Col xs={6} className="p-1 ms-1">
                sushanta.gupta007@gmail.com
              </Col>
            </Row>
            <Row className="m-0  my-3">
              <Col xs={1} className="border p-1 text-center">
                <FontAwesomeIcon
                  className="text-warning text-center"
                  icon={faMapMarker}
                ></FontAwesomeIcon>
              </Col>
              <Col xs={8} className="p-1 ms-1">
                Dhaka, Bangladesh{" "}
              </Col>
            </Row>
            <div className="border-top my-2">
              <div className="d-flex justify-content-between w-50 mt-2">
                <div className="border p-2">
                  {" "}
                  <i className=" fab fa-facebook-f"></i>
                </div>
                <div className="border p-2">
                  {" "}
                  <i className="fab fa-github"></i>
                </div>
                <div className="border p-2">
                  {" "}
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
