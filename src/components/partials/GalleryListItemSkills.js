import React from 'react';

const GalleryListItemSkills = ( { skills, } ) => {

    const items = skills.map( ( skill ) => {

        return (
            <li key={ skill.name } className="skill">
                <img className="skill-icon" src={ skill.icon } alt={ skill.name }/>
            </li>
        )

    } );

    return <ol className="skills">{ items }</ol>;

};

export default GalleryListItemSkills;
