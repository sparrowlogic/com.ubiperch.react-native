import {StyleSheet} from 'react-native';
import {spacing, filling} from './settings';
import {typography} from "./Typography";

export const fieldSet = {
    wrapper: {
        marginTop: spacing.section.sub.start,
        padding: filling.light,
    },
    label: {
        marginBottom: spacing.section.sub.label,
        ...typography.textImportant,
        ...typography.textSecondarySection,
    },
    input: {
        borderWidth: 1,
        borderColor: "rgb(100, 100, 100)",
        padding: filling.normal
    }

};

const FieldSet = StyleSheet.create(fieldSet);

export default (FieldSet)