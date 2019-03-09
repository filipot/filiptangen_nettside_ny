import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import logo from '../logo.svg';
/**
 *            transitionAppear={true}
 transitionLeave={true}
 transitionAppearTimeout={2000}
 transitionEnterTimeout={2000}
 transitionLeaveTimeout={2000}
 transitionName="test"
 </CSSTransitionGroup>
 <CSSTransitionGroup


 >

 */

const PageShell = Page => {
    return props =>
        <div className="page">

                <Page {...props} />

        </div>;
};

/*
transitionAppear={true}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={props.match.path === '/thanks' ? 'SlideIn' : 'SlideOut'}*/

export default PageShell;
