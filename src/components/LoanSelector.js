import React from 'react';

function LoanSelector({
    amountConfig,
    termConfig,
    amountValue,
    termValue,
    onChangeAmount,
    onChangeTerm
}) {
    return <form>
        <div>
            <h4>Amount {amountValue}</h4>
            <p>
                <input
                    type="range"
                    min={amountConfig.min}
                    max={amountConfig.max}
                    step={amountConfig.step}
                    value={amountValue}
                    onChange={e => onChangeAmount(e.target.value)}
                />
            </p>
        </div>
        <div>
            <h4>Term {termValue}</h4>
            <p>
                <input
                    type="range"
                    min={termConfig.min}
                    max={termConfig.max}
                    step={termConfig.step}
                    value={termValue}
                    onChange={e => onChangeTerm(e.target.value)}
                />
            </p>
        </div>
    </form>;
}

export default LoanSelector;
