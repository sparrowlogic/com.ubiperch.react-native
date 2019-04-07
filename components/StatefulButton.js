import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Text} from "react-native";
import {Buttons} from "../styles/"

export default class StatefulButton extends React.Component {
    constructor(props){
        super(props)

    }    // computed

    is_disabled  () {
        return (this.props.loading || this.props.disabled);
    }

    label_text () {
        return this.props.loading ? this.props.loadingLabel : this.props.label;
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.is_disabled()}
                onPress={this.props.onPress}
                style={this.props.buttonStyle}
            >
                <Text style={this.props.labelStyle}>{this.label_text()}</Text>
            </TouchableOpacity>
        )
    }
}

StatefulButton.propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    label: PropTypes.string,
    loadingLabel: PropTypes.string,
    onPress: PropTypes.func,
    buttonStyle: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
    labelStyle: PropTypes.oneOf([PropTypes.array, PropTypes.object])
};

StatefulButton.defaultProps = {
    disabled: false,
    loading: false,
    label: "Submit",
    loadingLabel: "Please wait...",
    onPress: ()=>{},
    buttonStyle: Buttons.primary,
    labelStyle: Buttons.primaryLabel
};