import React from 'react';

const ExperienceListItem = ( { item, } ) => {

    return (

        <li key={ item.id } className="">
            { item.name }
        </li>

    );

};

export default ExperienceListItem;
