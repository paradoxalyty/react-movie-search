import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            filters: {
                sort_by: "popularity.desc",
                primary_release_year: "2022",
                with_genres: [],
            },
            page: 1,
            total_pages: "",
        };
    }

    onChangeFilters = (event) => {
        const newFilters = {
            ...this.state.filters,
            [event.target.name]: event.target.value,
        };
        this.setState({
            filters: newFilters,
        });
    };

    onChangePage = ({ page, total_pages = this.state.total_pages }) => {
        this.setState({
            // page: page
            page,
            total_pages,
        });
    };

    render() {
        const { filters, page, total_pages } = this.state;

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-sm-12 col-lg-4">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                                <h3>Filters:</h3>
                                <Filters
                                    page={page}
                                    total_pages={total_pages}
                                    filters={filters}
                                    onChangeFilters={this.onChangeFilters}
                                    onChangePage={this.onChangePage}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <MoviesList
                            filters={filters}
                            page={page}
                            onChangePage={this.onChangePage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
