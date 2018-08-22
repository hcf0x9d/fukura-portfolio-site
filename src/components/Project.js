import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as $ from "jquery";

class Project extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            today     : new Date(),
            projectId : props.match.params.projectId,
        }

        console.log( this.state.projectId );

    }

    // Before the component loads we need to gather the information for this project, either from the API or from the
    // cached version of the project.  Cache right now is stored in localStorage with the projectId as the key.
    componentWillMount() {

        let projectApi = () => {

                const API_KEY = `TI85bF0ji07ftRZFp8hJxLSUC8hzvo8q`,
                    BEHANCE_URL = `https://api.behance.net/v2/projects/${ this.state.projectId }?client_id=${API_KEY}`;

                $.ajax( {
                    url      : BEHANCE_URL,
                    type     : "get",
                    dataType : "jsonp",
                } ).done( ( response ) => {

                    this.setState( { current_project : response, } );
                    localStorage.setItem( this.state.projectId, JSON.stringify( this.state.current_project ) );

                } ).fail( ( error ) => {

                    console.log( "Ajax request fails" );
                    console.log( error );

                } );

            },

            projectCache = () => {

                this.setState( { current_project : localStorage.getItem( this.state.projectId ), } );
                console.log( 'DEBUG :: Project set from the localStorage cache' );

            };

        // Check to see if the project item exists in the localStorage.  If it does, read from the cache.
        if ( localStorage.getItem( this.state.projectId ) &&
            new Date(
                JSON.parse( localStorage.getItem( 'projects' ) ).projectCache
            ).getDate() === this.state.today.getDate() ) {

            console.log( 'DEBUG :: Retrieve the project from the cache' );
            projectCache();

        } else {

            projectApi();
            console.log( 'DEBUG :: Get the project from the Behance API' );

        }

    }

    render() {

        let project = {};

        // Once we have the projectId we know the AJAX request finished, so we can continue.
        if ( this.state.current_project ) {

            project = this.state.current_project;

        }

        return (
            <section>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={'SlideIn'}>

                    <article className="col-sm-4 page-article">
                        { project.id }
                        {/*<header>*/}
                            {/*<h1 className="type-title">*/}
                                {/*{this.state.project.projectName}*/}
                            {/*</h1>*/}
                            {/*<h2 className="type-subtitle">*/}
                                {/*{this.state.project.projectTag}*/}
                            {/*</h2>*/}
                        {/*</header>*/}
                        {/*{this.state.project.summary.map((paragraph) => {*/}

                            {/*return <p key={i++}>{paragraph}</p>*/}

                        {/*})}*/}
                    </article>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={'FadeIn'}>

                    <aside className="col-sm-8 aside-image">
                        {/*<span className="image"*/}
                              {/*style={{backgroundImage: this.state.project.images[0].src,}}/>*/}
                    </aside>
                </ReactCSSTransitionGroup>
            </section>
        );

    }

};

export default Project;
