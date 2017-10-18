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
            <article className="page-article">
                <section className="col-sm-6">
                    <header>
                        <h1 className="type-title">
                            Portfolio
                        </h1>
                        <h2 className="type-subtitle">
                            Some of my recent works
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
