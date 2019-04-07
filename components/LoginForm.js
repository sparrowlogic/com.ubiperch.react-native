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
        };

        this.inputs = {};
    }

    // Computed

    form_is_not_valid() {
        if (!this.state.email.length) {
            return "Please type in a valid email.";
        }

        if (!this.state.password.length) {
            return "Please type in your password.";
        }

        return false;
    }

    // utils

    next = (key) => {
        this.inputs[key].focus();
    };

    // handlers

    handleSubmit = ()  => {
        this.props.onSubmit(this.state);
    };


    render() {
        return (
            <View style={[Container.wrapper, {height: 400}]}>
                <View style={Container.body}>

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
                            returnKeyType={ "next" }
                            ref={input => this.inputs['email'] = input}
                            onSubmitEditing={() => this.next('password')}
                            blurOnSubmit={ false }

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
                            returnKeyType={ "done" }
                            ref={input => this.inputs['password'] = input}
                            onSubmitEditing={this.handleSubmit}

                            style={FieldSet.input}
                        />
                    </View>

                    <View style={FieldSet.wrapper}>
                        <Button
                            title={"Sign In"}
                            style={Buttons.default}
                            onPress={this.handleSubmit}
                            disabled={!!this.form_is_not_valid()}
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
    onSubmit: () => {}
};
