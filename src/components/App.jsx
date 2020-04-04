import React, {Component} from 'react';
// import {moviesData} from '../moviesData';
import {MovieItem} from './MovieItem';
import {API_URL, API_KEY_3} from '../api/api';
import {MovieTabs} from './MovieTabs';
import {Pagination} from './Pagination';
import {MoviesWillWatch} from "./MoviesWillWatch";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
            page: 1,
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.sort_by !== this.state.sort_by) {
            this.getMovies();
        }

        if (prevState.page !== this.state.page) {
            this.getMovies();
            console.log(this.state.page);
        }
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    movies: data.results,
                })
            })
    };

    removeMovie = (movie) => {
        const updateMovies = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });

        this.setState({
            movies: updateMovies,
        });

        this.removeMovieFromWillWatch(movie);
    };

    addMovieToWillWatch = movie => {

        // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
        // updateMoviesWillWatch.push(movie);
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie]; // запись равнозначна верхним двум строкам

        this.setState({
            moviesWillWatch: updateMoviesWillWatch,
        })
    };

    removeMovieFromWillWatch = (movie) => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
            return item.id !== movie.id;
        });

        this.setState({
            moviesWillWatch: updateMoviesWillWatch,
        });
    };

    updateSortBy = value => {
        this.setState({
            sort_by: value,
        });
    };

    changePage = (num) => {
        let currentPage = this.state.page;
        let nextPage;

        if (currentPage === 1 && num === -1) {
            nextPage = 500;
        } else if (currentPage === 500 && num === 1) {
            nextPage = 1;
        } else {
            nextPage = currentPage + num;
        }

        this.setState({
            page: nextPage,
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs
                                    sort_by={this.state.sort_by}
                                    updateSortBy={this.updateSortBy}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies.map((movie) => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem
                                            movie={movie}
                                            removeMovie={this.removeMovie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="row">
                            <div className="m-auto">
                                <Pagination changePage={this.changePage}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <MoviesWillWatch moviesWillWatch={this.state.moviesWillWatch}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
