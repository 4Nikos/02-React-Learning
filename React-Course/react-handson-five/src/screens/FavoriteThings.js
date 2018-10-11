import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
    <div>
        <h2>Favorite Items</h2>
        <ul>
            <li>
                <Link to={`${match.url}/Lexus is my favorite car`}>Car</Link>
            </li>
            <li>
                <Link to={`${match.url}/Well grilled Steak is one of my top foods`}>Food</Link>
            </li>
            <li>
                <Link to={`${match.url}/Dirty Rotten Scoundrels movie never gets old`}>Movie</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Things} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Click on the links above to learn about my favorite things </h3>}
        />
    </div>
);

export default FavoriteThings;