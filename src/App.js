import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
     firebase.initializeApp({
      apiKey: 'AIzaSyDRoVRjq527jXQB1U6UciOU4sZIc7Hzr9U',
      authDomain: 'authentication-7f87c.firebaseapp.com',
      databaseURL: 'https://authentication-7f87c.firebaseio.com',
      projectId: 'authentication-7f87c',
      storageBucket: 'authentication-7f87c.appspot.com',
      messagingSenderId: '117257661083'
    } );
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
        else {
        this.setState({ loggedIn: false });
        }
    });
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
      return (
      <Button onPress={ () => firebase.auth().signOut()}>
       LOG OUT 
       </Button>
      );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size="large" />
    }
  }

  render() {
    return(
      <View>
          <Header headerText = "Authentication" />
            {this.renderContent()}
      </View>
    );
  }
}
export default App;