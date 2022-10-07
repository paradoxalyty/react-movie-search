import React from "react";

export default class Filters extends React.Component {
    render() {
        const {
            filters: { sort_by },
            page,
            onChangeFilters,
            onChangePage,
        } = this.props;

        return (
            <form className="mb3">
                <div className="form-group">
                    <label htmlFor="sort_by">Sort</label>
                    <select
                        id="sort_by"
                        className="form-control"
                        name="sort_by"
                        value={sort_by}
                        onChange={onChangeFilters}
                    >
                        <option value="popularity.desc">Popularity descending</option>
                        <option value="popularity.asc">Popularity ascending</option>
                        <option value="vote_average.desc">Rating descending</option>
                        <option value="vote_average.asc">Rating ascending</option>
                    </select>
                </div>

                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-light"
                        disabled={page === 1}
                        onClick={() => {
                            onChangePage(page - 1);
                        }}
                    >
                        &laquo; Prev
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                            onChangePage(page + 1);
                        }}
                    >
                        Next &raquo;
                    </button>
                </div>
            </form>
        );
    }
}
