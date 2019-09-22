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
              <a href="https://slides.com/lennyroyroy/deck-3#/" target="_blank">     
              <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/intro-update-2.png"/>
              </a>
              </div>

              <div>
                <h2> Creating Accounts</h2>
                <a href="https://slides.com/lennyroyroy/deck-5#/" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/accounts-10.png"/>
                </a>
              </div> 

              <div>
                <h2> Lesson 1: Intro to HTML </h2>
                <a href="https://lennyroyroy.github.io/basics-presentations/html-slides" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/html-1.png"/>
                </a>
              </div> 
           
              <div>
              <h2> Lesson 2: Intro to CSS  </h2>
              <a href="https://slides.com/lennyroyroy/deck-1" target="_blank">     
              <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/css-2.png"/>
              </a>
              </div>

              <div>
                <h2> Lesson 3: Layout </h2>
                <a href="https://slides.com/lennyroyroy/deck-4" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/layout-3.png"/>
                </a>
              </div> 

              <div>
                <h2> Lesson 4: CSS Class & ID </h2>
                <a href="https://slides.com/lennyroyroy/deck-4-15" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/class-4.png"/>
                </a>
              </div> 
              <div>
              <h2> Lesson 5: Glitch Walkthrough </h2>
              <a href="https://slides.com/lennyroyroy/deck-6" target="_blank">     
              <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/glitch-5.png"/>
              </a>
              </div>

              <div>
                <h2> Lesson 6: HTML Structure </h2>
                <a href="https://slides.com/lennyroyroy/deck-7" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/struc-6.png"/>
                </a>
              </div> 

              <div>
                <h2> Lesson 7: Flexbox </h2>
                <a href="https://slides.com/lennyroyroy/deck-8" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/flex-7.png"/>
                </a>
              </div> 
              
              <div>
                <h2> Lesson 8: Responsive Design </h2>
                <a href="https://slides.com/lennyroyroy/deck-9" target="_blank">     
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-intro-web-dev/master/website/static/img/res-8.png"/>
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
