import Select from 'react-select';
import React, { useState } from 'react';
import { Tags } from './enums';

function MultiSelectDropdown({ onChange }) {
    const options = [];
    Object.values(Tags).forEach(tag =>{
        options.push({value: tag, label: tag.charAt(0).toUpperCase() + tag.slice(1)})
    })

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
        onChange && onChange(selected);
    };

    return (
        <div>
        <Select
            options={options}
            isMulti
            value={selectedOptions}
            onChange={handleChange}
        />
        </div>
    );
}

export default MultiSelectDropdown
