import React from 'react';
import commonStyles from '../common_styles'

const styles = {
  background: {
    color: 'blue',
    fontSize: 20,
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
  },
  topField: {
    marginTop: '70px',
    background: '#504C5B',
    borderRadius: '50px',
    width: '80%',
    height: '50px',
    border: 'none',
  },
}

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.background}>
        <div className='col-xs-4 col-xs-offset-4' style={commonStyles.centre}>
            <img src='http://res.cloudinary.com/small-change/image/upload/v1483344546/title_1_yxjmm8.png'
             style={styles.titleImage}
            />
            <form>
              <input type="text" name="firstname" value="Mickey" style={styles.topField}/>
              <input type="text" name="lastname" value="Mouse" style={styles.inputField}/>
              <input type="submit" value="Submit"/>
            </form>
        </div>
        <p onClick={this.props.updateText}> Click Me (Login)! </p>
      </div>
    );
  }

}

export default Login;