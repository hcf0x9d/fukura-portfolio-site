import React from 'react';

import GalleryListItem from './GalleryListItem';

/**
 * List of gallery items
 *
 * Just the gallery item wrapper that returns an ordered list of projects.  Passed the props in to then pass to the
 * child elements.
 *
 * @param props
 * @returns {html}
 * @constructor
 */
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
