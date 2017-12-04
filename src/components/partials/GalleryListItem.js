import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import GalleryListItemSkills from './GalleryListItemSkills';

const GalleryListItem = ( { item, } ) => {
    let img = new Image()


    if ( item.covers[404] ) {
        img.src = item.covers[404]


            return (

                <li key={item.id} className="col-sm-2 col-md-3">
                    <a href={item.url} className="card" target="_blank">
                        <div className="card-image" style={{backgroundImage: 'url(' + img.src + ')',}}>
                            <br/>
                        </div>

                        <div className="card-footer">
                            <h3 className="type-subheadline">{item.name}</h3>
                            <GalleryListItemSkills skills={item.fields}/>
                        </div>
                    </a>
                </li>

            );

    }

};

export default GalleryListItem;
