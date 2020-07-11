import React from 'react';
import PropTypes from 'prop-types';

import ShelfItem from './ShelfItem';
import * as S from './styled';



const Shelf = ({ products, columns }) => {

    function buildShelf(_products, _columns) {
        const ShelfRows = [];

        for (let i = 0; i < _products.length;) {
            const shelfItems = [];

            for (let j = 0; j < _columns && i < _products.length; j++, i++) {
                shelfItems.push(<ShelfItem key={_products[i].id} product={_products[i]} />);
            }

            ShelfRows.push(<ul key={ShelfRows.length} className="shelf__products">{shelfItems}</ul>);
        }

        return ShelfRows;
    }


    return (
        <S.ShelfWrapper className="shelf">
            {buildShelf(products, columns)}
        </S.ShelfWrapper>
    );
};

Shelf.propTypes = {
    products: PropTypes.array,
    columns: PropTypes.number
};



export default Shelf;