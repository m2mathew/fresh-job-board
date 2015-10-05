var React = require('react');
var moment = require('moment');

var JobFormComponent = require('./JobFormComponent.js');
var JobTipsComponent = require('./JobTipsComponent.js');

var JobModel = require('../models/JobModel.js');

var currentDate = moment();

module.exports = React.createClass({
    render: function() {
        return (
            <section>
                <div className="add-job-box">
                    <JobFormComponent />
                    <JobTipsComponent />
                </div>
            </section>
        );
    }
});
