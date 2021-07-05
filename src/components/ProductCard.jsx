import React from 'react'
import PropTypes from 'prop-types'
import { CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import { ProdCard } from './style'
import { CurrencyContext } from './CurrencyContext';

const ProductCard = ({products}) => {
    const {currency} = React.useContext(CurrencyContext)
    const [price, setPrice] = React.useState(products.price)

    const convertTo = (currencyToConvert) => {
        if(currencyToConvert === 'usd') {
            return (products.price/27.5).toFixed(2)
        } else if (currencyToConvert === 'euro') {
            return (products.price/32.7).toFixed(2)
        }
    }

    React.useEffect(() => {
       return (
        (currency === 'uah') ? setPrice(products.price) : (currency === 'usd') ? setPrice( convertTo('usd')) : setPrice( convertTo('euro'))
       )
    }, [currency])

    

    return (
        <ProdCard >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={products.name}
                    height="160"
                    image={'../../images/'+products.img}
                    title={products.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {products.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {products.description}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {'Price: ' + price + ' ' + currency}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </ProdCard>
    )
}

ProductCard.propTypes = {
    products: PropTypes.shape( {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
}

export default ProductCard
