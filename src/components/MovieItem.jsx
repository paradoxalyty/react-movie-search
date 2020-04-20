import React, {Component} from 'react';

export class MovieItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            willWatch: false,
        };
    }

    render() {
        const {
            movie,
            removeMovie,
            addMovieToWillWatch,
            removeMovieFromWillWatch
        } = this.props;

        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
                <div className="card-body d-flex flex-wrap flex-column align-items-start">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex flex-wrap align-items-center">
                    </div>
                    <p className="mb-2">Rating: {movie.vote_average}</p>

                    <button className="mb-2" onClick={removeMovie.bind(null, movie)}>Delete movie</button>

                    {/*{this.state.willWatch ? (
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.setState({
                                        willWatch: false,
                                    });
                                    removeMovieFromWillWatch(movie);
                                }}
                            >
                                Remove Will Watch
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    this.setState({
                                        willWatch: true,
                                    });
                                    addMovieToWillWatch(movie);
                                }}
                            >
                                Add Will Watch
                            </button>
                        )}*/}

                    {/*
                        Попытался из двух кнопок сделать одну, но в консоли вылетает вот эта строка - ./src/components/MovieItem.jsx
                        Line 70:33:  Nested block is redundant  no-lone-блочкс
                        Не знаю что с этим делать (((
                        */}

                    <button
                        type="button"
                        className={this.state.willWatch ? "btn align-self-end btn-success" : "btn align-self-end btn-secondary"}
                        onClick={() => {
                            this.setState({
                                willWatch: !this.state.willWatch,
                            });
                            // eslint-disable-next-line
                            {
                                this.state.willWatch ? removeMovieFromWillWatch(movie) : addMovieToWillWatch(movie)
                            }
                        }}
                    >
                        {this.state.willWatch ? "Remove Will Watch" : "Add Will Watch"}
                    </button>
                </div>
            </div>
        );
    }
}