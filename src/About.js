import React from 'react';

export default function About()

{
    return(
        <>
        <nav>
        <a href=""
          ><img src={require("./image/outline_notifications_black_24dp.png")} alt="notification" /></a>
        <a href=""
          ><img
            src={require("./image/outline_shopping_cart_black_24dp.png")}
            width="24px"
            height="24px"
            alt="Cart"
        /></a>
  
        <a id="icon" href=""
          ><img src={require("./image/outline_menu_black_24dp.png")} alt="icon" width="50%"
        /></a>
      </nav>
      
      
      <main>
        <section class="First">
          <h1 id="Diana">About Diana</h1>
          <h3>A platform that looks out for you</h3>
          <p class="Di">
            Diana empowers you to understand how your body works so you can look and
            feel your best.
          </p>
          <hr></hr>
          <br></br>

            <b> Our Philosophy</b>
          
          <h1>Sustainable wellness is a big-picture, inside out approach</h1>
          <div>
            <b>
              Diana is on a mission to create thoughtful, science-backed solutions
              for women who want to make informed decisions about their health and
              wellness.
              </b
            >
          </div>
          <div>
            <b>That's why we've created an integrated ecosystem of: </b>
          </div>
          <img src={require("./image/Vector.svg").default} alt="test tube" />
          <p>
            Consciously formulated products that deliver feel-good results fast
          </p>
          <img src={require("./image/Vector1.svg").default} alt="stars" />
  
          <p>
            In-app mood and period tracking options that help you cultivate a
            deeper connection with your mind and body
          </p>
          <img src={require("./image/outline_phone_in_talk_black_24dp.png")} alt="phone" />
  
          <p>
            In-app consultation portals that connect you with compassionate
            wellness experts
          </p>
          <p>
            Consider us your nerdy ally who spends their time perfecting products
            that work because they want you to feel your best everyday.
          </p>
        </section>
        </main>
        </>
    )
    
}