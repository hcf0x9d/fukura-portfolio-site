import React from 'react';
import ExperienceListItem from './ExperienceListItem';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ExperienceList = ( { work, } ) => {

    const items = work.map( ( work ) => {

        return (
            <ExperienceListItem key={ work.id } item={ work }/>
        )

    } );

    //<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
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
