import React from "react";

function Thanks(){

    /* add set timeout for thanks page */

    return(
        <>
        <div id="thanks-main">
            <div id="afoglayer_01" class="afog">
                <div class="image01"></div>
                <div class="image02"></div>
            </div>
            <div id="afoglayer_02" class="afog">
                <div class="image01"></div>
                <div class="image02"></div>
            </div>
            <div id="afoglayer_03" class="afog">
                <div class="image01"></div>
                <div class="image02"></div>
            </div>
            <div class="thanks">
                <h1 className="thankstitle">Thank You!</h1>
                    <p><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                        <hr />
                    <p>
                        Having trouble? <a href="/contact">Contact us</a>
                    </p>
                    <p>
                        <a href="/about">Continue to homepage</a>
                    </p>
            </div>
        </div>
        </>
    )
}

export default Thanks;