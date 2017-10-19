import React, { Component } from 'react';

import JSON from '../portfolio.json';

import GalleryList from './partials/GalleryList';
import PageFooter from './partials/Footer';
import CallToAction from './partials/CallToAction';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Portfolio extends Component {

    constructor( props ) {

        super( props );

        this.state = {

            projects : JSON,
            ctaTitle   : "Looking for more projects?",
            ctaBody    : "To see more of my past work, contact me or check out my other portfolios.",
            ctaActions : [
                {

                    text   : "Visit Behance",
                    url    : "https://www.behance.net/jasonfukura",
                    target : "_blank",

                },
                {

                    text   : "Contact me",
                    url    : "contact",
                    target : "_parent",

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
                        transitionName={'SlideIn'}
                    >
                        <section className="col-sm-8">
                            <header>
                                <h1 className="type-title">
                                    Portfolio
                                </h1>
                                <h2 className="type-subtitle">
                                    Some of my recent works
                                </h2>
                            </header>
                            <GalleryList portfolio={ this.state.projects } />
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

                        <section className="col-md-3 col-md-push-1">
                            Other portfolio links
                        </section>

                    </ReactCSSTransitionGroup>
                </article>


                <PageFooter />
            </div>
        );

    }
};

export default Portfolio;
