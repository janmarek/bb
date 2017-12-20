import React from 'react';
import range from 'lodash/range';

export default function ValueSelect({value, min, max, step, onChange}) {
    return <select value={value} onChange={onChange}>
        {range(min, max, step).concat([max]).map(
            val => <option value={val} key={val}>{val}</option>
        )}
    </select>;
}
