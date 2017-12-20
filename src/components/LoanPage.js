import React from 'react';
import LoanSelector from "./LoanSelector";
import {connect} from 'react-redux';
import {loadConfiguration} from '../model/configuration/configurationActions';
import {setAmountValue, setTermValue, loadLoan} from '../model/loan/loanActions';
import {selectAmount, selectTerm, selectLoan, selectIsLoanLoaded} from '../model/loan/loanSelectors';
import Spinner from './Spinner';
import LoanResult from './LoanResult';
import debounce from 'lodash/debounce';
import './LoanPage.css';

const LOAD_DEBOUNCE_TIME = 400;

class LoanPage extends React.Component {

    constructor(props) {
        super(props);
        this.loadLoan = debounce(this.props.loadLoan, LOAD_DEBOUNCE_TIME);
    }

    setAmountValue = (value) => {
        this.props.setAmountValue(value);
        this.loadLoan();
    }

    setTermValue = (value) => {
        this.props.setTermValue(value);
        this.loadLoan();
    }

    renderSelector() {
        if (!this.props.configurationLoaded) {
            return null;
        }

        return <LoanSelector
            amountConfig={this.props.configuration.get('amountInterval')}
            termConfig={this.props.configuration.get('termInterval')}
            amountValue={this.props.amountValue}
            termValue={this.props.termValue}
            onChangeAmount={this.setAmountValue}
            onChangeTerm={this.setTermValue}
        />;
    }

    renderResult() {
        if (!this.props.configurationLoaded || !this.props.loanLoaded) {
            return <Spinner />;
        }

        return <LoanResult result={this.props.loan} />;
    }

    render() {
        return <div>
            {this.renderSelector()}
            <div className="loan-content">
                {this.renderResult()}
            </div>
        </div>;
    }

    componentDidMount() {
        this.props.loadConfiguration();
    }

}

LoanPage = connect(state => ({
    configurationLoaded: state.getIn(['configuration', 'loaded']),
    configuration: state.getIn(['configuration', 'configuration']),
    amountValue: selectAmount(state),
    termValue: selectTerm(state),
    loan: selectLoan(state),
    loanLoaded: selectIsLoanLoaded(state),
}), {
    loadConfiguration,
    setAmountValue,
    setTermValue,
    loadLoan,
})(LoanPage);

export default LoanPage;
