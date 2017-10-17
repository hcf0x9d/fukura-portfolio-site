import React from 'react';

const SkillsList = ( { skills, } ) => {

    const items = skills.map( ( skill ) => {

        return (
            <li key={ skill.id } className="">
                { skill.name }
            </li>
        )

    } );

    return (
        <section>
            <h3 className="">
                Languages
            </h3>
            <ol>
                { items }
            </ol>
        </section>
    )

};

export default SkillsList;
