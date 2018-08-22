import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageFooter from './partials/Footer';

/**
 * Home View
 *
 * The first view the user will encounter.  Includes no sub-view parts.
 *
 * @returns {html}
 * @constructor
 */
const Home = () => {

    return (
        <section>
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'SlideIn'}
            >
                <article className="col-sm-4 page-article">
                    <header>
                        <h1 className="type-title">
                            I'm Jason Fukura
                        </h1>
                        <h2 className="type-subtitle">
                            User Experience Designer &amp; Web Developer
                        </h2>
                    </header>
                    <p>
                        I craft more than sleek-looking wireframes. I’m a true User Experience designer and web
                        developer. Recently out of Udacity with my Web Developer certification to show that what I have
                        been doing for years, now I have the education to back it up. I love working with Frameworks,
                        libraries, test-driven and object-oriented MV* code, but I’m no stranger to making pixel-perfect
                        designs in Fireworks, Sketch and Illustrator. I avoid using Photoshop for web work—ask me why.
                    </p>
                    <p>
                        As a coffee-addicted, scotch-snob father of three, there’s little time in my day for things
                        other than work and kids. But when I find those moments, I like them outside, working with wood,
                        taking pictures or tending my other full-time job: my house.
                    </p>
                    <p>
                        Thanks for taking a look, drop me a line at:
                        &nbsp;<a className="link" href="mailto:jason@jasonfukura.com">jason@jasonfukura.com</a>
                    </p>
                </article>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={'FadeIn'}
            >
                <aside className="col-sm-8 aside-image hidden-sm">
                    <span className="image" style={{ backgroundImage : "url(http://htmlcolorcodes.com/assets/images/" +
                    "html-color-codes-color-tutorials-hero-00e10b1f.jpg)", }}/>
                </aside>
            </ReactCSSTransitionGroup>
            <PageFooter/>
        </section>
    );

};

export default Home;
