import React, { Component } from 'react';

import JSON from '../resume.json';

import ExperienceList from './partials/ExperienceList';
import EducationList from './partials/EducationList';
import SkillsList from './partials/SkillsList';

class Resume extends Component {

    constructor( props ) {

        super( props );

        this.state = {

            work      : JSON.work,
            education : JSON.education,
            skills    : JSON.skills,

        }

    }

    render () {

        return (
            <article>
                <section className="col-sm-8">
                    <header>
                        <h1 className="type-title">
                            Curriculum Vitae
                        </h1>
                        <h2 className="type-subtitle">
                            A developer with an eye for design.  Or a designer who likes to code. Either way.
                        </h2>
                    </header>
                    <p>
                        User Experience design from information architecture and requirements gathering through ISO
                        Standards annotated wireframes and user flows, to design and full-stack development (LAMP, WIMP,
                        etc).
                    </p>
                    <p>
                        I work heavily in JavaScript and have designed and developed web applications with jQuery,
                        Angular and other frameworks. Web sites and web applications utilize SCSS built on OOCSS
                        standards, semantic, SEO and ADA friendly HTML5, object oriented JavaScript and PHP using the
                        MVC design pattern where possible.
                    </p>

                    <ExperienceList work={ this.state.work } />

                </section>
                <section className="col-md-3 col-md-push-1">
                    <EducationList education={ this.state.education } />
                    <SkillsList skills={ this.state.skills } />
                </section>
            </article>
        );

    }
};

export default Resume;
