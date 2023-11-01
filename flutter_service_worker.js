'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c7ce2f10291d43199c60a2a5116fce04",
".git/config": "ebe39bb283858698cd035f0e5ae6a934",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "201d72960d5a162657a240af59baacfd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9732929664c05c5459fa0853326c05fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "1c60f47e201e36f2b444cdf6bd97876e",
".git/logs/HEAD": "9c8b6f6160ceb7d93571da6c7e433d37",
".git/logs/refs/heads/flutter": "ac58881539a519beac5bc77880eceebc",
".git/logs/refs/heads/master": "e449940e913506aad1e935a75b210f91",
".git/logs/refs/remotes/origin/flutter": "cb3dc931a76b4adaf1fa9bce15470b5f",
".git/logs/refs/remotes/origin/HEAD": "e449940e913506aad1e935a75b210f91",
".git/objects/0f/f222c25ba5f6c43bc73dfdf4e145c660e5e241": "8ee722182427aa6957412655219fb1e9",
".git/objects/10/f3c7e93528c4685957ed1c4e53cb30d71625e3": "22fb975d7fede774a16f695d3a99d3f1",
".git/objects/11/fb191774457bc1fc11b858e82d2183739916f1": "863e463eb1df91909531317cfe1325bb",
".git/objects/19/340ea86d781a00ccd46348821e2db34fa852a0": "b5d1eb0e4b8f44599e71e60985eb9f35",
".git/objects/1b/584b4e24afc080abe26492d7633c92d66e556c": "c98e30dcb59ee1c0287b35081be02bb8",
".git/objects/23/571898d833ec28dd8aeea7c43bfbf519fd08c5": "3096bbfe45f692cb376cd462075f3e4c",
".git/objects/25/5a7230b13f4221d18f53fcb4e02cfc6155bd8c": "1a9be938c93edcfb2d75f02c00e1484b",
".git/objects/36/0d8fa5785418fcde82095648e95efe351baab8": "06c57ed8cf748fff876319bf4d0cfab5",
".git/objects/3b/13a29effab2d323f686e952ab9410d9bf2ec38": "305563a784fd6436b15cce91ed0ca2df",
".git/objects/3e/f7812e41720df26439d5756304aabc688748a5": "db9fb02209f61b34649448688ca43f1f",
".git/objects/40/c7a779c8bef9bfef4737336ed8503b9e9b9315": "4eac5845fa8913e10658b9c5c2d4a159",
".git/objects/44/d0109f56d6c7191eb3680390c07fad1b707455": "8b594067f3b4c65eb6bab5cd65fad91b",
".git/objects/47/933b610e45a74d73485dcdcb835c675317e722": "6d0621d19af643de89662a2ecaeac946",
".git/objects/48/c9bfd77d3acefa5b3d7da2e99da2c2f6cc1bab": "26f7ebab9865e38536cb3f43095f50a1",
".git/objects/57/595f0484dabe29b9082ba910d988c7da153c5a": "65736be20a1e9419b1a346e8dccc17d3",
".git/objects/58/d479af84f8b830159b89aaf3b7fc5a8c34a190": "8346e3128c9ef831bfad0212d8e3e210",
".git/objects/5e/9c5096cf6cfdbff32cdf53875d20c503237779": "3e6d32ab47372e63c6aa3fa7a98eeb37",
".git/objects/5e/a250ec082455b59eb35563a94dfbd8c1cbeaec": "8e8b7cfa2d4ded89d5fc188b7f033358",
".git/objects/61/31c3e188a2405d67372a74e3230c26949e114b": "3272fbd6007f15ed3223d421f79d09d9",
".git/objects/61/b5a6976c8e8a7b52abb5ad4b007c1a28409e02": "dca8b81d6a40a4399288e7182c8fc17c",
".git/objects/6c/b9a873ac98de1f688383132c51aa64848f650a": "0d51b49a36770ef7cfd0e23fea821cef",
".git/objects/72/432a93d30ca1fca1df8a7494dc4f628611bef1": "714ab410f127e3a9b0676643c4448cd5",
".git/objects/73/d48634fa584aa96e5fe2ef53d744dbe739db35": "bd42e032a63fd9cbce7a1a3a9df8a40d",
".git/objects/7e/2f84218a710f06dacf4321cfa55b0f3429d8fc": "51b2dd9f9e07dc0609080574ed9bb65d",
".git/objects/84/a9567f4032d57d76842dc35868454dbaa80f22": "509777112f1576f7d3848588c0cce05a",
".git/objects/91/014e0f0e80ac276c843c5ff1f625cd79d56cec": "0445673415348131a420be337cb2ae28",
".git/objects/93/4adb1762debc8ae71a9438acf9ac4054688004": "4d2985f2bd3d6f91be29a11b1a66429b",
".git/objects/9f/551e48548c25d451210af603c6a58d440c36fa": "00643c865711e255062ed84d66048a36",
".git/objects/a2/b7b2b27928ea5dcd97e9e186075337e6dd9b59": "91bbb95fc290ba70ba9afd65bb0c44f9",
".git/objects/ac/55d03fcb31945c5d5edc06c8e97b759e2a7709": "ae054b740895387ce6efcd18d93a5310",
".git/objects/b0/cb215e82adc1293277159a754ec9f2e675497f": "4c33ec1e50621d9b0aa86b598513e14e",
".git/objects/b7/77cce6aceff8831d58e886481c55b4c69ed76e": "095c1bd6ecf64780ec538a8b22288bb2",
".git/objects/bf/7cdc8d1341f442741e9be139ba9e0ff3e4a9a5": "190ee9735c08da146dec25d2f7ee65e1",
".git/objects/c8/0c05fda64cee802a6fc5e3779e7383954c7f13": "65c88b9d58f975b9a63a5fe762c0ccc5",
".git/objects/d5/b28deb7d58a1a028ebf6aa4f2f2bee7a8d7f03": "81d6c8a08c32c7d5c354d992a1c33ff1",
".git/objects/e0/89256435d6ffd2e0e3573d190824f1e0f7d3a6": "d0589cf43d8624212aacf7b4c18996e7",
".git/objects/e4/c8debd30ff647c8fd6de4304f732a80267c2de": "d5bb0915da58a2c3aef808ffb958b68d",
".git/objects/e9/6e2cfc8149581e87331e8f9a653a757a8f82e1": "434ed294a87130b6cc85d84af4e1f9ce",
".git/objects/eb/8e7883fe9ab49a5f0cbaf35e8a84de17aa12b2": "4043f65cc39db07266277577c75ad52a",
".git/objects/f0/4e63ab9ca072a5f82b82c018279fd488c4e0f5": "01f5e384cde91ca86efbf083af978891",
".git/objects/f6/54bd654bd2d3088e3b52345e8b5355353ffc4b": "854abbb34e57cb83c52333bec7a0e296",
".git/objects/info/packs": "537527569e4b88d9cdcf2987afac7ea5",
".git/objects/pack/pack-0464375818b50b1d9024d81c025f19523c4a9ad7.idx": "0a982f21d119033a1ed91617c76cd14e",
".git/objects/pack/pack-0464375818b50b1d9024d81c025f19523c4a9ad7.pack": "814d0986f89e27ad9a327db2224b56e2",
".git/objects/pack/pack-0464375818b50b1d9024d81c025f19523c4a9ad7.rev": "1e24b0795a90f553deace4e53a88eb95",
".git/packed-refs": "dc617b00d6cbb0a8769ff9330742b0e8",
".git/refs/heads/flutter": "59e3a137884c88ca0f53119cf9a198f2",
".git/refs/heads/master": "b02c9e6e71176faedc00bd30677c0bfa",
".git/refs/remotes/origin/flutter": "59e3a137884c88ca0f53119cf9a198f2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.bin": "5498783ab8e082902e16f535de18ca01",
"assets/AssetManifest.json": "238591e352f5e6b6d7caa6538c14d98b",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/Bhuvan.jpg": "1f72914c1a9579572ff6fb806544e5ca",
"assets/assets/images/Bhuvan_Resume.pdf": "5153a88714a057ddafe1a7401b2df957",
"assets/assets/images/Bhuvan_Smiling.jpg": "55c14f763a1f07b26e52b3ea437fc589",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/cloud_developer_cert.png": "1ca2e8a34f3acd90d81a67673b3b42be",
"assets/assets/images/cmu_cert.png": "522cfd8c2bf621d86dbbca32c7624377",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/david-cobbina-cv.pdf": "056eac309f96f0152447de93b0d9f6ab",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/david_legend.png": "bac667358275697e63db4c888a736df9",
"assets/assets/images/dev_meditate.png": "742e79b9b388e0a9304a12eb0f8f6291",
"assets/assets/images/docker_cert.png": "ceb1953d2d80a9f61396eea4eee43215",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/gcp_cert.png": "734e2bf25783cad1818f6302ec0de1f7",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/mlflow_cert.png": "61d002fbda28f48c466ba81d297b33a0",
"assets/assets/images/ml_cert.png": "f720b775e433a670f201782984f1d45b",
"assets/assets/images/Profile.jpg": "aa306a925d886112b4feabe2ad05d560",
"assets/assets/images/Profile1.jpg": "f8eb9661d342787a3bd5946faa75a2c2",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/aerium-v2/last.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/disneyplus/disneyplus_components.png": "74d9e2263cebd38337ac2ae9d2f23b16",
"assets/assets/images/projects/disneyplus/disneyplus_cover.png": "ffa11a0c8f114e0a24b31bb1790f2ef8",
"assets/assets/images/projects/disneyplus/disneyplus_description.png": "f049e03a0d786b44d57f80e702f10a5c",
"assets/assets/images/projects/disneyplus/disneyplus_designs.png": "084289a49e4ec07af37d41eb0b919123",
"assets/assets/images/projects/disneyplus/disneyplus_downloads_feature.png": "3bb3d18e2b7af7b62e3bc90a8deed037",
"assets/assets/images/projects/disneyplus/disneyplus_great_menu.png": "d13b01ee672be2e3e884fe866db90359",
"assets/assets/images/projects/disneyplus/disneyplus_header.png": "1ef584f42c10fd2f994f44e35d281751",
"assets/assets/images/projects/disneyplus/disneyplus_home.png": "7c3f46edc91974a22db6ecab11e49cbd",
"assets/assets/images/projects/disneyplus/disneyplus_mockups.png": "ec3d2333044bc2622030e38eb84a1b90",
"assets/assets/images/projects/disneyplus/disneyplus_more_description.png": "54c40930e0035fee095cc5f26e09e8d4",
"assets/assets/images/projects/disneyplus/disneyplus_profiles.png": "ee5c8f987396dbb6157911982b9e983d",
"assets/assets/images/projects/disneyplus/disneyplus_theme.png": "b4a28335035d4b169f1033313801fcc5",
"assets/assets/images/projects/disneyplus/disneyplus_the_end.png": "32e658209ce45e9227860a8c0fbf1b54",
"assets/assets/images/projects/disneyplus/mockups.png": "bfec31223be46e6c269d8bc71f3f707e",
"assets/assets/images/projects/droneinspection/DemoScene.png": "cb3f207a2789db593a6b27221a0ddd53",
"assets/assets/images/projects/droneinspection/drone-inspection-api.PNG": "13d98870114963a22f3fe1888a3a8f3e",
"assets/assets/images/projects/droneinspection/drone-live-monitoring.PNG": "fb9c8fb50daaff6ee0809a7d33d14e3d",
"assets/assets/images/projects/droneinspection/end-to-end-flow.PNG": "0a2f7ec7d7f370e61961b585b060c481",
"assets/assets/images/projects/droneinspection/intro.png": "26b77680a8dff7e9d62fc146552d4b50",
"assets/assets/images/projects/droneinspection/mqtt-drone-api.PNG": "5bd3e9e45ea182296ae90082ef1902b1",
"assets/assets/images/projects/droneinspection/object-detection.PNG": "d288c141aca2e67feb86ed6d39489e0c",
"assets/assets/images/projects/droneinspection/pose-estimation-step1.PNG": "2ba187fd6509743657520e918e201269",
"assets/assets/images/projects/droneinspection/pose-estimation-step2.PNG": "68bece8d06739485c0cddb8c810b4efd",
"assets/assets/images/projects/droneinspection/pose-estimation-step3.PNG": "dfb802c544d87c0b88ea218522571a51",
"assets/assets/images/projects/droneinspection/ppr-dashboard.PNG": "cf5d827db69f4082739c4fde9d727106",
"assets/assets/images/projects/droneinspection/ppr-dashboard1.PNG": "9a8b02861e95ea75c6e2f65ca398bac2",
"assets/assets/images/projects/droneinspection/simrk.PNG": "81c6c80cda2c16292f871911b631fa62",
"assets/assets/images/projects/drop/drop_cover.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/flutter_catalog/activities.png": "56b8a82f91b3bb17fc2da735be8309e2",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png": "529c018ceb7db5d85e0bba13a4cd19c3",
"assets/assets/images/projects/flutter_catalog/onboarding.png": "78cd62661bd65bca48016781ec5af76d",
"assets/assets/images/projects/flutter_catalog/screens.png": "f384d904e19edcdf3b83ac9fab4a2514",
"assets/assets/images/projects/flutter_catalog/stats.png": "c6c5da388e4771644e3a0057737cc018",
"assets/assets/images/projects/flutter_catalog/thanks.png": "f23385476a0df7db049d7b8f94714706",
"assets/assets/images/projects/flutter_catalog/typography.png": "b12b17f85e8e12bd2ccab08e987c640c",
"assets/assets/images/projects/foodybite/foodybite_cover.png": "969daa4932408c630eb26f795cd84840",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/roam/roam_cover.jpeg": "a67b0ed338d81feb4cf60955c3a821b2",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/skills2.png": "35c7dfdaee607691c09a79d922395ea2",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "8a4888a660fcaeeed22500f1c7134be9",
"assets/NOTICES": "b0e8f5f18cb04d2bc18594fc37f261c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"icons/logo-bhuvan.png": "5f4797ff4b7dcc79a699e564da353eb9",
"index.html": "43019b6ca07ab29f9ca2f24db0831d12",
"/": "43019b6ca07ab29f9ca2f24db0831d12",
"main.dart.js": "baae878e1b6e93a04325a75dc6610494",
"manifest.json": "adb89e1c1ac12d96ed176e1249e4afe5",
"version.json": "3906fc5d38199c243ab81a45fee32c66"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
