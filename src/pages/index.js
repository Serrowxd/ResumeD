import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import img from '../assets/images/me.jpg'

class Homepage extends React.Component {
  render() {
    // const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title="Kevin Jolley" />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>A little about me,</h2>
              </header>
              <p>
                I'm probably the biggest nerd you'll ever meet. You can find me
                playing Dungeons & Dragons on the weekends, hunched over a
                keyboard behind a computer screen, or with my nose burried deep
                in a book. <br />
                My dream is to become a successful and recognized full-stack
                developer, as well as a published author. Though I only recently
                started my quest into the world of code, I hit the ground
                running and haven't let up since.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={img} alt="shaprint" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-bolt" />
                </li>
                <li>
                  <span className="icon style3 major fa-camera-retro" />
                </li>
                <li>
                  <span className="icon style4 major fa-cog" />
                </li>
                <li>
                  <span className="icon style5 major fa-desktop" />
                </li>
                <li>
                  <span className="icon style6 major fa-calendar" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Let's get to the reason you're here, <br />
                  <strong>What I can do</strong>
                </h2>
              </header>
              <h3> Languages </h3>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Markdown</li>
              </ul>
              <h3> Frameworks </h3>
              <ul>
                <li>React / Redux</li>
                <li>Ember</li>
                <li>Bootstrap</li>
                <li>Vue</li>
                <li>JQuery</li>
                <li>React Native</li>
                <li>Electron</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Maybe some of my work?</h2>
              </header>
              <p>Here's some of my favorites,</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>In Progress..</h3>
              <p>This will be populated in due time, patience is a virtue!</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>In Progress..</h3>
              <p>This will be populated in due time, patience is a virtue!</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>In Progress..</h3>
              <p>This will be populated in due time, patience is a virtue!</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Interested? Let's work together,</h2>
            </header>
            <p>
              Contact me below, <br />
              when it's set up.
            </p>
            {/* <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </div>
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
