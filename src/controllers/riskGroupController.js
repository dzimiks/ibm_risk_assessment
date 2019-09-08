module.exports.api = (req, res) => {
    const riskLevelLabels = ['No Risk', 'Low Risk', 'Medium Risk', 'High Risk'];
    const randLebel = riskLevelLabels[Math.floor(Math.random() * 2)];
    let randLebel2 = randLebel;
    let randLebel3 = randLebel;

    if (randLebel === 'No Risk') {
        randLebel2 = riskLevelLabels[Math.floor(Math.random() * 2)];
    } else {
        randLebel2 = riskLevelLabels[Math.floor(Math.random() * 2 + 1)];
    }

    if (randLebel2 === 'Low Risk') {
        randLebel3 = riskLevelLabels[Math.floor(Math.random() * 2 + 1)];
    } else if (randLebel2 === 'Medium Risk') {
        randLebel3 = riskLevelLabels[Math.floor(Math.random() * 2 + 2)];
    } else {
        randLebel3 = riskLevelLabels[Math.floor(Math.random() * 2 + 2)];
    }

    const riskGroups = {
        kupacID: req.url.split('/').pop(),
        iznos500000: 'No Risk',
        iznos2000000: randLebel,
        iznos4000000: randLebel2,
        iznos6000000: randLebel3
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