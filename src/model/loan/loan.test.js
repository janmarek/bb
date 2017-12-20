import {Map} from 'immutable';
import {setAmountValue, setLoan, setTermValue} from "./loanActions";
import {selectAmount, selectTerm, selectLoan, selectIsLoanLoaded} from './loanSelectors';
import {createStore} from "../store";

describe("loan model", () => {
    let store;
    beforeEach(() => {
        store = createStore();
    });

    it('can set amount', () => {
        expect(selectAmount(store.getState())).toBe(null);
        store.dispatch(setAmountValue(1000));
        expect(selectAmount(store.getState())).toBe(1000);
    });

    it('can set term', () => {
        expect(selectTerm(store.getState())).toBe(null);
        store.dispatch(setTermValue(4));
        expect(selectTerm(store.getState())).toBe(4);
    });

    it('can returns null on not loaded data', () => {
        store.dispatch(setAmountValue(1000));
        store.dispatch(setTermValue(4));

        expect(selectLoan(store.getState())).toBe(null);
    });

    it('can set data', () => {
        store.dispatch(setAmountValue(1000));
        store.dispatch(setTermValue(4));

        const result = {
            "totalPrincipal": "1000",
            "term": "4",
            "totalCostOfCredit": 100,
            "totalRepayableAmount": 1200,
            "monthlyPayment": 300
        };

        store.dispatch(setLoan(1000, 4, result));

        const state = store.getState();
        expect(
            selectLoan(state).equals(Map(result))
        ).toBe(true);
    });

    it('is loaded', () => {
        store.dispatch(setAmountValue(1000));
        store.dispatch(setTermValue(4));

        const result = {
            "totalPrincipal": "1000",
            "term": "4",
            "totalCostOfCredit": 100,
            "totalRepayableAmount": 1200,
            "monthlyPayment": 300
        };

        store.dispatch(setLoan(1000, 4, result));
        expect(selectIsLoanLoaded(store.getState())).toBe(true);

        store.dispatch(setTermValue(5));
        expect(selectIsLoanLoaded(store.getState())).toBe(false);
    });

    it('can caches data', () => {
        store.dispatch(setAmountValue(1000));
        store.dispatch(setTermValue(4));

        const result4 = {
            "totalPrincipal": "1000",
            "term": "4",
            "totalCostOfCredit": 100,
            "totalRepayableAmount": 1200,
            "monthlyPayment": 300,
        };

        const result5 = {
            "totalPrincipal": "1000",
            "term": "5",
            "totalCostOfCredit": 100,
            "totalRepayableAmount": 1200,
            "monthlyPayment": 240,
        };

        // load term 4
        store.dispatch(setLoan(1000, 4, result4));
        expect(
            selectLoan(store.getState()).equals(Map(result4))
        ).toBe(true);

        // load term 5
        store.dispatch(setTermValue(5));
        store.dispatch(setLoan(1000, 5, result5));
        expect(
            selectLoan(store.getState()).equals(Map(result5))
        ).toBe(true);

        // set term 4 and result is still available
        store.dispatch(setTermValue(4));
        expect(
            selectLoan(store.getState()).equals(Map(result4))
        ).toBe(true);
    });
});
