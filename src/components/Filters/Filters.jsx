import React from "react";
import SortBy from "./SortBy";
import PrimaryReleaseYear from "./PrimaryReleaseYear";
import Genres from "./Genres";

export default class Filters extends React.Component {
    render() {
        const {
            filters: { sort_by, primary_release_year, with_genres },
            page,
            onChangeFilters,
            onChangePage,
        } = this.props;

        return (
            <form className="mb3">
                <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />

                <PrimaryReleaseYear
                    primary_release_year={primary_release_year}
                    onChangeFilters={onChangeFilters}
                />

                <Genres with_genres={with_genres} onChangeFilters={onChangeFilters} />

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
