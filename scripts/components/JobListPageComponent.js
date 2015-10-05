var React = require('react');

var FilterBoxComponent = require('./FilterBoxComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var InformationBoxComponent = require('./InformationBoxComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');

module.exports = React.createClass({
    componentWillMount: function() {
        var self = this;
        this.props.jobs.on('sync', function() {
            self.forceUpdate();
        });
    },
    render: function() {
        var jobRows = this.props.jobs.map(function(job) {
            return (
                <JobRowComponent job={job} key={job.cid} />
            );
        });

        var companyInfo = this.props.companies.map(function(company) {
            var firstCompany = this.props.company.find(function(comp) {
                return (comp[0]);
            });

            return (
                <CompanyBoxComponent company={firstCompany} key={company.cid} />
            );
        });

        return (
            <div>
                <div>
                    <FilterBoxComponent />
                    {jobRows}
                </div>
                <div>
                    <InformationBoxComponent />
                    {companyInfo}
                </div>
            </div>
        );
    }
});
