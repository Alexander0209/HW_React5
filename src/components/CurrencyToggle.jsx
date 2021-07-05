import React from 'react'
import PropTypes from 'prop-types'
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { CurrencyContext } from './CurrencyContext';
import { CurrencyToggleButton } from './style';

const CurrencyToggle = (props) => {
    const [newCurrency, setNewCurrency] = React.useState('uah');
    const {currencyChangeHandler, currency} = React.useContext(CurrencyContext)

    const handleCurrency = (event, newAlignment) => {
        setNewCurrency(newAlignment);
    };

    React.useEffect(() => {
        currencyChangeHandler(newCurrency)
    }, [newCurrency])
    
    return (
        <>
            <h3>Choose currency:</h3>
            <ToggleButtonGroup
                value={newCurrency}
                exclusive
                onChange={handleCurrency}
                aria-label="choose currency"
            >
                <CurrencyToggleButton disabled={(currency === 'uah') ? true : false} value="uah" aria-label="uah"> 
                    ₴
                </CurrencyToggleButton>
                <CurrencyToggleButton disabled={(currency === 'usd') ? true : false} value="usd" aria-label="usd">
                    <AttachMoneyIcon />
                </CurrencyToggleButton>
                <CurrencyToggleButton disabled={(currency === 'euro') ? true : false} value="euro" aria-label="euro">
                    <EuroSymbolIcon />
                </CurrencyToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

CurrencyToggle.propTypes = {

}

export default CurrencyToggle
