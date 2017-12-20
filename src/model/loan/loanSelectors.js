import {createSelector} from 'reselect';

export const getCacheKey = (amount, term) => `${amount}-${term}`;

export const selectAmount = state => state.loan.amountValue;
export const selectTerm = state => state.loan.termValue;

const selectResults = state => state.loan.results;

export const selectIsLoanLoaded = createSelector(
    selectAmount,
    selectTerm,
    selectResults,
    (amount, term, results) => results.hasOwnProperty(getCacheKey(amount, term))
);

export const selectLoan = createSelector(
    selectAmount,
    selectTerm,
    selectIsLoanLoaded,
    selectResults,
    (amount, term, isLoaded, results) => isLoaded ? results[getCacheKey(amount, term)] : null
)
