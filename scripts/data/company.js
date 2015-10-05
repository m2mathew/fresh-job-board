var CompanyCollection = require('../collections/CompanyCollection');

module.exports = new CompanyCollection([
    {
        id: 1,
        companyName: 'Samurai Poet Warriors',
        companyLocation: 'Fields of Valor',
        contactPerson: 'Dmitri Shostakovich',
        contactEmail: 'dsch@spw.com',
        companyLogo: '../../images/featured-logo.jpg',
        companyPicture: '../../images/featured.jpg',
        numberOfEmployess: 19
    },
    {
        id: 2,
        companyName: 'Vintage Valkyries',
        companyLocation: 'Artisanal District',
        contactPerson: 'Karl van Höet',
        contactEmail: 'Karl@vv.com',
        companyLogo: '../../images/featured-logo.jpg',
        companyPicture: '../../images/featured.jpg',
        numberOfEmployess: 21
    }
]);
