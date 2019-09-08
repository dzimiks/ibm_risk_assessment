module.exports.api = (req, res) => {
    const riskLevelLabels = ['No Risk', 'Low Risk', 'Medium Risk', 'High Risk'];

    const riskGroups = {
        kupacID: req.url.split('/').pop(),
        iznos500000: riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)],
        iznos2000000: riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)],
        iznos4000000: riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)],
        iznos6000000: riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)]
    };

    res.send(riskGroups);
};

module.exports.home = (req, res) => {
    res.render('index', {});
};

// const mongoose = require('mongoose');
// const RiskGroup = mongoose.model('RiskGroup');
//
// /**
//  * Get risk group by id.
//  *
//  * @param req
//  * @param res
//  */
// module.exports.index = (req, res) => {
//     const query = RiskGroup.findOne({'id': req.params.id}, (err, docs) => {
//         if (!err) {
//             console.log('Risk Group imported!');
//             console.log('Risk Group:', docs);
//         } else {
//             throw err;
//         }
//     });
//
//     query.exec((err, riskGroup) => {
//         if (err) {
//             console.log(err);
//         }
//
//         console.log('Risk Group:', riskGroup);
//
//         res.render('/', {
//             riskGroup: riskGroup
//         });
//     });
// };
//
// /** Get all risk groups.
//  *
//  * @param req
//  * @param res
//  */
// module.exports.riskGroups = (req, res) => {
//     const query = RiskGroup.find({}, (err, docs) => {
//         if (!err) {
//             console.log('Risk Group imported!');
//         } else {
//             throw err;
//         }
//     });
//
//     query.exec((err, riskGroups) => {
//         if (err) {
//             console.log(err);
//         }
//
//         res.send(riskGroups);
//     });
// };