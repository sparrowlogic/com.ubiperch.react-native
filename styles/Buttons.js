import {StyleSheet} from 'react-native';
import {filling, textVisibility, textProminence, textHierarchySize} from "./settings";
import {typography} from "./Typography";

export const buttonDefault = {
    button: {
        padding: filling.normal,
        ...typography.textContent,
        ...typography.textImportant,
        borderWidth: 1,
        borderColor: "rgb(100, 100, 100)",
        backgroundColor: "rgb(250, 250, 250)"
    }
};

export const buttons = {
    default: buttonDefault.button,
};


const Buttons = StyleSheet.create(buttons);

export default (Buttons);