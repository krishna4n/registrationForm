import {Component} from 'react'
import './index.css'

class Registration extends Component {
  state = {
    hasSubmitted: false,
    firstname: '',
    lastname: '',
    hasfirstNameErr: false,
    haslastNameErr: false,
  }

  onFirstNameChange = event => {
    this.setState({
      firstname: event.target.value,
    })
  }

  onLastNameChange = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  validateFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        hasfirstNameErr: true,
      })
    } else {
      this.setState({
        hasfirstNameErr: false,
      })
    }
  }

  validateLastName = event => {
    if (event.target.value === '') {
      this.setState({
        haslastNameErr: true,
      })
    } else {
      this.setState({
        haslastNameErr: false,
      })
    }
  }

  submitFirstName = value => {
    if (value !== '') {
      this.setState({
        hasfirstNameErr: false,
      })
    } else {
      this.setState({
        hasfirstNameErr: true,
      })
    }
  }

  submitLastName = value => {
    if (value !== '') {
      this.setState({
        haslastNameErr: false,
      })
    } else {
      this.setState({
        haslastNameErr: true,
      })
    }
  }

  onRegistration = event => {
    event.preventDefault()
    this.submitFirstName(event.target.firstname.value)
    this.submitLastName(event.target.lastname.value)
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({
        hasSubmitted: true,
        firstname: '',
        lastname: '',
      })
    }
  }

  submitAnother = () => {
    this.setState({
      hasSubmitted: false,
      firstname: '',
      lastname: '',
    })
  }

  render() {
    const {
      hasSubmitted,
      hasfirstNameErr,
      haslastNameErr,
      firstname,
      lastname,
    } = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <>
          {!hasSubmitted && (
            <form className="form-control" onSubmit={this.onRegistration}>
              <label htmlFor="firstname" className="label">
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstname"
                className="input-field"
                value={firstname}
                onChange={this.onFirstNameChange}
                onBlur={this.validateFirstName}
              />
              {hasfirstNameErr && <p className="error-msg">Required</p>}
              <label htmlFor="lastname" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastname"
                className="input-field"
                value={lastname}
                onChange={this.onLastNameChange}
                onBlur={this.validateLastName}
              />
              {haslastNameErr && <p className="error-msg">Required</p>}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </>
        {hasSubmitted && (
          <div className="form-control">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-icon"
            />
            <p>Submitted Successfully</p>
            <button
              type="submit"
              className="submit-button"
              onClick={this.submitAnother}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Registration
