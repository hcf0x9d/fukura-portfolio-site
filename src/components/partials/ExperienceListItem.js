import React from 'react';

const ExperienceListItem = ( { item, } ) => {

    return (

        <li key={ item.id } className="experience">
            <article className="experience-article">
                <header className="experience-header">
                    <h2 className="headline">{ item.name }</h2>
                    <h3 className="subheadline">{ item.title }</h3>
                </header>
                <div className="experience-body">
                    <p className="mod-no-margin">{ item.summary }</p>
                </div>
            </article>
        </li>

    );

};

export default ExperienceListItem;
