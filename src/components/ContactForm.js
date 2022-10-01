// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { TextField, Card, CardContent, Button } from "@mui/material";

const ContactForm = ({ clickSubmit }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const emptyValue = {
    name: "",
    phone: "",
    email: "",
    photo: "",
  };
  const [contacts, newContact] = useState(emptyValue);
  const { name, phone, email, photo } = contacts;
  const handleChange = (event) => {
    const { name, value } = event.target;
    newContact({
      ...contacts,
      [name]: value,
    });
  };

  return (
      <div className="contact-form">
        <Card style={{margin: '50px'}} sx={{ minWidth: 275 }}>
          <CardContent>
            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" style={{marginBottom: '20px'}} 
              name="name"
              value={name}
              onChange={handleChange} />

            <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" style={{marginBottom: '20px'}}
              name="phone"
              value={phone}
              onChange={handleChange} />

            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" style={{marginBottom: '20px'}}
              name="email"
              value={email}
              onChange={handleChange} />

            <TextField fullWidth id="outlined-basic" label="Photo URL" variant="outlined" style={{marginBottom: '20px'}}
              name="photo"
              value={photo}
              onChange={handleChange} />

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                clickSubmit(contacts);
                newContact(emptyValue);
              }}>
                Submit
            </Button>
          </CardContent>
        </Card>
      </div>
  );
}

export default ContactForm;