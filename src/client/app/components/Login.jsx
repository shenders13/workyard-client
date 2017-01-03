import React from 'react';
import commonStyles from '../common_styles'

const styles = {
  background: {
    backgroundImage: "url('http://res.cloudinary.com/small-change/image/upload/v1483344331/Group_dumglk.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  },
  titleImage: {
    width: '90%',
    marginTop: '40%',
    height: '41px',
    textAlign: 'center',
  },
  inputField: {
    background: '#504C5B',
    borderRadius: '50px',
    width: '80%',
    height: '50px',
    border: 'none',
    marginTop: '20px',
    paddingLeft: '20px',
    color: '#a6a9a9',
    fontFamily: 'FontAwesome',
  },
  topField: {
    marginTop: '70px',
    background: '#504C5B',
    borderRadius: '50px',
    width: '80%',
    height: '50px',
    border: 'none',
    paddingLeft: '20px',
    color: '#a6a9a9',
    fontFamily: 'FontAwesome',
  },
  submitButton: {
    display: 'inline',
    marginTop: '20px',
    background: '#00B4B1',
    borderRadius: '50px',
    color: 'white',
    fontSize: '18px',
    fontWeight: '400',
    width: '80%',
    height: '50px',
    border: 'none',
  },
  submitButtonHover: {
    display: 'inline',
    marginTop: '20px',
    background: '#02bebb',
    borderRadius: '50px',
    color: 'white',
    fontSize: '18px',
    fontWeight: '400',
    width: '80%',
    height: '50px',
    border: 'none',
  },
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldFocus: false,
      hover: false,
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
  }

  onMouseEnterHandler() {
      this.setState({
          hover: true
      });
      console.log('enter');
  }

  onMouseLeaveHandler() {
      this.setState({
          hover: false
      });
      console.log('leave');
  }

  render() {
    return (
      <div style={styles.background}>
        <div className='col-xs-4 col-xs-offset-4' style={commonStyles.centre}>
            <img src='http://res.cloudinary.com/small-change/image/upload/v1483344546/title_1_yxjmm8.png'
             style={styles.titleImage}
             className='animated flipInX'
            />
            <form>
              <input type="email" id="email" placeholder="&#xf007;      Email" style={styles.topField}/>
              <input type="password" id="password" placeholder="&#xf023;      Password" style={styles.inputField}/><br />
              <input 
                type="submit" 
                value="Log In" 
                style={this.state.hover? styles.submitButtonHover : styles.submitButton}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler} 
              />
            </form>
        </div>
        <p onClick={this.props.updateText}> Click Me (Login)! </p>
      </div>
    );
  }

}

export default Login;