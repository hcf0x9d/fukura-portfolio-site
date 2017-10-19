import React from 'react';
import ExperienceListItem from './ExperienceListItem';

const ExperienceList = ( { work, } ) => {

    const items = work.map( ( work ) => {

        return (
            <ExperienceListItem key={ work.id } item={ work }/>
        )

    } );

    return (

        <section>
            <h2 className="type-headline mod-section">
                Recent Experience
            </h2>
            <ol className="experiences">
                { items }
            </ol>
        </section>
    )

};

export default ExperienceList;
