import React, {Component} from 'react';
import classnames from 'classnames';

export class MovieTabs extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        // if(nextProps.sort_by !== this.props.sort_by) {
        //     return true;
        // } else {
        //     return false;
        // }

        // Эта запись равнозначна записи в комментарии выше.
        return nextProps.sort_by !== this.props.sort_by;
    }

    render() {
        const {sort_by, updateSortBy} = this.props;

        // const handleClick = value => {
        //     return () => {
        //         updateSortBy(value);
        //     };
        // };

        // Эта запись равнозначна записи в комментарии выше.
        const handleClick = value => () => {
            updateSortBy(value);
        };

        const getClassLink = value => {
            // Не уверен что это правильное решение, но ничего другого не смог придумать.
            return classnames('btn nav-link', {'active': sort_by === value});
            // return `btn nav-link ${sort_by === value ? "active" : ""}`
        };

        return (
            <ul className="tabs nav nav-pills justify-content-center">
                <li className="nav-item">
                    <div
                        // className={`nav-link ${
                        //     sort_by === "popularity.desc" ? "active" : ""
                        // }`}
                        className={getClassLink("popularity.desc")}
                        onClick={handleClick("popularity.desc")}
                    >
                        Popularity desc
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        // className={`nav-link ${
                        //     sort_by === "revenue.desc" ? "active" : ""
                        // }`}
                        className={getClassLink("revenue.desc")}
                        onClick={handleClick("revenue.desc")}
                    >
                        Revenue desc
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        // className={`nav-link ${
                        //     sort_by === "vote_average.desc" ? "active" : ""
                        // }`}
                        className={getClassLink("vote_count.desc")}
                        onClick={handleClick("vote_count.desc")}
                    >
                        Vote count desc
                    </div>
                </li>
            </ul>
        )
    }
}
