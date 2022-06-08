import React from 'react';
import "./Screen.css";
import Login from './Login';

function Screen() {
    return (
        <div class='head'>
            <div class="card bg-white text-dark">
                <img src="/images/back.png" class="card-img" alt="back.jpg" height="940px" width="1900px" />
                    <div class="card-img-overlay d-flex flex-column justify-content-start">
                    <div class="container display-3 fw-bold text-primary">
                    </div>
                        <h5 class="card-title">
                        <Login />
                        </h5>
                    </div>
            </div>
        </div>
    )
}

export default Screen;