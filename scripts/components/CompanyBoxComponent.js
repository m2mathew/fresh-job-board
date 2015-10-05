var React = require('react');

var CompanyModel = require('../models/CompanyModel.js');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="company-box-container">

                <div className="company-box-title">
                    Featured Company
                </div>

                <div className="feature-pic-container">
                    <img className="feature-pic" src={this.props.company.get('companyPicture')} alt="Feature Picture" />
                </div>

                <div className="logo-pic-container">
                    <img className="logo-pic" src={this.props.company.get('companyLogo')} alt="Logo Picture" />
                </div>

                <div className="company-box-info-container">
                    <div className="company-box-name">
                        <a href="#" >{this.props.company.get('companyName')}</a>
                    </div>
                    <div className="company-box-location">{this.props.company.get('companyLocation')}
                    </div>
                </div>
            </div>
        );
    }
});
