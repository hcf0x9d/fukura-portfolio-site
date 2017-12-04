import React from 'react';

import GalleryListItem from './GalleryListItem';

const GalleryList = ( props ) => {

    if ( props.portfolio ) {

        const items = JSON.parse( props.portfolio ).projects.map(( item ) => {

            return (
                <GalleryListItem key={ item.id } item={item}/>
            )

        });

        return <ol className="gallery row">{items}</ol>;
    }

};

export default GalleryList;
