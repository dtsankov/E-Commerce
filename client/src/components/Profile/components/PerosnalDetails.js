import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const PersonalDetails = ()=>{

    const {userEmail} = useContext(AuthContext)

        
          return (
    <section className="section-wrapper">
        <div className="field-wrapper">
            <h2>Personal Information</h2>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  value={userEmail}
                  disabled
                />
              </InputGroup>
            </Form>  
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                <Form.Control
                  placeholder="Example: m17ak0s"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>  
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                <Form.Control
                    placeholder="Example: Manhatan Avenue 123"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>  
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                <Form.Control
                   placeholder="Example: New York"
                   aria-label="Username"
                   aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>  
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Postal Code</InputGroup.Text>
                <Form.Control
                   placeholder="Example: 1251"
                   aria-label="PostalCode"
                   aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
                <Form.Control
                  placeholder="Example: Bulgaria"
                  aria-label="Country"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>  
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Telephone</InputGroup.Text>
                <Form.Control
                  placeholder="Example: +359 899 999 999"
                  aria-label="phone"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>  
        </div>
    </section>
          );
        }
        

 