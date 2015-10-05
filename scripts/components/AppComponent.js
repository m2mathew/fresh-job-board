var React = require('react');
var Backbone = require('backbone');

var NavigationComponent = require('./NavigationComponent.js');
var JobListPageComponent = require('./JobListPageComponent.js');
var AddJobPageComponent = require('./AddJobPageComponent.js');
var JobDetailsPageComponent = require('./JobDetailsPageComponent.js');

var JobCollection = require('../collections/JobCollection');
var CompanyCollection = require('../collections/CompanyCollection');

var companies = require('../data/company.js');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            pageName: 'list',
            id: null
        };
    },
    componentWillMount: function() {
        var self = this;
        this.jobs = new JobCollection();
        this.jobs.fetch();

        this.companies = new CompanyCollection();
        this.companies.fetch();

        var Router = Backbone.Router.extend({
            routes: {
                '': 'list',
                'list': 'list',
                'add': 'add',
                'details/:id': 'details'
            },
            list: function() {
                self.setState({
                    pageName: 'list'
                });
            },
            add: function() {
                self.setState({
                    pageName: 'add'
                });
            },
            details: function() {
                self.setState({
                    pageName: 'details'
                });
            }
        });
        var r = new Router();
        Backbone.history.start();
    },
    render: function() {
        var pageComponent = null;

        if(this.state.pageName === 'list') {
            pageComponent = <JobListPageComponent jobs={this.jobs} companies={companies} />;
        }
        else if(this.state.pageName === 'details') {
            pageComponent = <JobDetailsPageComponent jobs={this.jobs} companies={companies} />;
        }
        else if(this.state.pageName === 'add') {
            pageComponent = <AddJobPageComponent jobs={this.jobs} companies={companies} />;
        }

        return (
            <div>
                <NavigationComponent />

                <div>
                    {pageComponent}
                </div>
            </div>
        );
    }
});
