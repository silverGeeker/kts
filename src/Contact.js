import React from "react";
import "./Contact.css";
/*
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DialerSipIcon from '@material-ui/icons/DialerSip';
import FormControl from '@material-ui/core/FormControl';
import { BottomNavigationAction, FormHelperText, Input, InputLabel, TextField } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
*/
import 'bootstrap/dist/css/bootstrap.min.css';



const Contact = () => (
  <>

<div class="bgimg">
        <div className="container text-white hearderset">
          <span className="hd"><p>&mdash;&mdash;Contact Us&mdash;&mdash;</p></span><br />
        </div>
  </div>

<div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
				  <label class="control-label col-sm-2" for="fname">Full Name:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="subject">Subject:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="sublect" placeholder="Subject" name="subject"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="email">Email:</label>
				  <div class="col-sm-10">
					<input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="comment">Comment:</label>
				  <div class="col-sm-10">
					<textarea class="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>

{/*

  <br />
  <br />
  <br />
   <div className="row">
    <div className="form1">
  <div className="info"> <p>To be in the competitive instructional world, <br/>the student must want to prove their skills and knowledge, <br />and for this,
    an institute like KT Solutions will play the leading role.</p> </div>

    <div>
    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    125, Bhanwarkua Main Road, Near Gurjar Hospital Indore (M.P.) <br />
    <BottomNavigationAction label="Mail" value="mail" icon={<MailIcon />} />
    info.ktsolutions@gmail.com <br />
    <BottomNavigationAction label="Folder" value="folder" icon={<DialerSipIcon />} />
    7879324781 / 9644460006


    </div>

</div>

  <div className="form2">
  <form>
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
        type="submit"
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
</form>
</div>
</div>

*/}

  </>
);

export default Contact;