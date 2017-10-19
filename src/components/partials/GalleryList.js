import React from 'react';

import GalleryListItem from './GalleryListItem';

const GalleryList = ( portfolio ) => {

    const items = portfolio.portfolio.map( ( item ) => {

        return (
            <GalleryListItem key={ item.id } item={ item }/>
        )

    } );

    return <ol class="gallery row">{ items }</ol>;

};

export default GalleryList;
