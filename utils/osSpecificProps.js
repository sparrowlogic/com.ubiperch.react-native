import {Platform} from 'react-native';

const osProp = function  (key, prop) {

    const props = {
        "textContentType": {
            "givenName" : {
                "android": "givenName",
                "ios": "given-name"
            },
            "familyName": {
                "android": "familyName",
                "ios": "family-name"
            },
            "emailAddress": {
                "android": "emailAddress",
                "ios": "email"
            },
            "newPassword": {
                "android": "newPassword",
                "ios": "new-password",
            }
        }
    };

    return {[key]: props[key][prop][Platform.OS]};
};

export default (osProp)