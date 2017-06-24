import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, value, error}) => {
  return (
    <div className="input-field textInput">
      <input 
        type="text" 
        name={name}
        className={error && error.length > 0 ? 'invalid' : 'valid'}
        value={value}
        onChange={onChange}/>
      <label htmlFor={name}>{label}</label>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;

