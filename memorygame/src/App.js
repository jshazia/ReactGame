import React, { Component } from "react";
import HarryPotter from "./components/HarryPotter/index";
import Wrapper from "./components/Wrapper/index";
import characters from "./characters.json";
import "./App.css";



class App extends Component {
    state = {characters};

    shuffle = () => {

        const imagesOrder = this.state.characters;
        this.setState({
            characters: imagesOrder.sort(() => Math.random() - 0.5)
        });
    };

    //random = this.shuffle();

    render(){
        return (
            <Wrapper>
                <h1 className="title"> Harry Potter Characters </h1>
                {
                    this.state.characters.map(characters => (
                        <HarryPotter
                            key={characters.id}{...characters}
                            randomize={this.shuffle}
                        />

                        ))
                }
            </Wrapper>
        )
    }
}

export default App;