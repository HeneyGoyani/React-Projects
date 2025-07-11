import { Card, Button, Badge } from "react-bootstrap";

const PatientCard = ({ patient, handleEdit, handleDelete }) => {
  return (
    <Card style={{ width: '22rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{patient.firstName} {patient.lastName}</Card.Title>
        <Card.Text>
          <strong>Age:</strong> {patient.age}<br />
          <strong>Gender:</strong> {patient.gender}<br />
          <strong>Nationality:</strong> {patient.Nationality}<br />
          <strong>Blood Group:</strong> {patient.bloodGroup}<br />
          <strong>Address:</strong> {patient.address}<br />
          <strong>Email:</strong> {patient.email}<br />
          <strong>Phone:</strong> {patient.phone}
        </Card.Text>
        <Badge bg="info" className="mb-2">{patient.bloodGroup}</Badge><br />
        <Button variant="secondary" size="sm" onClick={() => handleEdit(patient)}>Edit</Button>{' '}
        <Button variant="danger" size="sm" onClick={() => handleDelete(patient)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default PatientCard;



