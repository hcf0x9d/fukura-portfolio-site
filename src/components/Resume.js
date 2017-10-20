import React, { Component } from 'react';

import JSON from '../resume.json';

import ExperienceList from './partials/ExperienceList';
import EducationList from './partials/EducationList';
import SkillsList from './partials/SkillsList';
import CallToAction from './partials/CallToAction';
import PageFooter from './partials/Footer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Resume extends Component {

    constructor( props ) {

        super( props );

        this.state = {

            work       : JSON.work,
            education  : JSON.education,
            skills     : JSON.skills,
            ctaTitle   : "Want more details?",
            ctaBody    : "This resume is just a quick list, if you want more information download the PDF or check " +
            "out my LinkedIn profile.",
            ctaActions : [
                {

                    text   : "Download the PDF",
                    url    : "url1",
                    target : "_blank",

                },
                {

                    text   : "View my LinkedIn",
                    url    : "https://www.linkedin.com/in/jfukura",
                    target : "_blank",
                },

            ],

        }

    }

    render () {

        return (
            <div>
                <article className="page-article">
                    <ReactCSSTransitionGroup
                        transitionAppear={true}
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionName={'SlideIn'}>

                        <section className="col-sm-8">
                                <header>
                                    <h1 className="type-title">
                                        Curriculum Vitae
                                    </h1>
                                    <h2 className="type-subtitle">
                                        A developer with an eye for design.  Or a designer who likes to code. Either
                                        way.
                                    </h2>
                                </header>
                                <p>
                                    User Experience design from information architecture and requirements gathering
                                    through ISO Standards annotated wireframes and user flows, to design and full-stack
                                    development (LAMP, WIMP, etc).
                                </p>
                                <p>
                                    I work heavily in JavaScript, and have designed and developed web applications with
                                    jQuery, Angular and other frameworks. Web sites and web applications utilize SCSS
                                    built on OOCSS standards, semantic, SEO- and ADA-friendly HTML5, object-oriented
                                    JavaScript and PHP using the MVC design pattern when possible.
                                </p>

                                <ExperienceList work={ this.state.work } />
                                <CallToAction title={ this.state.ctaTitle }
                                              body={ this.state.ctaBody }
                                              actions={ this.state.ctaActions }
                                />
                            </section>


                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionAppear={true}
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionName={'FadeIn'}
                    >

                        <section className="col-md-3 col-md-push-1 hidden-sm">
                            <EducationList education={ this.state.education } />
                            <SkillsList skills={ this.state.skills } />
                        </section>

                    </ReactCSSTransitionGroup>
                </article>
                <PageFooter />
            </div>
        );

    }
}

export default Resume;
