import React from 'react';

import GalleryListItem from './GalleryListItem';

const GalleryList = ( props ) => {

    const list = ( props ) => {

        if ( props.portfolio ) {

            return props.portfolio.map( ( item ) => {

                return (
                    <GalleryListItem key={ item.id } project={ item }/>
                )

            } );

        }

    };

    return (

        <ol className="gallery row">{ list( props ) }</ol>

    )

};

export default GalleryList;
