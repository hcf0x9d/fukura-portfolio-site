import React, {Component} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as $ from "jquery";

class Project extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            today     : new Date(),
            projectId : props.match.params.projectId,
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
                    // localStorage.setItem( 'projects', JSON.stringify( this.state ) );

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

    render() {

        if ( this.state.projects ) {

            const list = JSON.parse( this.state.projects ),
                project = list.projects.map( ( item ) => {

                if ( String( item.id ) === this.state.projectId ) {

                    console.log( item )

                }

            } );

        }

        let i = 0;

        return (
            <section>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={'SlideIn'}>

                    <article className="col-sm-4 page-article">
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
