var React = require('react');

var JobDetailsComponent = require('./JobDetailsComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <JobDetailsComponent />
                <CompanyBoxComponent />
            </div>
        );
    }
});
