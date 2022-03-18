import React from 'react';

export default function Track()
{
    return(
        <><section class="fourth">
            <h1>Track your mood</h1>
            <p>
                All days and all moods are not made equal. But we can only improve
                what we measure. Track your mood and vitals (including skin and hair
                health) so you can take better care of yourself every day.
            </p>
            <div class="Bbutton">
                <p class="bbutton">Track you mood on the app</p>
            </div>

            <img src={require("./image/img1.png")} alt="img1" />
            <img src={require("./image/img2.png")} alt="img2" />
            <img src={require("./image/img3.png")} alt="img3" />
            <img src={require("./image/img4.png")} alt="img4" />
            


        </section><section class="fifth">

                <h1>Track your period</h1>
                <p>
                    Stay in the know with reliable AI-based and science-backed period,
                    ovulation, and PMS predictions. The intuitive design makes tracking
                    your cycle effortless and helps you stay on top of your monthly data.
                </p>
                <div class="Button">
                    <p class="button">Track you period on the app</p>
                </div>
            </section><img src={require("./image/calendar.jpg")} alt="calendar" class="calender" /></>

    )
}