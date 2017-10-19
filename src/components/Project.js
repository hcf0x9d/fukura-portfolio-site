import React, {Component} from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import JSON from '../portfolio.json';

class Project extends Component {

    constructor(props) {

        super(props);

        let findProject = (obj) => {

            return obj.projectSlug === window.location.href.substring(
                window.location.href.indexOf("/portfolio/"))

        };

        this.state = {

            project: JSON.find(findProject),

        }

    }

    render() {

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
                        <header>
                            <h1 className="type-title">
                                {this.state.project.projectName}
                            </h1>
                            <h2 className="type-subtitle">
                                {this.state.project.projectTag}
                            </h2>
                        </header>
                        {this.state.project.summary.map((paragraph) => {

                            return <p key={i++}>{paragraph}</p>

                        })}
                    </article>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName={'FadeIn'}>

                    <aside className="col-sm-8 aside-image">
                        <span className="image"
                              style={{backgroundImage: this.state.project.images[0].src,}}/>
                    </aside>
                </ReactCSSTransitionGroup>
            </section>
        );

    }

};

export default Project;
