import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <section className="contact-block">

            <Link to="mailto:jfukura@gmail.com" className="block-link" target="_blank">Email Me</Link>
            <Link to="https://www.github.com/jfukura" className="block-link" target="_blank">GitHub</Link>
            <Link to="https://www.behance.net/jasonfukura" className="block-link" target="_blank">Behance</Link>
            <Link to="https://www.linkedin.com/in/jfukura" className="block-link" target="_blank">LinkedIn</Link>

        </section>
    );

};

export default Contact;
