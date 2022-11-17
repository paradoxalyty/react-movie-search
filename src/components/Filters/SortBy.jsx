import React from "react";
export default class SortBy extends React.PureComponent {
    static defaultProps = {
        options: [
            {
                label: "Popularity descending",
                value: "popularity.desc",
            },
            {
                label: "Popularity ascending",
                value: "popularity.asc",
            },
            {
                label: "Rating descending",
                value: "vote_average.desc",
            },
            {
                label: "Rating ascending",
                value: "vote_average.asc",
            },
        ],
    };

    render() {
        const { sort_by, onChangeFilters, options } = this.props;

        return (
            <div className="form-group">
                <label htmlFor="sort_by">Sort by:</label>
                <select
                    id="sort_by"
                    className="form-control"
                    name="sort_by"
                    value={sort_by}
                    onChange={onChangeFilters}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}
