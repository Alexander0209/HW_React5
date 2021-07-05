import { styled } from '@material-ui/core';
import {Card, List} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';

export const ProdCard = styled(Card)({
    maxWidth: '350px',
    minWidth: '300px',
    margin: '10px',
})

export const ProdList = styled(List)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
})

export const CurrencyToggleButton = styled(ToggleButton) ({
    width: '50px',
})
