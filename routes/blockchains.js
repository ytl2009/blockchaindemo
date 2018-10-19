var express = require('express');
var router = express.Router();
var async = require('async');

/* GET home page. */
router.get('/', function (req, res, next) {
    var peers = [{title: 'A'}, {title: 'B'}, {title: 'C'}];
    var blocks = [];

    console.log(peers);
    peers.forEach(function (peer, index) {
        var blockData = [];
        index += 1;
        blockData.push({
            block: 1,
            chain: index,
            nonce: 16119,
            coinbasevalue: '100.00',
            coinbaseto: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
            txs: [],
            previous: '0000000000000000000000000000000000000000000000000000000000000000',
            txCount: 0
        });
        blockData.push({
            block: 2,
            chain: index,
            nonce: 11295,
            coinbasevalue: '100.00',
            coinbaseto: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
            txs: [{
                value: '10.00',
                from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
                to: '04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd',
                sig: '3046022100bcfe74e2ee8972367dda52a8f90008800ad10fb14b30431cd58f057c418b37a10221009765c92497bf989f7c89e95d6e1a3f72a39dfdae13b4fb091f0f181195e6189e'
            }, {
                value: '20.00',
                from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
                to: '04997ac426a5c3c0ec9b51732435f90ebb4cf06aca4bfdb778865af0110f3931660d8b85297d59382c81eb6c7ae7c100af55800f15dad1fc72122139ba02e5d740',
                sig: '304502210089cbf8f4bc854fb010c3bb7747f8c4c010fd02934d7c3b6d901cae60d05c13fb02203efa6dc2f0741aed03435f0f54e41faf946face98071f05b8078b4ea6b1b3ba3'
            }, {
                value: '15.00',
                from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
                to: '042222d7af343abd780add9dd7a0f554a1d6b127bc6f7ec28c5eef97d25af83028e89011559daa71dfcc7e2175433a1a6ef605715eba07a8a942c7088f8050a714',
                sig: '3045022036cfd31dbdc400993a612bf9ba9c897a75b4578c8eff5221ccd6de9e506d739c022100d23fcfc19e57a8ea6fad1d698b86c5e4818dde55781d001f7e81ea9b9949cbe1'
            }, {
                value: '15.00',
                from: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
                to: '041c377677bb697329b8dbeb5811b026d532730ad90ad7357fd812183ec01b766d7a4ee33c6a85b84d44fa1c3c59377c660f0076c39c563d9a19005a56ee1d1336',
                sig: '3045022036cfd31dbdc400993a612bf9ba9c897a75b4578c8eff5221ccd6de9e506d739c022100d23fcfc19e57a8ea6fad1d698b86c5e4818dde55781d001f7e81ea9b9949cbe1'
            }],
            previous: '00006908f507a101e89544498978e9bd2e35462b91d86ef13510685227912e77',
            txCount: 4
        });
        blockData.push({
            block: 3,
            chain: index,
            nonce: 78864,
            coinbasevalue: '100.00',
            coinbaseto: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
            txs: [{
                value: '10.00',
                from: '042222d7af343abd780add9dd7a0f554a1d6b127bc6f7ec28c5eef97d25af83028e89011559daa71dfcc7e2175433a1a6ef605715eba07a8a942c7088f8050a714',
                to: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6',
                sig: '304402206866c204f14735649c4d61a955afedc1a9fcd1ef2314804629381b3a62ad97970220258000d878ae0ef5e424b2673d57edcee3fd83caa589608a114b62cc3d17d48b'
            }, {
                value: '5.00',
                from: '041c377677bb697329b8dbeb5811b026d532730ad90ad7357fd812183ec01b766d7a4ee33c6a85b84d44fa1c3c59377c660f0076c39c563d9a19005a56ee1d1336',
                to: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6',
                sig: '3046022100b2a683ef250d79fbb600204f56e11436ef742a9c306a5ac5b973f5c240de9a310221009d1db1de3a192237d2461ab9649f116d0f176b4e7b4d653884488a21aabc1c10'
            }, {
                value: '20.00',
                from: '04997ac426a5c3c0ec9b51732435f90ebb4cf06aca4bfdb778865af0110f3931660d8b85297d59382c81eb6c7ae7c100af55800f15dad1fc72122139ba02e5d740',
                to: '040b4c84f02bfec488a8a861267f8221646e1b6f6701504ad39d4ee82248fa7b5152536ea36bf47ee0812186a13311a2c0cfc24f557dfa38b2048139be45d7ac4c',
                sig: '3044022018296b3a4df98af5fc2f0b0e009730ffe963e4a62d8bacea8e1ceb7e98d11057022074e5fb5c78c6914e3947e5701bd9383cb6721f40e38e3f56fa354424f9cae5d1'
            }],
            previous: '00007dcbbca72607746138920c2213f34d2138b5bf5fa80bcb26b4b9af51e214',
            txCount: 3
        });
        blockData.push({
            block: 4,
            chain: index,
            nonce: 63022,
            coinbasevalue: '100.00',
            coinbaseto: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310',
            txs: [{
                value: '15.00',
                from: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6',
                to: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090',
                sig: '3045022100fdfc2534ba49c1c3f947e4d29ac5f54442ce9e03f3dc8dd285260d7a7ad0f628022038ed9c763227aac7c32a3861ba52a5b063d8ef267a25944fe4a05caf9df2deb6'
            }, {
                value: '5.00',
                from: '042222d7af343abd780add9dd7a0f554a1d6b127bc6f7ec28c5eef97d25af83028e89011559daa71dfcc7e2175433a1a6ef605715eba07a8a942c7088f8050a714',
                to: '041c377677bb697329b8dbeb5811b026d532730ad90ad7357fd812183ec01b766d7a4ee33c6a85b84d44fa1c3c59377c660f0076c39c563d9a19005a56ee1d1336',
                sig: '304402200b8d07fe4949a8eb958262d1fe579a5f0f96c2b4e1aa97a41ae0102abe9bb5d502205d3ac871c5ae413e4e2d84a253d8fe84ce1074cf9fbc22d19a7c7c0ebc730a65'
            }, {
                value: '8.00',
                from: '04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd',
                to: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6',
                sig: '30440220665c64c85982f75d78aa9957a6a805ed4999f8ad183d4cea7f7c5074a865d956022032f1a3235f2a9f953fb1f52234ff733e347a10cdd3ceb3d16a57ebe47517b31d'
            }],
            previous: '0000a9e2a5d6100c1fa23580671cc4f3bca3c58180d0f55e49f9e49a389f2777',
            txCount: 3
        });
        blockData.push({
            block: 5,
            chain: index,
            nonce: 7355,
            coinbasevalue: '100.00',
            coinbaseto: '04cc17dc129331c1cbb9c32cf4dc2dde4a5144e26c09b7430685c227176aeed05c74cf9d581da9d872cff53e67a8b28c53dfcf197dc4148e476eff4c3abfb3eebd',
            txs: [{
                value: '2.00',
                from: '04d4080959e3795bc74a50fe606c1418a0a2a1c2c16e39f5c4a08b363a9c0611fa732be61f13b3f270cc534d3815dacced5d344b86a9aa302390c3399b5238bce6',
                to: '04d84dae793a82537d7738d2eabcf744062f3446699b29817aa6de46d973a442f096770e62d48864a9b488aef677d747f74a7ebd3dc36f4e52b8dcaef340caabf8',
                sig: '304502207fcc9d79c7894a4fa246f3b1ee8b21a40ae7f195e8f08ffe253d163c1da95b960221009c62132fcee3567c7d272d7e4aab8abc90ab5e109d60fc4ca94214236325290e'
            }, {
                value: '6.00',
                from: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090',
                to: '043e17e5095e878b0fbf63f4c7de037ed0e098d13ac7b8891c5d7238edc9dea474ce7df69a643edf2cccb7b9cf71701e1825e5ceb840764efb3fc7b6e7f433be41',
                sig: '30450220454632e38948141be2c1b75e6c08b2b98dfc6e95d1691cdd6cd0a31e85f7437c022100a151c010cdff3c5e6022e7275c525c33cd097bee56d0ade6459a4e62ff45f3eb'
            }, {
                value: '4.00',
                from: '0451d4a9c44a2dec79ad3e26ab25223b78d9c9e5150cefe53e79f3fefed4f23b36f02cf51a74c2f44916c571560b5e3f555ee1bb339a64ef707825340e3ed37090',
                to: '04020d6fe7aeabd3a00d725f542c35d8b345fe1c884f3af420987ca51c73580e4b4c42f9838f254d142d7024f556d167ce2d0ddf7e9576ebd9136368542f8ac5a2',
                sig: '3046022100e5e8cb0d2ac042cc8c026c52622a191780da1bdca41ebe2b6190fd117c921831022100d407c041d28b801e679918c70704d0aa4649957cdde5a582f29684219773c7d7'
            }, {
                value: '9.95',
                from: '040b4c84f02bfec488a8a861267f8221646e1b6f6701504ad39d4ee82248fa7b5152536ea36bf47ee0812186a13311a2c0cfc24f557dfa38b2048139be45d7ac4c',
                to: '04148850d1edbd665a7a797c69f8015aa84e92f84f68285cc561397d4120c6e6a0f331e6a40bf9e4066ca1719666d201585564d4e11449e22cec9c6eec3d20bfbf',
                sig: '304502203f18249ae65e941f0571cc58debf3455700f2508c6ad04ba45194a626317708d02210098eca021bd4297e35fe04c254c18437f2b3e4f7773e87df8889c1734f82d4c67'
            }],
            previous: '0000e0e3d78d093313f15936fb3d08f06b2bd095044342a1c896a3ee8b10a7bf',
            txCount: 4
        });
        blocks.push(blockData);
    })
    res.render('blockchain', {peers: peers, blocks: blocks});
})

module.exports = router;
