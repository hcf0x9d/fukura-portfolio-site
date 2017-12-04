import React from 'react';

const GalleryListItemSkills = ( { skills, } ) => {

    const items = skills.map( ( skill ) => {

        return (
            <li key={ skill } className="skill">
                <img className="skill-icon"
                     src={ "/img/" + skill.replace(/[^a-zA-Z0-9]/g,'_') + ".svg"}
                     alt={ skill }
                     title={ skill }
                />
            </li>
        )

    } );

    return <ol className="skills">{ items }</ol>;

};

export default GalleryListItemSkills;
