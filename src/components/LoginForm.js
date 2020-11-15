import React, { Component } from 'react';
import firebase from 'firebase';
import { Text} from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Logo } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail(){
        this.setState({
            error:'La Autenticacion Fallo.',
            loading: false,
        });
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading: false,
            error:'',
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button
                title="Iniciar Session"
                onPress={this.onButtonPress.bind(this)}
            />
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Logo source={{uri: 'https://thumbs.dreamstime.com/z/user-icon-human-person-symbol-policeman-hat-avatar-login-sign-abstract-swirl-circle-frame-vector-124593468.jpg'}}/>
                </CardSection>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Correo"
                        placeholder="usuario@gmail.com"
                    />
                </CardSection>
                <CardSection >
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="Contraseña"
                        placeholder="Contraseña"
                        securetextentry
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        fontWeight: 'bold',
    },
};

export default LoginForm;
