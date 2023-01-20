import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import { kebabCase } from 'lodash';
// Component
import Input from './components/Input/index';
import Button from './components/Button/index';
import './style.scss';

const useStyles = makeStyles(() => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        display: 'flex',
        justifyContent: 'space-around',
    },
}));

const pushObject = inputs => {
    const state = {};
    inputs.forEach(item => {
        state[item.name] = item.value || '';
    });
    return state;
};

const BodyForm = ({ inputs, setState }) => inputs.map(item => {
    switch (item.component) {
    case 'input':
        return <Input
            key={kebabCase(item.name)}
            {...item}
            onChangeState={value => {
                setState(prevState => ({ ...prevState, [item.name]: value }));
                item.onChangeState(value);
            }}
        />;
    default:
        return <item.component
            key={kebabCase(item.label)}
            {...item}
            onChangeState={value => {
                setState(prevState => ({ ...prevState, [item.name]: value }));
                item.onChangeState(value);
            }}
        />;
    }
});

const isDisabled = (state, inputs) => Object.keys(state).filter(i => inputs.find(item => item.name === i && item.required || item.compareValue) && (state[i] === 'error_field' || state[i] === '')).length > 0;

const Buttons = ({ buttons, state, loading, inputs }) => buttons.map(item => {
    const params = {};
    switch (item.component) {
    case 'button':
        if (item.loading) params.loading = loading;
        if (item.disabled) params.disabled = isDisabled(state, inputs);
        return (
            <Button
                key={kebabCase(item.label)}
                {...item}
                {...params}
                onClick={e => {
                    e.preventDefault();
                    item.onClick(e);
                }}
            >
                {item.label}
            </Button>
        );
    default:
        return <item.component key={item.label} {...item} />;
    }
});

const Form = ({ inputs, buttons, error, loading, className, checkDisabled }) => {
    const classes = useStyles();
    const [t] = useTranslation();
    const [state, setState] = useState(() => pushObject(inputs));
    useEffect(() => {
        if (!checkDisabled) return;
        checkDisabled(isDisabled(state, inputs));
    }, [checkDisabled, inputs, state]);
    return (
        <form className={classNames([classes.form, className])} noValidate>
            {inputs && <BodyForm inputs={inputs} setState={setState} />}
            {error && <div className="form-error">{ t(`errors:${error}`) }</div>}
            {buttons && <div className="buttons popup-buttons"><Buttons buttons={buttons} inputs={inputs} state={state} loading={loading} /></div>}
        </form>
    );
};
export default Form;
