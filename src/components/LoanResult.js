import React from 'react';
import './LoanResult.css';

function formatNumber(num) {
    return Math.round(num * 100) / 100;
}

export default function LoanResult({result}) {
    return <div className="loan-result">
        <table>
            <tbody>
                <tr>
                    <th>Term</th>
                    <td>{formatNumber(result.term)}</td>
                </tr>
                <tr>
                    <th>Monthly Payment</th>
                    <td>{formatNumber(result.monthlyPayment)}</td>
                </tr>
                <tr>
                    <th>Total Principal</th>
                    <td>{formatNumber(result.totalPrincipal)}</td>
                </tr>
                <tr>
                    <th>Total Cost of Credit</th>
                    <td>{formatNumber(result.totalCostOfCredit)}</td>
                </tr>
                <tr>
                    <th>Total Repayable Amount</th>
                    <td>{formatNumber(result.totalRepayableAmount)}</td>
                </tr>
            </tbody>
        </table>
    </div>;
}
