import React from 'react';
// import { Link } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import GalleryListItemSkills from './GalleryListItemSkills';

// <Link to={ `/portfolio/${ item.id }` } className="card" item={ item }>


const GalleryListItem = ( { project, } ) => {

    let img = new Image();

    if ( project.covers[404] ) {

        /** @namespace item.covers */
        img.src = project.covers[404];

        /** @namespace item.fields */
        return (

            <li key={project.id} className="col-sm-2 col-md-3">
                <a href={ '/portfolio/' + project.id } className="card">
                    <div className="card-image" style={ { backgroundImage : 'url(' + img.src + ')', } } >
                        <br/>
                    </div>

                    <div className="card-footer">
                        <h3 className="type-subheadline">{project.name}</h3>
                        <GalleryListItemSkills skills={project.fields}/>
                    </div>
                </a>
            </li>

        );

    }

};

export default GalleryListItem;
