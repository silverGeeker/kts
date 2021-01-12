import React from "react";
import FormControl from '@material-ui/core/FormControl';
import { BottomNavigationAction, FormHelperText, Input, InputLabel, TextField } from "@material-ui/core";
import "./Contact.css";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DialerSipIcon from '@material-ui/icons/DialerSip';

import LocationOnIcon from '@material-ui/icons/LocationOn';



const Contact = () => (
  <>

<div class="bgimg">
        <div className="container text-white hearderset">
          <span className="hd"><p>&mdash;&mdash;Contact Us&mdash;&mdash;</p></span><br />
        </div>
  </div>



  <br />
  <br />
  <br />
   <div className="row">
    <div className="form1">
  <div className="info"> <p>To be in the competitive instructional world, <br/>the student must want to prove their skills and knowledge, <br />and for this,
    an institute like KT Solutions will play the leading role.</p> </div>

    <div>
    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    LIG Square Indore <br />
    <BottomNavigationAction label="Mail" value="mail" icon={<MailIcon />} />
    info.ktsolutions@gmail.com <br />
    <BottomNavigationAction label="Folder" value="folder" icon={<DialerSipIcon />} />
    8830703529 / 9644460006


    </div>

</div>

  <div className="form2">
   <FormControl>
     <InputLabel htmlFor="my-input">Full Name</InputLabel>
     <Input className="inputName" id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <br/><br/>

    <FormControl>
     <InputLabel htmlFor="my-input">Email address</InputLabel>
     <Input className="inputEmail" id="my-input" aria-describedby="my-helper-text" fullWidth/>
     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
    <br/><br/>


    <TextField
          id="standard-full-width"
          label="Message"
          fullWidth
          margin="normal"
          rowsMin={3}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <br /><br />


<Button
        variant="contained"
        color="secondary"
        size="large"
        className="button"
        startIcon={<SendIcon />}
      >
        Submit
      </Button>
    <br/>
    <br/>
    <br/>

</div>
</div>



  </>
);

export default Contact;