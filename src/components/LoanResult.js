import React from 'react';

export default function LoanResult({result: {
    totalPrincipal,
    term,
    totalCostOfCredit,
    totalRepayableAmount,
    monthlyPayment
}}) {
    return <div>
        <table>
            <tbody>
                <tr>
                    <th>Term</th>
                    <td>{term}</td>
                </tr>
                <tr>
                    <th>Monthly Payment</th>
                    <td>{monthlyPayment}</td>
                </tr>
                <tr>
                    <th>Total Principal</th>
                    <td>{totalPrincipal}</td>
                </tr>
                <tr>
                    <th>Total Cost of Credit</th>
                    <td>{totalCostOfCredit}</td>
                </tr>
                <tr>
                    <th>Total Repayable Amount</th>
                    <td>{totalRepayableAmount}</td>
                </tr>
            </tbody>
        </table>
    </div>;
}
