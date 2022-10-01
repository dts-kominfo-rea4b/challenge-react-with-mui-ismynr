// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Typography, Divider, Avatar } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const { name, phone, email, photo } = data;

  return (
    <div className="contact">
      <ListItem alignItems="flex-start">
        
        <ListItemAvatar>
          <Avatar alt={name} src={photo} />
        </ListItemAvatar>

        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary">
                {phone}
              </Typography>
              <br/>
              {email}
            </React.Fragment>
          }/>
      </ListItem>

      <Divider variant="inset" component="li" />
    </div>
  );
};

export default Contact;
