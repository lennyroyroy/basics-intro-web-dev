/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Slides extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl} = siteConfig;
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div>
            <h1>Slides</h1>
 
              <div class="slide-preview-container">

              <div>
              <h2> Introduction</h2>
              <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
              <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
              </a>
              </div>

              <div>
                <h2> Creating Accounts</h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 

              <div>
                <h2> Lesson 1: Intro to HTML </h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 
           
              <div>
              <h2> Lesson 2: Intro to CSS  </h2>
              <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
              <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
              </a>
              </div>

              <div>
                <h2> Lesson 3: Layout </h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 

              <div>
                <h2> Lesson 4: CSS Class & ID </h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 
              <div>
              <h2> Lesson 5: Glitch Walkthrough </h2>
              <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
              <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
              </a>
              </div>

              <div>
                <h2> Lesson 6: HTML Structure </h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 

              <div>
                <h2> Lesson 7: Flexbox </h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 
              
              <div>
                <h2> Lesson 8: Responsive Design </h2>
                <a href="https://slides.com/lennyroyroy/deck/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Slides%20Thumbs/1.png"/>
                </a>
              </div> 

              </div>

          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Slides;