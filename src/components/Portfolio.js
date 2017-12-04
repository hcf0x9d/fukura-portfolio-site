import React, { Component } from 'react';

import GalleryList from './partials/GalleryList';
import PageFooter from './partials/Footer';
import CallToAction from './partials/CallToAction';
import * as $ from "jquery";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Portfolio extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            today      : new Date(),
            ctaTitle   : "Looking for more projects?",
            ctaBody    : "To see more of my past work, contact me or check out my other portfolios.",
            ctaActions : [
                {

                    text   : "Visit Behance",
                    url    : "https://www.behance.net/jasonfukura",
                    target : "_blank",

                },
                {

                    text   : "Visit GitHub",
                    url    : "https://www.github.com/jfukura",
                    target : "_blank",

                },

            ],

        }

    }

    componentWillMount() {

        let portfolioApi = () => {

                const USER_ID = `jasonfukura`,
                    API_KEY = `TI85bF0ji07ftRZFp8hJxLSUC8hzvo8q`,
                    BEHANCE_URL = `https://api.behance.net/v2/users/${USER_ID}/projects?client_id=${API_KEY}`;

                $.ajax( {
                    url      : BEHANCE_URL,
                    type     : "get",
                    dataType : "jsonp",
                } ).done( ( response ) => {

                    this.setState( { projects : response.projects, projectCache : this.state.today, } );
                    localStorage.setItem( 'projects', JSON.stringify( this.state ) );

                } ).fail( ( error ) => {

                    console.log( "Ajax request fails" )
                    console.log( error );

                } );

            },

            portfolioCache = () => {

                this.setState( { projects : localStorage.getItem( 'projects' ), } );
                console.log( 'projects set from the localStorage cache' );

            }

        // Check to see if the projects item exists in the localStorage.  If it does, read from the cache.
        if ( localStorage.getItem( 'projects' ) &&
            new Date(
                JSON.parse( localStorage.getItem( 'projects' ) ).projectCache
            ).getDate() === this.state.today.getDate() ) {

            portfolioCache();

        } else {

            portfolioApi();

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
                        <section className="col-sm-12">
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

                </article>


                <PageFooter />
            </div>
        );

    }
};

export default Portfolio;
