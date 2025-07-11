import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PatientCard from "../Copmponents/PatientCard";
import './HospitalManagment.css';

const getStorageData = () => JSON.parse(localStorage.getItem("Patients")) || [];

const HospitalManagment = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    age: "",
    Nationality: "",
    gender: "",
    address: "",
    bloodGroup: "",
    email: "",
    phone: "",
  };

  const [form, setForm] = useState(initialState);
  const [patientData, setPatientData] = useState(getStorageData());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

      const handleSubmit = (e) => {
    e.preventDefault();

    if (form.firstName.trim() === "") {
      alert("Please enter the First Name.");
      return;
    }

    if (form.lastName.trim() === "") {
      alert("Please enter the Last Name.");
      return;
    }

    if (form.age.trim() === "") {
      alert("Please enter the Age.");
      return;
    }

    if (form.Nationality.trim() === "") {
      alert("Please select your Nationality.");
      return;
    }

    if (form.gender.trim() === "") {
      alert("Please select Gender.");
      return;
    }

    if (form.bloodGroup.trim() === "") {
      alert("Please select Blood Group.");
      return;
    }

    if (form.address.trim() === "") {
      alert("Please enter the Residential Address.");
      return;
    }

    if (form.email.trim() === "") {
      alert("Please enter the Email Address.");
      return;
    }

    if (form.phone.trim() === "") {
      alert("Please enter the Phone Number.");
      return;
    }


    setPatientData([...patientData, form]);
    setForm(initialState);
  };

  useEffect(() => {
    localStorage.setItem("Patients", JSON.stringify(patientData));
  }, [patientData]);

  return (
    <Container className="hospital-container">
      <h1 className="text-center  mb-4">Hospital Managment Form</h1>
      <Form onSubmit={handleSubmit} className="hospital-form">
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName" value={form.firstName} onChange={handleChange} />
          </Col>
          <Col md={4}>
            <Form.Label>last Name</Form.Label>
            <Form.Control name="lastName" value={form.lastName} onChange={handleChange} />
          </Col>
          <Col md={4}>
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="age" value={form.age} onChange={handleChange} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>Nationality</Form.Label>
            <Form.Select name="Nationality" value={form.Nationality} onChange={handleChange}>
              <option value="" disabled hidden>Select Your Nationality</option>
              <option>Asian</option>
              <option>Black</option>
              <option>White</option>
              <option>Other</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender" value={form.gender} onChange={handleChange}>
              <option value="" disabled hidden>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label>Blood Group</Form.Label>
            <Form.Select name="bloodGroup" value={form.bloodGroup} onChange={handleChange}>
              <option value="" disabled hidden>Select Your Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Residential Address</Form.Label>
            <Form.Control name="address" value={form.address} onChange={handleChange} />
          </Col>
          <Col md={6}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Label>Telephone</Form.Label>
            <Form.Control name="phone" value={form.phone} onChange={handleChange} />
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="dark" type="submit">Save</Button>
        </div>
      </Form>

      <Row>
        <div className="patient-cards">
  {patientData.map((p, idx) => (
    <PatientCard
      key={idx}
      patient={p}
      handleEdit={(data) => {
        setForm(data);
      }}
      handleDelete={(data) =>
        setPatientData(patientData.filter((item) => item !== data))
      }
    />
  ))}
  </div>
</Row>
    </Container>
  );
};

export default HospitalManagment;
