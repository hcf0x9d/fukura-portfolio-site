import React from 'react';
import { Link } from 'react-router-dom';

import GalleryListItemSkills from './GalleryListItemSkills';

const GalleryListItem = ( { item, } ) => {

    return (

        <li key={item.projectSlug} className="col-sm-2 col-md-3">
            <Link to={ item.projectSlug } className="card">
                <div className="card-image" style={{backgroundImage: item.images[0].src,}}>
                    <br/>
                </div>

                <div className="card-footer">
                    <h3 className="type-subheadline">{ item.projectName }</h3>
                    <GalleryListItemSkills skills={ item.skills } />
                </div>
            </Link>
        </li>

    );

};

export default GalleryListItem;
