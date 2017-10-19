import React from 'react';

import GalleryListItem from './GalleryListItem';

const GalleryList = ( portfolio ) => {

    const items = portfolio.portfolio.map( ( item ) => {

        return (
            <GalleryListItem item={item}/>
        )

    } );

    return <ol className="gallery row">{items}</ol>;

};

export default GalleryList;
