import "./App.css";
import Platterpic from "./images/platter.jpg";
import Righticon from "./images/govegan.jpg";

function App() {
  return (
    <div class="background">
      <div class="container">
        <div class="menu">
          <div className="iconright">
            <h2>
              VEGAN
              <br /> MENU
            </h2>
            <img style={{ marginTop: "-20px" }} src={Righticon} alt="icon" />
          </div>

          <div class="special">
            <div class="right">
              <h3
                className="mobileview"
                style={{
                  border: "2px solid #75AE43",
                  textAlign: "center",
                  background: "#75AE43",
                }}
              >
                STARTERS
              </h3>

              <div class="item">
                <div className="topicright">
                  <h3 class="pricetag">Veggie Pizza</h3>
                  <p
                    className="mobileview"
                    style={{
                      width: "80%",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
              </div>
              <div class="item">
                <div className="topicright">
                  <h3 class="pricetag">Veggie Pizza</h3>
                  <p
                    className="mobileview"
                    style={{
                      width: "80%",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
              </div>
              <div class="item">
                <div className="topicright">
                  <h3 class="pricetag">Veggie Pizza</h3>
                  <p
                    className="mobileview"
                    style={{
                      width: "80%",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
              </div>
            </div>
            <div class="left">
              <h3
                style={{
                  border: "2px solid #75AE43",
                  textAlign: "center",
                  background: "#75AE43",
                }}
              >
                MAIN COURSE
              </h3>

              <div class="item">
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
                <div className="topic">
                  <h3>Veggie Pizza</h3>
                  <p
                    className="mobileview"
                    style={{ width: "87%", fontSize: "12px", textAlign: "end" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
              <div class="item">
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
                <div className="topic">
                  <h3>Veggie Curry</h3>
                  <p
                    className="mobileview"
                    style={{ width: "87%", fontSize: "12px", textAlign: "end" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
              <div class="item">
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
                <div className="topic">
                  <h3>Lentil Stew</h3>
                  <p
                    className="mobileview"
                    style={{ width: "87%", fontSize: "12px", textAlign: "end" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="special">
            <div class="left">
              <img className="platter" src={Platterpic} alt="platter" />
            </div>
            <div class="right">
              <h3
                style={{
                  border: "2px solid #75AE43",
                  textAlign: "center",
                  background: "#75AE43",
                }}
              >
                DESSERTS
              </h3>

              <div class="item">
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
                <div className="topic">
                  <h3>Choco Budoir</h3>
                  <p
                    className="mobileview"
                    style={{ width: "87%", fontSize: "12px", textAlign: "end" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
              <div class="item">
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
                <div className="topic">
                  <h3>Baked Pier</h3>
                  <p
                    className="mobileview"
                    style={{ width: "87%", fontSize: "12px", textAlign: "end" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
              <div class="item">
                <strong
                  style={{
                    padding: "5px",
                    border: "2px solid #75AE43",
                    textAlign: "center",
                    color: "#75AE43",
                    marginTop: "15px",
                  }}
                >
                  $9.00
                </strong>
                <div className="topic">
                  <h3>Apple Crumble</h3>
                  <p
                    className="mobileview"
                    style={{ width: "87%", fontSize: "12px", textAlign: "end" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                </div>
              </div>
              <p className="email">&nbsp;www.website.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
