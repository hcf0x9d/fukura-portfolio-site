import React from 'react';

const EducationList = ( { education, } ) => {

    const items = education.map( ( education ) => {

        return (

            <li key={ education.id } className="">
                {

                    // Create the list of certificates from the institution
                    education.certificates.map( ( cert ) => {

                        return <h3 className="subheadline">{ cert }</h3>;

                    } )

                }
                <h4 className="">{ education.institution }</h4>
            </li>

        )

    } );

    return (
        <section>
            <h3 className="">
                Education
            </h3>
            <ol>
                { items }
            </ol>
        </section>
    )

};

export default EducationList;
