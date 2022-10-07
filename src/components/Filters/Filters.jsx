import React from "react";
import SortBy from "./SortBy";

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
                <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />

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
