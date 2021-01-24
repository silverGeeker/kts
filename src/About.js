import React from "react";
import "./About.css";
 
import yb1 from "./resources/yb1.jpg";
import kt1 from "./resources/kt1.png";
import ut1 from "./resources/ut1.jpg";
import rr2 from "./resources/rr2.jpg";
import rr1 from "./resources/rr1.png";
import ds1 from "./resources/ds1.jpg";

/*
import MediaCardRahul from "./MediaCardRahul.js";
import MediaCardUpendra from "./MediaCardUpendra";
import MediaCardDurgesh from "./MediaCardDurgesh";
import MediaCardRohit from "./MediaCardRohit";
*/ 



const About = () => (
  <>
    <div class="bgimg1">
        <div className="container text-white hearderset">
          <span className="hd"><p>&mdash;&mdash;About Us&mdash;&mdash;</p></span><br />
          <span className="hd2"><p><br/><br/>"A Dream Institute For <br /> Competitive Exams!"</p></span>
        </div>
  </div>
  <section class="our-webcoderskull padding-lg">
  <div class="container">
    <div class="row heading heading-icon">
        <h2>Our Team</h2>
    </div>
    <ul class="row">
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style={{height: "349px"}}>
            <figure><img src={ds1} className="img-responsive" alt=""/></figure>
            <h3><a href="http://www.gravityindore.com/about">Durgesh Shukla</a></h3>
            <p>B.Tech (DCE Delhi)<br/>
          Experience: 7 Years</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style={{height: "349px"}}>
            <figure><img src={rr1} className="img-responsive" alt=""/></figure>
            <h3><a href="http://www.gravityindore.com/about">Rahul Rajan</a></h3>
            <p> MBA <br />
          Experience: 9 Years</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style={{height: "349px"}}>
            <figure><img src={rr2} className="img-responsive" alt=""/></figure>
            <h3><a href="http://www.gravityindore.com/about">Rohit Rajan</a></h3>
            <p>BE <br />
          Experience: 7 Years</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
       </li>
      <li class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight" style={{height: "349px"}}>
            <figure><img src={ut1} className="img-responsive" alt=""/></figure>
            <h3><a href="http://www.gravityindore.com/about">Upendra Tagare </a></h3>
            <p>M.Tech (IIT Roorkee) <br />
          Experience: 5 Years</p>
            <ul class="follow-us clearfix">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
      </li>
    </ul>
  </div>
</section>


  {/*
  <br />
  <div className="row">
   <div className="column1">
  <p>To be in the competitive instructional world, the student must want to prove their skills and knowledge, and for this,
   an institute like KT Solutions will play the leading role. This is the number one online institute for achieving all your goals 
   and crack competitive exams through Digital Learning. We're dedicated to providing you with the very best online classes for Competitive Exams, 
   with an emphasis on Logical learning/Concepts, Doubt solving tactics, Interactive Classes with our expert trainers.<br /> <br />
   Based in Indore, KT Solutions is the dream project of Mr. Yogesh Borde founded back in 2015. He started KT Solutions after 
   successfully completing government-funded Skill Development programs for rural and backward candidates. Mr. Borde began to this dream 
   institute for the betterment and development of students in such a way that they will become confident about their capabilities.
  </p>

  </div>
  <div className="column2">
  <img
        alt=""
        height ="266"
        width ="210"
        src={yb1}
      />
      <br />
    <span className ="photoname"><h5> <p>Yogesh Borde <br /> Founder & Director</p></h5> </span>
  </div>
  </div>

  <div className = "row">

  <div className="column4">
  <img
        alt=""
        height ="250"
        width ="220"
        src={kt1}
      />
      <br />
    <span className ="photoname1"><h5> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kritika Tagare <br /> Co-Founder & Director</p></h5> </span>
  </div>

    <div className ="column3">
    <p>
    Ms. Kritika Tagare is the Co-Founder of KT Solutions, a number one online institute for achieving all your goals and crack competitive exams 
    through Digital Learning. Born & brought up in Ujjain, Madhya Pradesh, she pursued her master degree from a reputed institute. She shaped her 
    career through an MBA in Business Economics & after implementing her expertise for 6 years in various organizations, she became acutely aware 
    of the high standards & needs of modern education. <br /> <br />
    She strongly believes & stays focused on her goal and know when to pivot. Ms. Tagare recognizes what the education market is asking for and 
    what the education market needs. She, with her learning in Business Economics, has a vision down the line. Understanding that an idea may need 
    to change and being open to those changes may mean the difference between success and failure.
    </p>
    </div>

    
  </div>

  <div className="hd2 hd3"> <p> Meet the Teachers </p> </div>

<div className="card-deck" >
  <div className="cardCol"> <MediaCardRahul /> </div>
  <div className="cardCol"> <MediaCardUpendra /> </div>
  <div className="cardCol"> <MediaCardDurgesh /> </div>
  <div className="cardCol"> <MediaCardRohit /> </div>
  </div>
  <br />
  <br />
*/}
  </>
);

export default About;