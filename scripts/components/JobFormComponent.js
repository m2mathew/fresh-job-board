var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <form className="jobform-background">
                <h2>Post your job</h2>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
                <label htmlFor="company-name">Company Name</label>
                <input type="text" id="company-name" />
                <label htmlFor="location">Location</label>
                <input type="text" id="location" />
                <label htmlFor="description">Description</label>
                <textarea name="textarea" id="description"/>
                <label htmlFor="title">Tags</label>
                <input type="text" id="title" />
                <div className="jobform-button-container">
                    <button className="submit-button">Submit Job</button>
                </div>
            </form>
        );
    }
});

