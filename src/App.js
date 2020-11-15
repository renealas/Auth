import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggeIn: null }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyCKuAKlLsJUid0tX6_El8ZNfIffyJ6M_AM',
                authDomain: 'reactauth-ad976.firebaseapp.com',
                databaseURL: 'https://reactauth-ad976.firebaseio.com',
                projectId: 'reactauth-ad976',
                storageBucket: 'reactauth-ad976.appspot.com',
                messagingSenderId: '622409718561',
            });
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggeIn: true });
            } else {
                this.setState({ loggeIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggeIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            < Button
                            title="Cerrar Session"
                            onPress={() => {
                                firebase.auth().signOut();
                            }} />
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    </Card>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Autenticacion" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
