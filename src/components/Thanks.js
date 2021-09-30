import React from "react";

function Thanks(){

    /* add set timeout for thanks page */

    return(
        <>
        <div id="thanks-main">
            <div id="afoglayer_01" className="afog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div id="afoglayer_02" className="afog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div id="afoglayer_03" className="afog">
                <div className="image01"></div>
                <div className="image02"></div>
            </div>
            <div className="thanks">
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