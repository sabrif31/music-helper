// Libs
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import classNames from 'classnames';
// Components
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import { getFunction } from '../../formValidation';
// icons
import CheckIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/ReportProblem';

// Styles
import './styles/_input.scss';

/*eslint react/prop-types:0*/
const FormTextField = props => {
    const [t] = useTranslation();
    const [id] = useState(kebabCase(props.label));
    const [valueState, setValueState] = useState(props.value);
    const [errors, setErrors] = useState([]);
    const [disabled, setDisabled] = useState(props.disabled);

    useEffect(() => {
        if (!props.refresh) return;
        setValueState(props.value);
    }, [props.refresh, props.value]);

    useEffect(() => {
        setDisabled(props.disabled);
    }, [props.disabled]);

    useEffect(() => {
        if (props.emptyInput !== undefined) {
            setValueState('');
        }
    }, [props.emptyInput]);

    const setPropsChange = (value, e) => {
        const error = [];
        setValueState(value);
        if (props.rules && props.rules.length > 0) {
            props.rules.forEach(rule => {
                const errorMessage = getFunction(rule, value, props.list);
                if (errorMessage !== null) {
                    error.push(errorMessage.message);
                }
            });
        }
        if (error.length > 0) {
            props.onChangeState('error_field', e);
            setErrors(props.errorMessage ? props.errorMessage : error[0]);
        } else if (value.length === 0 && props.errorMessage
            || props.compareValue !== undefined && value !== props.compareValue) {
            props.onChangeState('error_field', e);
            setErrors(props.errorMessage);
        } else {
            props.onChangeState(value, e);
            setErrors([]);
        }
    };
    const endAdornment = () => {
        if (errors.length > 0 && valueState.length > 0) {
            return (
                <Tooltip
                    title={t(`${errors}`)}
                    placement={'right'}
                    classes={{
                        popper: 'textarea-error-tooltip-popper',
                        tooltip: 'textarea-error-tooltip',
                    }}
                >
                    <InputAdornment position="end">
                        <ErrorIcon />
                    </InputAdornment>
                </Tooltip>
            );
        }
        if (props.hasValidityIcons && errors.length === 0 && valueState.length > 0) {
            return (
                <InputAdornment position="end">
                    <CheckIcon />
                </InputAdornment>
            );
        }
        return null;
    };
    return (
        <FormControl
            component={'div'}
            className={classNames([
                props.className,
                'airsaas-input',
                { 'with-start-adornment': props.startAdornment },
                { multiline: props.multiline > 1 },
                { valid: errors.length === 0 && valueState.length > 0 },
                { invalid: valueState.length > 0 && errors.length > 0 },
            ])}
            error={errors.length > 0}
        >
            <div className={'airsaas-input-wrapper'}>
                { props.startAdornment && <div className={'start-adornment-wrapper'}>{props.startAdornment}</div> }
                <TextField
                    error={errors.length > 0 && valueState.length > 0}
                    autoFocus={props.autoFocus}
                    required={props.required !== undefined ? props.required : false}
                    placeholder={props.placeholder || ''}
                    type={props.type || 'text'}
                    id={id}
                    multiline={props.multiline > 1}
                    rows={props.multiline > 1 ? props.multiline : undefined}
                    label={t(props.label)}
                    value={valueState}
                    disabled={disabled}
                    onChange={e => {
                        const { target: { value } } = e;
                        if (props.onlyNumber && !isNaN(value)) setPropsChange(value, e);
                        if (!props.onlyNumber) setPropsChange(value, e);
                    }}
                    onKeyDown={ev => {
                        if (ev.key === 'Backspace' && props.onKeyDown !== undefined) { props.onKeyDown(); }
                    }}
                    margin="normal"
                    InputProps={{
                        endAdornment: endAdornment(),
                    }}
                    onFocus={props.onFocus ? props.onFocus : () => {}}
                    onBlur={props.onBlur ? props.onBlur : () => {}}
                />
            </div>
        </FormControl>
    );
};

FormTextField.defaultProps = {
    disabled: false,
    // hasValidityIcons: false,
    list: [],
    multiline: 1,
    onlyNumber: false,
    required: false,
    startAdornment: null,
    type: 'text',
    value: '',
};

FormTextField.propTypes = {
    disabled: PropTypes.bool,
    // hasValidityIcons: PropTypes.bool,
    label: PropTypes.string.isRequired,
    list: PropTypes.array,
    multiline: PropTypes.number,
    onChangeState: PropTypes.func.isRequired,
    onlyNumber: PropTypes.bool,
    required: PropTypes.bool,
    startAdornment: PropTypes.any,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormTextField;
