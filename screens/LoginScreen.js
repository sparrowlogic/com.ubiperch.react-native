import React from 'react';
import {View, Text, Button} from "react-native";
import {Container} from "../styles";
import PropTypes from "prop-types";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginForm: true
        }
    }

    // Computed

    register_button_label = () => (
        this.state.showLoginForm ?
            "New? Create an account here."
            :
            "Already have an account? Login here."
    );

    // Handlers

    handleLoginSuccess = () => {

    };

    handleRegisterSuccess = () => {

    };


    // Presentation

    render() {
        return (
            <View style={Container.wrapper}>

                <View style={Container.heading}>
                    <Text
                        style={[Container.h1, {textAlign: "center"}]}
                    >
                        ubiPerch
                    </Text>
                </View>

                <View style={Container.body}>
                    <Text style={Container.bodyText}>
                        Welcome to to ubiPerch, a community of people who help
                        each other find stuff to buy. yay.
                    </Text>
                </View>

                {this.state.showLoginForm ?
                    <LoginForm />
                    :
                    <RegisterForm/>
                }

                <Button
                    title={this.register_button_label()}
                    onPress={()=>this.setState({showLoginForm: !this.state.showLoginForm})}
                />


            </View>
        )
    }

}


LoginScreen.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    success: PropTypes.bool,
    handleSubmit: PropTypes.func
};

LoginScreen.defaultProps = {
    loading: false,
    error: null,
    success: false,
    handleSubmit: () => {}
};
