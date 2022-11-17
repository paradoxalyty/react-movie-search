import React from "react";
export default class PrimaryReleaseYear extends React.PureComponent {
    static defaultProps = {
        options: [
            {
                label: "2022",
                value: "2022",
            },
            {
                label: "2021",
                value: "2021",
            },
            {
                label: "2020",
                value: "2020",
            },
            {
                label: "2019",
                value: "2019",
            },
        ],
    };

    render() {
        const { primary_release_year, onChangeFilters, options } = this.props;

        return (
            <div className="form-group">
                <label htmlFor="primary_release_year">Release Year :</label>
                <select
                    id="primary_release_year"
                    className="form-control"
                    name="primary_release_year"
                    value={primary_release_year}
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
