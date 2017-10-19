import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <section>
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'SlideIn'}>

                <article className="col-sm-4 page-article">
                    <header>
                        <h1 className="type-title">
                            Time to chat
                        </h1>
                        <h2 className="type-subtitle">
                            I'm here to chat when you're ready.
                        </h2>
                    </header>
                    <p>
                        Whether you're looking for someone to join your team, have technical questions or just want to
                        chat about coffee, mechanical keyboards and being a remote employee, I'm here when you're ready.
                    </p>
                    <h3 className="type-headline">Contact Information</h3>
                    <Link to="#" className="block-link" target="_blank">Email Me</Link>&nbsp;
                    <Link to="#" className="block-link" target="_blank">GitHub</Link>&nbsp;
                    <Link to="#" className="block-link" target="_blank">Behance</Link>&nbsp;
                    <Link to="#" className="block-link" target="_blank">LinkedIn</Link>

                    <h3 className="type-headline">Resources</h3>
                    <Link to="#" className="block-link">PDF Resume</Link>

                </article>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'FadeIn'}>

                <aside className="col-sm-8 aside-image">
                    <span className="image" style={{ backgroundImage : "url(http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg)", }}/>
                </aside>
            </ReactCSSTransitionGroup>
        </section>
    );

};

export default Contact;
