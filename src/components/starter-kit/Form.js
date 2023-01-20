import React, {useCallback, useMemo, useState} from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../layout/form';
import './style.scss';
import ContainedButtons from "../layout/form/components/Button";

const ProjectForm = () => {
    const [t] = useTranslation();
    const [list, setList] = useState([]);
    const [state, setState] = useState({
        project_name: '',
        path_docker: '',
        path_app: '',
    });
    const handleChange = (name, value) => setState(prevState => ({ ...prevState, [name]: value }));

    const onSubmit = useCallback(() => {
        setList(prevState => ([...prevState, state]));
        setState({
            project_name: '',
            path_docker: '',
            path_app: '',
        });
    }, [state]);

    const inputs = useMemo(() => [
        {
            component: 'input',
            name: 'project_name',
            type: 'text',
            autoFocus: true,
            required: true,
            refresh: true,
            value: state.project_name,
            rules: [],
            label: t('Project name'),
            onChangeState: value => handleChange('project_name', value),
        },
        {
            component: 'input',
            name: 'path_docker',
            type: 'text',
            required: true,
            refresh: true,
            value: state.path_docker,
            rules: [],
            label: t('Path to docker'),
            onChangeState: value => handleChange('path_docker', value),
        },
        {
            component: 'input',
            name: 'path_app',
            type: 'text',
            required: true,
            refresh: true,
            value: state.path_app,
            rules: [],
            label: t('Path to app (for npm or yarn)'),
            onChangeState: value => handleChange('path_app', value),
        },
    ], [state, t]);

    const buttons = useMemo(() => [
        {
            component: 'button',
            type: 'submit',
            color: 'primary',
            variant: 'contained',
            label: t('Save'),
            onClick: () => onSubmit(),
            disabled: true,
            loading: true,
        },
    ], [onSubmit, t]);

    return (
        <div className="App">
            <Form
                inputs={inputs}
                buttons={buttons}
                className={'flex-row'}
            />
            <div>
                {
                    list.map(item => (
                        <div className={'list'} key={item.project_name}>
                            <div>{item.project_name}</div>
                            <div>{item.path_docker}</div>
                            <div>{item.path_app}</div>
                            <div>
                                <ContainedButtons label={'Start Docker'} />
                                <ContainedButtons label={'Start App'} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectForm;
