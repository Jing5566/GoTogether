/* background color for all pages*/
.body{
  background-color: #FBFBFF;
  display:flex;
  flex-direction: column;
  min-height: 100vh;
}

/* navbar styling starts here */
.nav{
  position: relative;
  display:flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px 20px;
  border-bottom: 1px solid #989AB8;
}

.GTlogo {
  position: absolute;
  /* display: flex; */
  margin-left: 50px;
  width: 180px;;
  height:auto;
  margin-bottom: 30px;
  /* align-items: center; */
}

.searchbar {
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 275px;
  margin-top: 5px;
}

.searchbar1{
  width: 135px;
  height: 27px;
  border: 1px solid #989AB8;
  border-radius: 7px 0px 0px 7px;
  font-family: 'Inter';
  font-size: 14px;
  color: #0F231C;
}

.searchbar2{
  width: 135px;
  height: 27px;
  border: 1px solid #989AB8;
  border-radius: 0px;
  font-family: 'Inter';
  font-size: 14px;
  color: #0F231C;
}

.searchbar1::placeholder{
  color:#989AB8;
  font-family: 'Inter';
  font-size: 14px;
}

.searchbar2::placeholder{
  color:#989AB8;
  font-family: 'Inter';
  font-size: 14px;
}

.searchButton {
  background-color: #A5A5F5;
  width: 27px;
  height: 27px;
  border: 1px solid #989AB8;
  border-radius: 0px 7px 7px 0px;;
  cursor: pointer;
}

.navButton{
  margin-left: 55%;
  cursor: pointer;
}

.navButtonStyle{
  display:block;
  margin: 0 auto;
  width: 45px;
  height: 20px;
  background-color: #FFE459;
  border: none;
  border-radius: 7px;
  padding: 0px 15px 0px 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
}

.plus{
  position:absolute;
  margin-top: -22px;
  margin-left: 43px;
}
.navMyEvents{
  margin-left: -10%;
  cursor: pointer;
}

.navMessages{
  margin-left: -10%;
  cursor: pointer;
}

.navText{
  font-family: 'Inter';
  font-size: 13px;
  color: #0F231C;
  text-align: center;
}

.navBtnText{
  font-family: 'Inter';
  font-size: 13px;
  color: #0F231C;
  text-align: center;
  margin-top: 4px;
}
/* Style the profile icon */
/* .defaultProfile{
  /* position: absolute; */
  /* position: relative;
  display: inline-block;
  background-color: #A5A5F5;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  border: 2px solid #989AB8;
  margin-right: 30px;
  cursor: pointer;
} */

.dropimg {
  height: 38px;
  width: 38px;
}

.dropdown {
  position: relative;
  display: inline-block;
  height: 34px;
  width: 34px;
  margin-right: 30px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #F7F6FC;
  min-width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 7%;
  z-index: 1;
}

.dropdown-content a {
  color:#0F231C;
  font-size: 16px;
  padding: 5px 5px;
  text-decoration: none;
  display: block;
  border-radius: 7%;
}

