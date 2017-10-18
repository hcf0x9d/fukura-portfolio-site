import React from 'react';

const SkillsList = ( { skills, } ) => {

    const items = skills.map( ( skill ) => {

        return (
            <li key={ skill.id } className="skill">
                <img className="skill-icon" src={ skill.icon } alt={ skill.name }/>
            </li>
        )

    } );

    return (
        <section>
            <h3 className="type-headline">
                Languages
            </h3>
            <ol className="skills">
                { items }
            </ol>
        </section>
    )

};

export default SkillsList;
