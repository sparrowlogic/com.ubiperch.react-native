import {StyleSheet} from 'react-native';
import {filling, textHierarchySize, textProminence, textVisibility} from "./settings";

export const typography = {
    p: {
        padding: filling.light,
    },

    textCenter: {
        textAlign: "center",
    },

    textPrimary: {
        fontSize: textHierarchySize.primary,
    },
    textSecondary: {
        fontSize: textHierarchySize.secondary,
    },

    textPrimarySection: {
        fontSize: textHierarchySize.primarySection,
    },
    textSecondarySection: {
        fontSize: textHierarchySize.secondarySection,
    },

    textContent: {
        fontSize: textHierarchySize.content,

    },
    textContentSecondary: {
        fontSize: textHierarchySize.secondaryContent
    },

    textSubtle: {
        fontWeight: textProminence.subtle,
        opacity: textVisibility.subtle,
    },
    textNormal: {
        fontWeight: textProminence.normal,
        opacity: textVisibility.normal,
    },
    textImportant: {
        fontWeight: textProminence.important,
        opacity: textVisibility.important,
    },
    textPriority: {
        fontWeight: textProminence.priority,
        opacity: textVisibility.priority,
    },
};

const Typography = StyleSheet.create(typography);




export default (Typography);