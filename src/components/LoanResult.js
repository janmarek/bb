import React from 'react';
import './LoanResult.css';

function formatNumber(num) {
    return Math.round(num * 100) / 100;
}

export default function LoanResult({result: {
    totalPrincipal,
    term,
    totalCostOfCredit,
    totalRepayableAmount,
    monthlyPayment
}}) {
    return <div className="loan-result">
        <table>
            <tbody>
                <tr>
                    <th>Term</th>
                    <td>{formatNumber(term)}</td>
                </tr>
                <tr>
                    <th>Monthly Payment</th>
                    <td>{formatNumber(monthlyPayment)}</td>
                </tr>
                <tr>
                    <th>Total Principal</th>
                    <td>{formatNumber(totalPrincipal)}</td>
                </tr>
                <tr>
                    <th>Total Cost of Credit</th>
                    <td>{formatNumber(totalCostOfCredit)}</td>
                </tr>
                <tr>
                    <th>Total Repayable Amount</th>
                    <td>{formatNumber(totalRepayableAmount)}</td>
                </tr>
            </tbody>
        </table>
    </div>;
}
