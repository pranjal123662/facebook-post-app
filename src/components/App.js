import Posts from "./Posts";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <div className="left-side">
          <div className="list">
            <i className="user" class="fas fa-user"></i>
            <div>Home</div>
            <div>Posts</div>
            <div>Recent Posts</div>
            <div>Friends</div>
            <div>Check Request</div>
            <Button style={{ marginRight: 250, width: 180 }} variant="outlined">
              Show More
            </Button>
          </div> */}
        {/* <div className="facebook-messenger">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-facebook-messenger"></i>
          </div>
        </div> */}
        <div>
          <Posts />
        </div>

        {/* <div className="right-side">
          <div className="list1">
            <i className="fas fa-user-friends"></i>
            <i className="fas fa-user-tie">
              <div className="name">Akhliesh</div>
            </i>
            <i className="fas fa-user-tie">
              <div className="name">Sankalp</div>
            </i>
            <i className="fas fa-user-tie">
              <div className="name">Pranjal</div>
            </i>
            <i className="fas fa-user-tie">
              <div className="name">Devkanta</div>
            </i>
            <i className="fas fa-user-tie">
              <div className="name">Johnny Sins</div>
            </i>
            <Button
              style={{
                marginLeft: -60,
              }}
              variant="outlined"
            >
              Show more
            </Button>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default App;
