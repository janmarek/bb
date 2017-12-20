import React from 'react';
import ValueSelector from './ValueSelector';

function LoanSelector({
    amountConfig,
    termConfig,
    amountValue,
    termValue,
    onChangeAmount,
    onChangeTerm
}) {
    return <form>
        <ValueSelector
            name="Amount"
            value={amountValue}
            min={amountConfig.min}
            max={amountConfig.max}
            step={amountConfig.step}
            onChange={onChangeAmount}
        />
        <ValueSelector
            name="Term"
            value={termValue}
            min={termConfig.min}
            max={termConfig.max}
            step={termConfig.step}
            onChange={onChangeTerm}
        />
    </form>;
}

export default LoanSelector;
