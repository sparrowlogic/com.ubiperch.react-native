import React from 'react';
import {View, Text, TextInput, Button, FormLabel} from "react-native";
import {Container, Typography, FieldSet, Buttons} from "../styles";
import PropTypes from "prop-types";
import osProp from "../utils/osSpecificProps";

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        };

        this.inputs = {};
    }

    // Computed

    form_is_not_valid() {

        if (!this.state.firstName.length) {
            return "Please provide a first name";
        }

        if (!this.state.lastName.length) {
            return "Please provide a last name";
        }

        if (!this.state.email.length) {
            return "Please type in a valid email.";
        }

        if (!this.state.password.length) {
            return "Please type in your password.";
        }

        return false;
    }

    // Handlers

    handleSubmit() {
        this.props.onSubmit(this.state);
    }

    // Utils

    next(key) {
        this.inputs[key].focus();
    }

    render() {
        return (
            <View style={[Container.wrapper, {height: 400}]}>
                <View style={Container.body}>

                    <View style={FieldSet.wrapper}>
                        <Text
                            style={FieldSet.label}
                        >First Name</Text>

                        <TextInput
                            onChangeText={(text)=> this.setState({firstName: text})}
                            onSubmitEditing={() => this.next('lastName')}
                            blurOnSubmit={ false }

                            autoCapitalize
                            {...osProp("textContentType", "givenName")}
                            ref={input => this.inputs['firstName'] = input}
                            returnKeyType={ "next" }

                            style={FieldSet.input}
                        />
                    </View>

                    <View style={FieldSet.wrapper}>
                        <Text
                            style={FieldSet.label}
                        >Last Name</Text>

                        <TextInput
                            onChangeText={(text)=> this.setState({lastName: text})}

                            autoCapitalize
                            {...osProp("textContentType", "familyName")}
                            ref={input => this.inputs['lastName'] = input}
                            onSubmitEditing={() => this.next('email')}
                            blurOnSubmit={ false }
                            returnKeyType={ "next" }

                            style={FieldSet.input}
                        />
                    </View>

                    <View style={FieldSet.wrapper}>
                        <Text
                            style={FieldSet.label}
                        >Email</Text>

                        <TextInput
                            onChangeText={(text)=> this.setState({email: text})}

                            autoComplete={"email"}
                            onSubmitEditing={() => this.next('password')}
                            autoCorrect={false}
                            {...osProp("textContentType", "emailAddress")}
                            keyboardType={"email-address"}
                            ref={input => this.inputs['email'] = input}
                            blurOnSubmit={ false }
                            returnKeyType={ "next" }

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
                            {...osProp("textContentType", "newPassword")}
                            secureTextEntry={true}
                            ref={input => this.inputs['password'] = input}
                            returnKeyType={ "done" }

                            style={FieldSet.input}
                        />
                    </View>

                    <View style={FieldSet.wrapper}>
                        <Button
                            title={"Create account"}
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


RegisterForm.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    success: PropTypes.bool,
    handleSubmit: PropTypes.func
};

RegisterForm.defaultProps = {
    loading: false,
    error: null,
    success: false,
    onSubmit: () => {}
};
