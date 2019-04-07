import React from 'react';
import {View, Text, TextInput, Button} from "react-native";
import {Container, Typography, FieldSet, Buttons} from "../styles";
import PropTypes from "prop-types";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }


    formIsNotValid() {
        if (!this.state.email.length) {
            return "Please type in a valid email.";
        }

        if (!this.state.password.length) {
            return "Please type in your password.";
        }

        return false;
    }

    handleSubmit() {
        this.props.handleSubmit(this.state);
    }


    render() {
        return (
            <View style={[Container.wrapper, {height: 400}]}>
                <View style={Container.body}>
                    <Text style={Container.bodyText}>
                        Welcome to to ubiPerch, a community of people who help
                        each other find stuff to buy. yay.
                    </Text>

                    <View style={FieldSet.wrapper}>
                        <Text
                            style={FieldSet.label}
                        >Email</Text>

                        <TextInput
                            onChangeText={(text)=> this.setState({email: text})}

                            autoComplete={"email"}
                            autoCorrect={false}
                            textContentType={"emailAddress"}
                            keyboardType={"email-address"}

                            style={FieldSet.input}
                        />
                    </View>

                    <View style={FieldSet.wrapper}>
                        <Text style={FieldSet.label}>
                            Password
                        </Text>

                        <TextInput
                            onChangeText={(text)=> this.setState({password: text})}

                            autoComplete={"password"}
                            textContentType={"password"}
                            secureTextEntry={true}

                            style={FieldSet.input}
                        />
                    </View>

                    <View style={FieldSet.wrapper}>
                        <Button
                            title={"Sign In"}
                            style={Buttons.default}
                            onPress={this.handleSubmit}
                            disabled={!!this.formIsNotValid()}
                        />

                    </View>
                </View>

            </View>
        )
    }

}


LoginForm.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    success: PropTypes.bool,
    handleSubmit: PropTypes.func
};

LoginForm.defaultProps = {
    loading: false,
    error: null,
    success: false,
    handleSubmit: () => {}
};
