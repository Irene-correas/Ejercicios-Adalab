import React from "react";
import ReactDOM from "react-dom";
import irene from "./irene.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="image-profile" src={irene} alt="image-profile" />
      </div>

      <div className="container-name">
        <h1 className="name">{this.props.name}</h1>

        <p>{this.props.date}</p>
      </div>

      <div className="container-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore fuga,
          repudiandae ducimus distinctio porro, quaerat assumenda animi
          dignissimos consequuntur aliquam accusamus tenetur repellendus! Nobis
          nesciunt totam cum illum eius earum.
        </p>
        <div className="spam">
          <p>Leer más...</p>
          <p>37 &hearts;</p>
        </div>
      </div>
    </div>
  );
}
const componentToRender = <App name="Irene Correas" date="2020" />;
ReactDOM.render(componentToRender, document.getElementById("root"));
export default App;
