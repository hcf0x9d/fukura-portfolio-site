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
            <h3>
                Recent Experience
            </h3>
            <ol>
                { items }
            </ol>
        </section>
    )

};

export default ExperienceList;
