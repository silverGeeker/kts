import React from 'react';
import Form from 'react-bootstrap/Form';


const Course = () => ( 
    <>
    <h1 className=" text-danger "> Courses </h1>

    <br/>
 <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Select Course</Form.Label>
    <Form.Control as="select" custom>
      <option>PSC</option>
      <option>SSC</option>
      <option>BANK</option>
      <option>RAILWAY</option>
      <option>MP SI</option>
      <option>ARMY</option>
      <option>PATWARI</option>
    </Form.Control>
  </Form.Group>
</Form>
<br/>
<br/><br/><br/><br/><br/>
</>
);

export default Course;