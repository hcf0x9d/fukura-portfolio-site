import React from 'react';

const ExperienceListItem = ( { item, } ) => {

    return (

        <li key={ item.id } className="experience">
            <article className="experience-article row">
                <header className="experience-header col-sm-4">
                    <h3 className="type-subheadline">{ item.name }</h3>
                    <h4 className="type-subheadline mod-secondary">{ item.title }</h4>
                </header>
                <div className="experience-body col-sm-8">
                    <p className="mod-no-margin">{ item.summary }</p>
                </div>
            </article>
        </li>

    );

};

export default ExperienceListItem;
