import React from 'react';
import ValueSelect from './ValueSelect';

class ValueSelector extends React.Component {

    onChange = e => {
        this.props.onChange(e.target.value);
    }

    render() {
        const {name, min, max, step, value} = this.props;
        return <div>
            <h4>
                {name}
                <ValueSelect
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={this.onChange}
                />
            </h4>
            <p>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={this.onChange}
                />
            </p>
        </div>;
    }

}

export default ValueSelector;
