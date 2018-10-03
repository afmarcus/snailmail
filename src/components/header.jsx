import React from 'react'
import Link from 'gatsby-link'
import slow_logo_white from '../images/slow_logo_white.svg'
import addToMailchimp from 'gatsby-plugin-mailchimp'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email_address: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick() {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('.navbar-menu')
    if (burger !== null) {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // console.log(this.state)
    let email = this.state.email_address

    addToMailchimp(email)
      .then(data => {
        let message = document.getElementById("subscribe_response")

        message.innerHTML = data.msg
        this.setState({ email_address: "" })
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <section className="hero is-dark">
          <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                <Link to={'/'} className="navbar-item">
                  <img src={slow_logo_white} alt="Slow Venture White Logo" />
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.handleClick}>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              {/* <div className="navbar-item">
                <Link to={"/"}>🚀🐌</Link>
              </div> */}
              <div className="navbar-menu">
                <div className="navbar-end">
                  <Link to={"/posts/03-13-2018-SnailMail-Edition-1/"} className="navbar-item">
                    About
                </Link>
                  <a className="navbar-item" href="mailto:newsletter@slow.co">
                    Contact
                </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="hero-body has-text-centered">
            <div className="container">
              <h1 className="title hero-blurb">
                Authentic <br />
                thoughts and feelings <br />
                from the Slow Ventures Community
                </h1>

              <form className="newsletter-signup" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label>Signup for the Newsletter</label>
                  <div className="control">
                    <input className="input newsletter-input" type="text" placeholder="Email Address" value={this.state.email_address} onChange={this.handleChange} name="email_address" />
                  </div>
                </div>
                <span id="subscribe_response"></span>
                <input type="submit" className="button newsletter-btn" value="Subscribe" />
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Header
