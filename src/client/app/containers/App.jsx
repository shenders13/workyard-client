import React from 'react'
import { connect } from 'react-redux';
import Login from '../components/Login.jsx'
import Actions from '../actions/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <Login updateText={this.props.updateText}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const props = {text: state.exampleReducer.text};
  return props;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText: () => {
      dispatch(Actions.exampleAction({text: "STORE UPDATED!"}))
    }
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppConnected;