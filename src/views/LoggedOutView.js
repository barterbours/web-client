import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import Swal from "sweetalert2";

export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
    
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="https://d-art.ppstatic.pl/kadry/k/r/1/fa/06/5b6d63eb9d14d_o_full.jpg" alt="First slide" style={{ height:"500px" }} />
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="http://udostepniane.pl/wp-content/uploads/2018/08/Jak-Ci-siem-podobam-Janusz1.jpg" alt="Second slide" style={{ height:"500px" }} />
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="http://paczaizm.pl/content/wp-content/uploads/gdy-start-kolejnej-rakiety-sprawia-ze-zapominasz-o-calej-zawisci-i-zazdrosci-wobec-sasiadow-typowy-polak-nosacz.jpg" alt="Third slide" style={{ height:"500px" }} />
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
<br/>
        <div>
            <h1 className="text-center"> About Us </h1> <hr className="container" style={{ borderWidth: "3px", borderColor: "green" }} />
            <p>

            </p>
        </div>

</div>
        );
    }
}