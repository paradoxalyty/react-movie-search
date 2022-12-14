import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../../api/api";
import queryString from "query-string";

export default class MoviesList extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
        };
    }

    getMovies = (filters, page) => {
        const { sort_by, primary_release_year, with_genres } = filters;
        const queryStringParams = {
            api_key: API_KEY_3,
            language: "en-US",
            sort_by: sort_by,
            page: page,
            primary_release_year: primary_release_year,
        };

        if (with_genres.length > 0) queryStringParams.with_genres = with_genres.join(",");

        const link = `${API_URL}/discover/movie?${queryString.stringify(
            queryStringParams
        )}`;

        /*  const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}&with_genres=${with_genres}`; */

        fetch(link)
            .then((responce) => {
                return responce.json();
            })
            .then((data) => {
                this.props.onChangePage({
                    page: data.page,
                    total_pages: data.total_pages,
                });
                this.setState({
                    movies: data.results,
                    genresList: data.genres,
                });
            });
    };

    componentDidMount() {
        this.getMovies(this.props.filters, this.props.page);
    }

    /*     UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.filters.sort_by !== this.props.filters.sort_by) {
            this.getMovies(nextProps.filters);
        }
    } */

    componentDidUpdate(prevProps) {
        if (this.props.filters.sort_by !== prevProps.filters.sort_by) {
            this.props.onChangePage(1);
            this.getMovies(this.props.filters, 1);
        }

        if (this.props.page !== prevProps.page) {
            this.getMovies(this.props.filters, this.props.page, this.props.with_genres);
        }

        if (
            this.props.filters.primary_release_year !==
            prevProps.filters.primary_release_year
        ) {
            this.getMovies(this.props.filters, this.props.page, this.props.with_genres);
        }

        if (this.props.filters.with_genres !== prevProps.filters.with_genres) {
            this.getMovies(this.props.filters, this.props.page, this.props.with_genres);
        }
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="row">
                {movies.map((movie) => {
                    return (
                        <div key={movie.id} className="col-sm-12 col-md-6 mb-4">
                            <MovieItem item={movie} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
