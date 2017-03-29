import React, { Component } from 'react';
import HeaderHome from './HeaderHome';
import Category from './Category';
import Footer from './Footer';


// QQGABE: I left the links blank for you. I know that you'll have to change the stuff that's hard-coded like the categoryTitle and the categoryImage, but I wanted to have something there to work with for now.
class Home extends Component {
  render() {
    return (
      <div>
        <HeaderHome />

        <h2 className="sectionHeaders">Categories</h2>
        <div className="categorySection">
            <div className="columns categories">
              <Category categoryTitle="music" link="" categoryImage="./img/music.png" />
              <Category categoryTitle="national parks" link="" categoryImage="./img/parks.png" />
            </div>

            <div className="columns categories">
              <Category categoryTitle="farming" link="" categoryImage="./img/farming.png" />
              <Category categoryTitle="movies" link="" categoryImage="./img/movies.png" />
            </div>
        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default Home;
