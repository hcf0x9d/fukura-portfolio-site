import React from 'react';

const EducationList = ( { education, } ) => {

    const items = education.map( ( education ) => {

        return (

            <li key={ education.id } className="">
                { education.name }
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

export default EducationList;
