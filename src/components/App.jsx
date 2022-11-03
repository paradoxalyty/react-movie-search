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

    onChangePage = (page) => {
        this.setState({
            // page: page
            page,
        });
    };

    render() {
        const { filters, page } = this.state;

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                                <h3>Filters:</h3>
                                <Filters
                                    page={page}
                                    filters={filters}
                                    onChangeFilters={this.onChangeFilters}
                                    onChangePage={this.onChangePage}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
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
