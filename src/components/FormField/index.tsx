import React, {FC} from 'react';

type FormFieldProps = {
    value: string,
    type: string,
    name: string,
    label: string,
    onChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
}   

const FormField:FC<FormFieldProps> = ({value, name, type, label, onChange}) => {

    return (
        <div>
            <label>
                {label}
                <input type={type} 
                name={name}
                value={value} 
                onChange={onChange} />
            </label>
        </div>
    )
}

export {FormField}