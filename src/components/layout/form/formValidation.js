import validator from 'validator';
import passwordValidator from 'password-validator';
// import forbiddenEmailUsernames from '../../forbiddenEmailUsernames.json';
// import forbiddenEmailProviders from '../../forbiddenEmailProviders.json';

const errors = [];

export const isEmail = value => {
    if (value.length > 0
        && !validator.isEmail(value)) {
        return { message: 'errors:email_format' };
    }
    return null;
};

// export const isForbiddenEmail = value => {
//     const reEmailExtract = /^(.*)@(.*)$/;
//     const emailExtract = reEmailExtract.exec(value);
//     if (!emailExtract || emailExtract.length === 0) {
//         return { message: 'errors:email_format' };
//     }
//     const username = emailExtract[1];
//     const provider = emailExtract[2];
//     if (forbiddenEmailUsernames.indexOf(username) > -1
//         || forbiddenEmailProviders.indexOf(provider) > -1) {
//         return { message: 'errors:email_format' };
//     }
//     return null;
// };

export const isAcceptableStringLength = value => {
    if (!validator.isLength(value.toString().trim(), { max: 64 })) {
        return { message: 'errors:max_length_exceeded' };
    }
    return null;
};

export const isPassword = value => {
    const schema = new passwordValidator(); // eslint-disable-line
    schema.has().uppercase();
    schema.has().lowercase();
    schema.has().digits();
    schema.is().min(8);

    if (value.length > 0 && !schema.validate(value, { list: false })) {
        return { message: 'auth:invalid_password_error_message' };
    }
    return null;
};

export const isAcceptableString = value => {
    if (value.length > 0 && validator.isDataURI(value)
        || validator.isMagnetURI(value)
        || validator.isURL(value)
        || validator.isJSON(value)
        || validator.isJWT(value)
        || validator.contains(value, '.')
        || validator.contains(value, '<')
        || validator.contains(value, '>')
        || validator.contains(value, ';')
        || validator.contains(value, ':')
        || validator.contains(value, ',')
        || validator.contains(value, '!')
        || validator.contains(value, '\\')
    ) {
        return { message: 'errors:bad_format' };
    }
    return isAcceptableStringLength(value);
};

export const selectNotEmpty = value => {
    let formValue;
    if (value[0] !== undefined) {
        formValue = value[0];
    }
    if (formValue === undefined || formValue === null || formValue.length === 0) {
        return { message: 'errors:not_empty' };
    }
    return null;
};

export const isPhoneNumber = value => {
    if (value.length && !validator.isMobilePhone(value, 'fr-FR')) {
        return { message: 'errors:bad_phone_format' };
    }
    return null;
};

export const getFunction = (validFunc, value) => {
    switch (validFunc) {
    case 'isAcceptableStringLength':
        return isAcceptableStringLength(value);
    case 'isEmail':
        return isEmail(value);
    // case 'isForbiddenEmail':
    //     return isForbiddenEmail(value);
    case 'isPhoneNumber':
        return isPhoneNumber(value);
    case 'isAcceptableString':
        return isAcceptableString(value);
    case 'isPassword':
        return isPassword(value);
    case 'selectNotEmpty':
        return selectNotEmpty(value);
    default:
        return null;
    }
};

export const validation = (value, name, validators, list) => {
    if (validators !== undefined) {
        errors[name] = validators.map(validFunc => getFunction(validFunc, value, list)).filter(el => el !== null);
    }
};
