import {StyleSheet} from 'react-native';
import {spacing, filling} from "./settings";
import {typography} from "./Typography";

export const container = {
    flex: {
        flex:1
    },
    wrapper: {
        marginTop: spacing.section.start,
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        padding: spacing.section.label,
        backgroundColor: "rgb(240, 240, 240)",
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(200, 200, 200)"
    },

    h1: {
        ...typography.textPrimary,
        ...typography.textImportant,
    },

    body: {
        padding: filling.normal,
        paddingTop: spacing.section.sub.start,
    },
    bodyText: {
        marginTop: spacing.section.sub.start,
        ...typography.textContent,
        ...typography.textNormal,

    },
    footer: {
    },
};

const Container = StyleSheet.create(container);

export default (Container);