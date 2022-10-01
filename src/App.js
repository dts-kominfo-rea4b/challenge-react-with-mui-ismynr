// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import { Grid, Card, CardContent, List } from "@mui/material";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, newContact] = useState(contactsJSON);

  const clickHandler = (contact) => {
    newContact([...contacts, {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      photo: contact.photo,
    }]);
  };

  return (
    <div className="App">
      <Header/>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={6}>
          <ContactForm 
            clickSubmit={clickHandler}/>
        </Grid>

        <Grid item xs={6}>
          <Card style={{margin: '50px'}} sx={{ minWidth: 275 }}>
              <CardContent>
                <List sx={{ width: '100%', maxWidth: '90%', bgcolor: 'background.paper' }}>
                  {contacts.map((contact, index) => {
                    return (
                      <Contact key={index} data={contact} />
                    )
                  })}
                </List>
              </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default App;
