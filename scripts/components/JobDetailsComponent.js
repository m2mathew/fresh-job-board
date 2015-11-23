var React = require('react');

var JobModel = require('../models/JobModel.js');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="job-details-container">
                <div className="job-details-title">
                    {this.props.job.get('title')}
                </div>
                <div>
                    <div className="job-row-location">
                        {this.props.job.get('jobLocation')}
                    </div>
                </div>

            </div>
        );
    }
});

