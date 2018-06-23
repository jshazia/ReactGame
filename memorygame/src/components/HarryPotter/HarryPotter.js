import React from "react";
import "./HarryPotter.css";

const HarryPotter = props => (
    <div className="card">
        <div className="img-container">
            <span className="random">
                <img onClick={props.randomize} alt={props.name} src={props.image} />
            </span>
        </div>

    </div>

);

export default HarryPotter;