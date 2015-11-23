var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <form className="jobform-background" onSubmit={this.onFormSubmitted}>
                <h2>Post your job</h2>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref="title"/>
                <label htmlFor="company-name">Company Name</label>
                <input type="text" id="company-name" ref="company"/>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" ref="location"/>
                <label htmlFor="description">Description</label>
                <textarea name="textarea" id="description" ref="description"/>
                <label htmlFor="title">Tags</label>
                <input type="text" id="title" />
                <div className="jobform-button-container">
                    <button className="submit-button">Submit Job</button>
                </div>
            </form>
        );
    },
    onFormSubmitted: function(e) {
        e.preventDefault();
        var newJob = this.props.job.add({
            title: this.refs.title.getDOMNode().value,
            description: this.refs.description.getDOMNode().value,
            location: this.refs.location.getDOMNode().value,
            company: this.refs.company.getDOMNode().value,
        });
        this.props.router.navigate('details/'+newJob.cid, {trigger: true});
    }
});