.dropdown-content a:hover {background-color: #D4C9F1;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #A5A5F5;}
/* navbar styling ends here */

/* landingPage styles starts here*/
.small_box_container{
  position: relative;
  width: 557px;
  height: fit-content;
  margin-top: 240px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #989AB8;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color:rgba(247, 246, 252, 0.8);
}

.landingPage_subtext{
  font-family: "Inter";
  font-size: 20px;
  color: #0f231c;
  margin-top: 25px;
  margin-bottom: 30px;
  text-align: center;
}

.landingPage_labels label {
  display: inline-block;
  width: 110px;
}
/* landingPage styles ends here*/



/* movieInfoPage styling starts here */
/* styling for the big purple box*/
.box_container {
    position: relative;
    width: 557px;
    height: fit-content;
    top: 60px;
    margin: 0 auto;
    border: 1px solid #989AB8;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #F7F6FC;
    opacity: 0.8;
}

/* styling for headers*/
.title {
  font-family: 'Inter';
  font-size: 32px;
  color: #0F231C;
  margin-top:25px;
  margin-bottom:30px;
  text-align: center;
}

/* styling for pictures,
COPY and MAKE a class for your img item
and adjust size accordingly*/
.movie_image{
  display: block;
  width: 180px;
  height: auto;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
}

/* styling for text blocks */
.text_container{
  margin-top:25px;
  font-family: 'Inter';
  font-size: 16px;
  color: #0F231C;
  text-align: center;
}

/* styling for buttons */
/* .button_container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  } */

.btn1-style {
  background-color: #A5A5FF;
  height: 32.5px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  padding: 0px 15px 0px 15px;
  box-shadow: 0px 8px 6px 0px rgba(0,0,0,0.3);
}

.button1 {
  position:absolute;
  /* display: flex; */
  margin-top: 36px;
  left: 95px;
  display: inline-block;
  font-family: "Inter";
  font-size: 18px;
  color: #0f231c;
}

.btn2-style {
  background-color: #FFE459;
  height: 32.5px;
  border: none;
  border-radius: 7px;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  box-shadow: 0px 8px 6px 0px rgba(0, 0, 0, 0.3);
}

.button2 {
  position: absolute;
  margin-top: 36px;
  right: 95px;
  display: inline-block;
  font-family: "Inter";
  font-size: 18px;
  color: #0f231c;
}

.small_text{
  font-family: 'Inter';
  font-size: 12px;
  color: #0F231C;
  margin-top: 3px;
  text-align: center;
}
/* movieInfoPage styling ends here */

/* signup page styling starts here */
label{
  /* position: absolute; */
  margin-left: 76px;
  margin-bottom: 20px;
  text-align: left;
  font-family: "Inter";
  font-size: 16px;
  color: #0f231c;
}

input{
  border-radius: 7px;
  height: 25px;
  width: 220px;
  border-width: 1px;
  border-color: #0f231c;
}

.leftBtn{
  position:absolute;
  margin-top: 3%;
  left: 95px;
  font-size: 18px;
}

.rightBtn{
  position:absolute;
  font-size: 18px;
  margin-top: 3%;
  right: 95px;
}

.signupPage_labels label {
  display: inline-block;
  width: 110px;
}
/* movieInfoPage styling starts here */

/* Paragraph font for the landing page text under the header */
.overview {
  font-family: "Inter";
  font-size: 24px;
  color: #0f231c;
  margin-top: 25px;
  margin-bottom: 30px;
  text-align: center;
}

/* -------------------------------------------------------------------- */
/* this code is for the Home Page */

.container-fluid {
  position: relative;
  width: 95%;
  height: fit-content;
  top: 60px;
  margin: 0 auto;
  border: 1px solid #989AB8;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #F7F6FC;
  overflow: auto;
}

/* this code is for the calendar that will function in the Home Page */
#calendar {
  float:left;
  position: Top;
  width: 500px;
  height: fit-content;
  margin-top: 20px;
  /* top: 200px;
  bottom: 60px;
  margin-bottom: 20px auto; */
  /* border-right: 3px solid #b8aa98; */
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  /* background-color: rgb(239, 188, 133); */
  background-color: #D4C9F1;
}

/* this code for the invitation on the home page */
.groot {
  width: 300px;
  float: left;
  margin-top: 20px;
  border: 1px solid #989AB8;
  box-sizing: border-box;
  border-radius: 15px;
}

#groot_header {
  margin-top: 20px;
}

#groot_ul {
  margin-top: 20px;
  float: right;

}

.event-title {
  text-align: left;
  color: #0F231C;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 12px;

}

.event-info {
  margin-top: 80px;
  padding: 20px;
  border: 1px solid #989AB8;
  box-sizing: border-box;
  border-radius: 15px;
}




/* ---------------------------------------------------------- */
/* This is the start of Tom's CSS Styling */

/* This is the start of the styling for the ViewProfilePage Route */

.box_containerView { /* This is for the view page */
  position: relative;
  width: 557px;
  height: fit-content;
  top: 60px;
  margin: 0 auto;
  border: 1px solid #989AB8;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #F7F6FC;
  overflow: auto;
}

.box_containerView img { /* This is for the view page */
  width: 20%;
  margin: auto;
  display: block;
}

.ProfileView{ /* This is for the view page */
  list-style-type: none;
}

.ProfileView li {
  margin: 5px;
}


/* This is the end of the viewProfilePage Route's Styling
/* ---------------------------------------------------------- */
/* This is the start of the createProfilePage Styling */

.box_containerCreate { /* This for the create page */
  position: relative;
  width: 557px;
  height: fit-content;
  top: 60px;
  margin: 0 auto;
  border: 1px solid #989AB8;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #F7F6FC;
  overflow: auto;
}

.box_containerCreate label {
  display: inline-block;
  width: 110px;
}

.CreateTopper {
  text-align: center;
}

.CreateView{ /* This for the create page */
  list-style-type: none;
}

.box_containerCreate .ImageHere {
  justify-content: center;
}

.ImageHere{
  display: block;
  width: 110px;
  height: auto;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
/* This is the end of the createProfilePage Styling */
/* ----------------------------------------------------------*/
/* This is the start of editProfilePage Styling */
.box_containerEdit { /* This for the create page */
  position: relative;
  width: 557px;
  height: fit-content;
  top: 60px;
  margin: 0 auto;
  border: 1px solid #989AB8;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #F7F6FC;
  overflow: auto;
}
/* This is the end of Tom's CSS styling */

/* deleteProfilePage styling starts here */
.boxMessage {
  position: relative;
  font-family: inter;
  font-size: 24px;
  color:#0f231c;
  margin-top: 15%;
  margin-bottom: 15%;
  text-align: center;
}
/* deleteProfilePage styling ends here */


/* footer positioning */
footer {
  margin-top: auto;
  background-color: #D4C9F1;
  opacity: 50%;
  font-family: inter;
  color:#0F231C;
  font-size: 18px;
  padding: 12px;
  text-align: center;
  display:block;

  /* position: absolute; */
  /* right: 0;
  left: 0;
  bottom: 0; */
}
