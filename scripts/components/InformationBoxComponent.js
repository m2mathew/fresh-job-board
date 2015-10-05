var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="info-box-container">
                <div className="info-box-title">
                    Looking for a Job?
                </div>
                <div>
                    <span>Create a fresh jobs profile and </span><strong>let employers come to you.</strong>
                </div>
                <div>
                    <ul>
                        <li>Employers search our database and contact you</li>
                        <li>Import easily from LinkedIn</li>
                        <li>Link to Stack Overflow, GitHub, CodePlex, and more</li>
                    </ul>
                </div>
                <div className="info-button-container">
                    <button className="info-button">Create a Profile</button>
                </div>
            </div>
        );
    }
});
