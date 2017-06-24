import React from 'react';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
const SliderWithTooltip = createSliderWithTooltip(Slider);

const GameSearchSlider = (props) => {
  const onChange = (value) => {
    props.onChange(value);
  };

  const unitFormatter = (v, unit) => {
    return `${v} ${unit}`;
  };

  const {name, label, min, max, defaultValue, unit} = props;
  return (
    <div className="row">
      <div className="input-field col s12">
        <label htmlFor={name}>{label}</label><br/><br/>
        <SliderWithTooltip
          name={name}
          tipFormatter={(v) => unitFormatter(v, unit)}
          defaultValue={defaultValue} 
          min={min} 
          max={max}
          onChange={onChange}
          marks={{[min]: `${min} ${unit}`, [max]: `${max} ${unit}`}}
        />
      </div>
    </div>
  );
};

GameSearchSlider.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  unit: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired
};

GameSearchSlider.defaultProps = {
  unit: ''
};

export default GameSearchSlider;
