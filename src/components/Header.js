import React from 'react'

import '../assets/css/add.css'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major">
            {/* <img src={img} className="img" alt="ShaPrint" /> */}
          </span>
          <h1>
            Hi, I'm <strong>Kevin Jolley</strong>
            <br />
            JavaScript Fanatic, Develeoper, and Avid Writer.
          </h1>
          <p>
            “The clock is running. Make the most of today. Time waits for no
            man. Yesterday is history. Tomorrow is a mystery. Today is a gift.
            That's why it is called the present.” <br /> - Alice Morse Earle
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    )
  }
}

export default Header
