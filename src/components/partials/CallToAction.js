import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = ( { title, body, actions, } ) => {

    const acts = actions.map( ( action ) => {

        return <Link key={action.url}
                     to={action.url}
                     className="btn"
                     target={action.target}>{action.text}</Link>;

    } );

    return (
        <section className="cta-block">
            <h1 className="type-headline">
                { title }
            </h1>
            <p>{ body }</p>
            { acts }
        </section>
    )

};

export default CallToAction;
