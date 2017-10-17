import React, { Component } from 'react';

import JSON from '../portfolio.json';

import GalleryList from './partials/GalleryList';

class Portfolio extends Component {

    constructor( props ) {

        super( props );

        this.state = {

            projects : JSON.work,

        }

    }

    render () {

        return (
            <article>
                <section className="col-sm-6">
                    <header>
                        <h1 className="pageTitle">
                            Gallery or something?
                        </h1>
                        <h2>
                            A developer with an eye for design.  Or a designer who likes to code. Either way.
                        </h2>
                    </header>
                    <GalleryList />
                </section>
                <section className="col-md-3 col-md-push-1">
                    Other portfolio links
                </section>
            </article>
        );

    }
};

export default Portfolio;
