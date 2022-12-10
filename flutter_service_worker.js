'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"index.html": "6168e506ba67b42a17b197dd9cd1cb9c",
"/": "6168e506ba67b42a17b197dd9cd1cb9c",
"main.dart.js": "454d09cc83c7745a7749124471069c94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "9741f54fb5a4f709ea8ea8083290fb96",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"myportfolio.io/.git/config": "b5c98de4bb55c881699db33010507e5f",
"myportfolio.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"myportfolio.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"myportfolio.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"myportfolio.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"myportfolio.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"myportfolio.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"myportfolio.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"myportfolio.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"myportfolio.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"myportfolio.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"myportfolio.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"myportfolio.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"myportfolio.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"myportfolio.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"myportfolio.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"myportfolio.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"myportfolio.io/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"manifest.json": "e4a84e7a863fc15bb6a46bfdca624529",
".git/config": "7cae7760ce95edad20913863e96b9b4f",
".git/objects/59/3526c00b2772374a1667b84da2b451aed60309": "dbc210caf214d13f70d4ce90e0392adf",
".git/objects/66/f145a0e170795cc87abecb7b8f519b29d508d6": "2f3aea726da0a1f570f8697ff0504e38",
".git/objects/9e/bf2e7255d84ba946aec42305e7e2e629eb0e79": "8933ead2fdf01e20714d28736e5b5eac",
".git/objects/69/4bbd6b140949af8eb78928ee44859e1c87642f": "d831ed0b0848c1d1e3574622aed1c0ba",
".git/objects/3c/ce5f5fcc6571b3e071c06905f2463b417283ab": "467a0016e90574fc02e32a24eb68d3ef",
".git/objects/51/eb7b2aa3359be2b01359a799c2562a7868e0f3": "2a6ad4d116c17eba4195cf8383b7e6f6",
".git/objects/3d/457169d604fcdfb9192d4f1091ad90d13320ff": "16f328cddaa4f6e1a9f69f7c43cae027",
".git/objects/94/471771dd7d111feb8115797776d8a6d02812fe": "55eebb5dff252c0348a739d101a03f73",
".git/objects/9c/e615cd7e12587de0b7df6df64ab5f089be8a4b": "c605bb6bfcca801b6d8941e2ec01b967",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/b5/778d4740b576747c1830cdddc5fe0be73a391d": "2f3b20a520275c821f3b95b442395b75",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/a2/e775cc7a8e0099b47317aa1de87c4951df95b7": "2d29bf589f17ef0dc0353d11add62941",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/1193f9626fea945379034dec2bde48c37dceab": "547017f212c8088ed014ddff39581905",
".git/objects/d8/fb328e4430ff5c32f7b385a7f13373785b0926": "cfc80ac8283ce82ec1819c0557640d73",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/2f6c666121851eedbb73471008d6eb8f712b22": "f18b67925819d92da8d1f81c0b2c8798",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f3/4e0b5b71b5a31322dff4a056450845d287246f": "2d3b9eeed5ba291726381ae68bc9549b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a953d129fe2605f94d8fa026954606f3cc84ae": "a4db739ad30a182b891311746e6184a4",
".git/objects/c7/38cad4f0d9a9a361b6aec9369c65312b200b15": "e1abeb118ef3035c117b99ec562c2e24",
".git/objects/f2/a890c9903f6021f04f2c84b61aac7868a7bf34": "5633b77fae19fb43875b76608bfdc570",
".git/objects/e3/7baafd24a324a502b15e78f008d53d3ed3b3c3": "6e6fcfb0537ffacc7538a6f429978c74",
".git/objects/e4/043f2b65c2cfb0632543ac09aa0af1bfd63636": "a90641795b27b715dfea21fd866afee5",
".git/objects/ed/60c78b014cacd1399dab703e0e75049cc55007": "d2e0c3afd5e7bcf46afb62163a69df75",
".git/objects/20/cb9de9a538eb124235c45461a79f9efb45466d": "582477c7f4a2ebb733c4b7ad66d958ae",
".git/objects/11/478b7aeb574bb0f97f60bf0c8eda4257ada7bc": "bc2e22c058aa23493adeb650729b6759",
".git/objects/7c/1f98fa6c377173401d4f4d63c229339fbd3db7": "96f1e185af70056d226ff9e4e4e8050c",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/42/b3768503bb10db01e0b28fdc4edeb480945cbc": "fb01fd867f658658710ea79d796f7c7f",
".git/objects/1a/691dc567e4aaf96b8c6496aea5acb351fa42d5": "e476d67a0a0d070b9f916037b9fd405f",
".git/objects/28/69664e9a04614c21c1629a9617583371796ff1": "ffbd23777f344b930742c357cd7bce8a",
".git/objects/8f/191c036d61f8ba0fd618093d88870151b28d77": "9ebf5783991e695f22b9efd2bda00342",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c2f1a421fdb9d2848f11df70652de2bb564c41": "fb09a985eb66c46fe26c3e5c8e84cc1e",
".git/objects/19/b33fac273d672abf2a4dd499d6cd2f0c24be79": "1f70f001c5c66871211de69902754aad",
".git/objects/4c/18fb2af09a821232df622f3020f15d78ebeb61": "5692832681b4b7fc98aff7a63f0f8666",
".git/objects/4c/4af873d38e06be61df645788c15975c25a3a3e": "cc04e707047af6736e52b9d3027eec9a",
".git/objects/26/d1dc924afbeb6a2594b149166e33a7dc572b1e": "d3cd18a6077e6e7d072824ed48478c48",
".git/objects/44/7e3b30ebcb91fadb54abdd6d5d4b515f3978b0": "fba17fbed6fa7911a3f3eefd519b9e64",
".git/objects/2a/840128a911b02f8ee13e96545e1fbae93c6568": "18cfad86b48e569f7f343120db3c3e3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/4862a4956c93ced0b51cbf14636b4b2d8f4e58": "8a24f06d72352dd5f429c4452a4eda23",
".git/objects/5c/335694d6bc3cd66647b883e9402786d975c3ae": "b32c6445a31c4a5a8ee3aa7467ba5803",
".git/objects/31/85ce31f389e53373ed27732b0637c5898b589b": "7c104a4c40d71b5ac1bc5b363304c267",
".git/objects/96/8b6278b57bff24a35327c119690632bd591440": "8918c19de5249f36f8681e61bc2c109a",
".git/objects/98/1f87697510075f5a956183c3e7b39c59cc94d7": "bdc179b5930cbf1677c0bdc36daa6d8f",
".git/objects/30/ec1323107bb44d3e5c547a2ceafd10da22dbe2": "61ea6790e97a6e98fb40f443b92cc71b",
".git/objects/01/a539d73aed68870887d86b78847497e2bd2569": "d2c1e093b8723cf8ff4e43dcca8b7d22",
".git/objects/01/729f17bf22820b6b536bc212735de8698fe572": "22769a0ccaa342e3d489094d922f88c8",
".git/objects/52/c47d8fe8f7e462763878d68d4af66a5960e1bf": "8cbee84d48223fcdfb4235da065d45c5",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/63/2f16c5b0b434acf2eb6f04c68770b7a9c14eeb": "447179f39ad7181c78d1b0f0de5b4796",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/ba/15f64c232fb1e9bf874dfc49313b2d3518d332": "b94c3fa4e5d9a993196a1d2ecc61e564",
".git/objects/dd/2029073ee44c4056ba0d040070dc8385dee6e3": "afcf80ae0539153ce2aac1238d6800af",
".git/objects/b6/aca6fde821239aa1c622883536db85233ed632": "55579a938ff2169070c7c89dc2b70a73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/b0/c24bfff946cbeaa5db18fcd58f1d27c0dcbf3f": "8640a720905c48b74f8905e18d62977a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/96d841cb2d517c717d6ad47fe2a7672acada78": "85253915515f31c499c615988f2cadbe",
".git/objects/c4/f0cf3da2739b1ef6c047ed83891c72161bf217": "5944cc40499dfb07e5eb39b0165f2230",
".git/objects/ea/1bc5939b48f9c7db535a55b8babe7e53336506": "77a7ce33ec57c48a95051a118feaed0f",
".git/objects/ea/cb34726bc9202eff4d2ae15786ea6351cc3f89": "c8236a888d291277f8559c9b6fafb1e1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/12db336820d28b542a643e868a7573225a83cb": "d94f0a8f23812a9c84087768ea65a5d1",
".git/objects/fa/b1a7d086c4c13eafe3cb8caed933cc650f8959": "e5b2d72115ef3a5d8e81b8df0e4a66c1",
".git/objects/e9/8b7ae6dfa45afa187c43e31906bc1370205b6d": "83bffcb0b6f1b89e5b8499ad20dfeb31",
".git/objects/cb/1489da64611bec342515a87cb5503d86622116": "d71f572a8faf9d8759943699a0a83261",
".git/objects/ce/59768caa95b3343b2dce261ea8f84bcd4a7a8c": "64f89722dfb50f13e41b1f5df973362a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/79b64f4a2d2061f59c6cfb6c9c37fc6524d7b2": "27edce902ddf280c2849d10d5bf81359",
".git/objects/23/ca6b2d2735a832763b82887a9866c2cd531a75": "77201e366037db58a41d2c4d599c0812",
".git/objects/4f/32a14cfc9095af767851ead0a0ddf2f62d705f": "50257e7ed4d65f39943e510f9a3540df",
".git/objects/2e/de00db2db8c8e2e511b107725e79bbd5f8cf48": "49e1b7858cc34e6468c1a80dcb86dc08",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/8b/d5c1508b092fba33a0968f23795907a4010852": "2dfe35cc2d24400399dabe2948f3e421",
".git/objects/25/2a4b28ffe3c0fa4f559b52b9a2ffd6de91b0bf": "58d8f4e6a913821a95451cc869acb8b5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ea731854beac8976f1d7dc883e27f35",
".git/logs/refs/heads/main": "8ea731854beac8976f1d7dc883e27f35",
".git/logs/refs/remotes/origin/HEAD": "c959da544eb9da5a6e4ee89bcf58be1b",
".git/logs/refs/remotes/origin/main": "c2ddfe333bfbcbdb4ca03bf39b9743ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d2a64a3c8eb627ac076d28d135093e39",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "220a3d5888bac4b1a691f4d455827aae",
".git/index": "724574a4cc94b53a06a4a1f7a0967b37",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "cda480907636597c90e267b996a9e54b",
"assets/AssetManifest.json": "f62ebb2e2ad89480d0bb41b97120d2f9",
"assets/NOTICES": "82ade681d77aeeefe964ee60abdfb56d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "65e99e00922c9841f9274a83ed3ee766",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/guy.svg": "384b0cd380b8ce087e170fe5b3dc7f6b",
"assets/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/android.png": "0fb1e77bbfe50f7a527d66acdc4321eb",
"assets/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/assets/images/technology/javascript.png": "2e5de0a7d635b437db088d43f847d39c",
"assets/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/assets/images/technology/php.png": "b187e3b1985b0aa738093d97ce028ab6",
"assets/assets/images/projects/1.jpeg": "323240fb1b1bf14fa7b4ed4d28abbca4",
"assets/assets/images/projects/Aiims.png": "b639259adc6287131a1a01f30038bea8",
"assets/assets/images/projects/6.jpeg": "563048f821e840ebdbc7000e9c6b834a",
"assets/assets/images/projects/adanigas.png": "a1e639a8d24cbc7571adef429eef55f3",
"assets/assets/images/projects/4.jpeg": "cce4265499da546fa4f19dafda74a277",
"assets/assets/images/projects/5.jpeg": "99aa5e4c06f65c1d5ad86c9db51e57bd",
"assets/assets/images/projects/2.jpeg": "8d95c6eb176a94d08d65b66cb5fab03e",
"assets/assets/images/projects/Railways.png": "0d0301084e3775a6f17e933e593381ca",
"assets/assets/images/projects/3.jpeg": "c9f588e4843b5cf7c6e614b4a17ee46c",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
