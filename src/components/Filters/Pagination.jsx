import React from "react";

export default class Pagination extends React.PureComponent {
    nextPage = () => {
        this.props.onChangePage({
            page: this.props.page + 1,
            total_pages: this.props.total_pages,
        });
    };

    prevPage = () => {
        this.props.onChangePage({
            page: this.props.page - 1,
            total_pages: this.props.total_pages,
        });
    };

    render() {
        const { page, total_pages } = this.props;

        return (
            <nav className="form-group d-flex justify-content-between align-items-center flex-wrap">
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn btn-light"
                        disabled={page === 1}
                        onClick={this.prevPage}
                    >
                        &laquo; Prev
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        disabled={page === total_pages}
                        onClick={this.nextPage}
                    >
                        Next &raquo;
                    </button>
                </div>
                <span>
                    {page} of {total_pages}
                </span>
            </nav>
        );
    }
}
