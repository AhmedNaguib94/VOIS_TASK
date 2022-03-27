import { ReactElement } from 'react';

import CustomSelectProps from '../../../core/models/custom-select-props';
import './custom-select.scss';

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    onChange,
    placeholder,
    value
}: CustomSelectProps): ReactElement => {
    return (
        <select
            onChange={onChange}
            value={value}
            role="select"
        >
            <option value="">{placeholder}</option>
            {options.map((option,index) => (
                <option
                    key={index}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    )
}

export default CustomSelect;