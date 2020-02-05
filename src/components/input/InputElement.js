import React from 'react';
import './styles.css';

const InputElement = ({
    label,
    type,
    id,
    placeholder,
    description,
    handleOnChange,
    onLeft,
    value
}) => {
    const labelOnLeft = onLeft ? 'col-form-label pr-2' : '';
    const inputInline = onLeft ? 'd-inline w-50' : '';
    let element;
    const props = {
        className: `form-control ${inputInline}`,
        placeholder: placeholder,
        id: id,
        onChange: event => handleOnChange(event),
        value
    }
    if (type === 'textarea') {
        element = (
            <textarea {...props} />
        );
    } else {
        element = (
            <input
                type={type}
                {...props}
            />
        );
    }
    return (
        <>
            <label className={`${labelOnLeft}`}>{label}</label>
            {element}
            {description &&
                <small className="form-text text-muted">{description}</small>
            }
        </>
    );
};

export default InputElement;
