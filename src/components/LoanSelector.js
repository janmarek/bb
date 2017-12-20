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
            min={amountConfig.get('min')}
            max={amountConfig.get('max')}
            step={amountConfig.get('step')}
            onChange={onChangeAmount}
        />
        <ValueSelector
            name="Term"
            value={termValue}
            min={termConfig.get('min')}
            max={termConfig.get('max')}
            step={termConfig.get('step')}
            onChange={onChangeTerm}
        />
    </form>;
}

export default LoanSelector;
