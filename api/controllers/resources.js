'use strict';

module.exports = {
    resources: resources
};

function resources(req, res) {
    var response = ['performance', 'transactions', 'activity', 'device', 'transaction-enquiry', 'transaction-status'];
    
    res.json(response);
}