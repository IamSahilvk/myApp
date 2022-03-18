import React from 'react';
import About from './About.js';
import Different from './different.js';
import Third from './Third_section.js';
import Track from './TrackMood_and_Period.js';
import './App.css';

function App() {
  return (
    <div>
      
     <About/>
     <Different/>
     <Third/>
     <Track/>
     <section class="sixth">
            <br />

            <h1>Consult with wellness experts</h1>

            <p>
                Set up health consultations with experienced doctors and therapists on
                our app. Simply select a service, answer a few questions, and we'll
                connect you to someone who is the right-fit for you.
            </p>
            <div class="Bbutton">
                <p class="bbutton">Get a consultation</p>
            </div>
        </section><img
                src={require("./image/usman-yousaf-MP9W9DtdoBI-unsplash 2.jpg")}
                alt="Doctor"
                class="doctor" /><section class="seventh">
                <h1>Get your personalized period box</h1>
                <img src={require("./image/medicine.png")} alt="medicine" class="medicine" />
                <p id="seven">
                    Tailor your monthly box of organic period products without the organic
                    price tag (no pink taxing here). Get it delivered to your doorstep in
                    sustainable packaging and track your subscription on our app.
                </p>
                <div class="Bblackbutton">
                    <p class="blackbutton">Create your box on the app     &gt;</p>
                </div>
                <br />
                    <br />
                        <br />
                        </section>

                        <section class="eighth">
                            <h1>
                                With Diana, you're in control of your health, your every day, and your
                                story.
                            </h1>
                        </section>
            
                        <footer class="foot">
     <span class="SM"> <a href=""><img src={require("./image/fb.png")} alt="facebook" width={25}  /></a>
      <a href=""><img src={require("./image/twitter.png")} alt="twitter" width={25} /></a>
    </span>
      <p>Products &gt;</p>

      <p>Our Science &gt;</p>
      <p>Vision & Mission &gt;</p>
      <p>About Us &gt;</p>
      <hr />
      <form action="">
        <p>Subscribe to our Newsletter</p>
        <span>
        <input type="email" value="Enter your email..." name="" id="" />
        <div class="activate">
        <a href=""><img src={require("./image/outline_email_black_24dp.png")} alt="DM" /> Activate</a>      
        </div>
      </span>
    
      </form>
    </footer>

     
     

    </div>
  );
}

export default App;
