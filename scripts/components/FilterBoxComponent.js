var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <form className="filter-box">
                <div className="filter-left">
                    <label className="filter-search-label" for="keyword-input">Keywords</label>
                    <input className="filter-search-input-keywords" type="text" name="keyword-input" />
                </div>
                <div className="filter-right">
                    <label className="filter-search-label" for="keyword-input">Location</label>
                    <input className="filter-search-input-location" type="text" name="keyword-input" />
                </div>
                <div className="filter-button-container">
                    <button className="filter-button">Search</button>
                </div>
            </form>
        );
    }
});
