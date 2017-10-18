import React from 'react';

const EducationList = ( { education, } ) => {

    const items = education.map( ( education ) => {

        return (

            <li key={ education.id } className="education-item">
                {

                    // Create the list of certificates from the institution
                    education.certificates.map( ( cert ) => {

                        return <h3 key={ cert } className="type-subheadline">{ cert }</h3>;

                    } )

                }
                <h4 className="type-subheadline mod-secondary">{ education.institution }</h4>
            </li>

        )

    } );

    return (
        <section className="education-section">
            <h3 className="type-headline">
                Education
            </h3>
            <ol className="education">
                { items }
            </ol>
        </section>
    )

};

export default EducationList;
