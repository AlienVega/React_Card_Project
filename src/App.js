import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import angular from "./images/dev1.jpg";
import Bootstrap from "./images/dev2.jpg";
import ccsharp from "./images/dev3.jpg";
import kompledev from "./images/dev4.jpg";
function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              {" "}
              <Course
                image={angular}
                title="angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio accusamus minima soluta, fugit fugiat et non sed veritatis architecto modi ea vero, explicabo beatae suscipit, dignissimos sequi dolores in!"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="java"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio accusamus minima soluta, fugit fugiat et non sed veritatis architecto modi ea vero, explicabo beatae suscipit, dignissimos sequi dolores in!"
              />
            </div>
            <div className="column">
              <Course
                image={ccsharp}
                title="Komplo Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio accusamus minima soluta, fugit fugiat et non sed veritatis architecto modi ea vero, explicabo beatae suscipit, dignissimos sequi dolores in!"
              />
            </div>
            <div className="column">
              <Course
                image={kompledev}
                title="Front end"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio accusamus minima soluta, fugit fugiat et non sed veritatis architecto modi ea vero, explicabo beatae suscipit, dignissimos sequi dolores in!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
