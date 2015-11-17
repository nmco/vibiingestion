{
    "composerUrl": "",
    "socialUrl": "",
    "start": 0,
    "limit": 20,
    "geoStoreBase": "http://vibi.geo-solutions.it/geostore/rest/",
    "adminUrl": "http://vibi.geo-solutions.it/admin/",
    "msmTimeout": 30000,
    "mediaContent": "./externals/mapmanager/theme/media",
    "ASSET": {
        "delete_icon": "./externals/mapmanager/theme/img/user_delete.png",
        "edit_icon": "./externals/mapmanager/theme/img/user_edit.png"
    },
    "locales": [
        [
            "en",
            "English"
        ],
        [
            "it",
            "Italiano"
        ],
        [
            "fr",
            "Français"
        ],
        [
            "de",
            "Deutsch"
        ],
        [
            "es",
            "Español"
        ]
    ],
    "tools": [
        {
            "ptype": "mxp_categoryinitializer",
            "neededCategories": [
                "ARCHIVEDRUNS",
                "ARCHIVEDLOGS"
            ]
        },
        {
            "ptype": "mxp_login",
            "pluginId": "loginTool",
            "actionTarget": {
                "target": "north.tbar",
                "index": 3
            },
            "forceLogin": true
        },
        {
            "ptype": "mxp_languageselector",
            "actionTarget": {
                "target": "north.tbar",
                "index": 7
            }
        }
    ],
    "adminTools": [
        {
            "ptype": "mxp_static_page",
            "autoOpen": true,
            "src": "composer?config=mainMap",
            "title": "Map"
        },
        {
            "ptype": "mxp_filebrowser",
            "actionTarget": {
                "target": "north.tbar",
                "index": 1
            }
        },
        {
            "ptype": "mxp_geobatch_flows",
            "geoBatchRestURL": "http://vibi.geo-solutions.it/geobatch/rest/",
            "geoStoreRestURL": "http://vibi.geo-solutions.it/geostore/rest/",
            "skipFlowsNotInRunConfigs": true,
            "showConsumersDetails": true,
            "forceOrder": true,
            "consumersPlugins": [
                {
                    "ptype": "importmetadata",
                    "wfsURL": "http://vibi.geo-solutions.it/geoserver/ows",
                    "metadataFeature": "import_metadata",
                    "metadataErrorsFeature": "import_metadata_errors",
                    "metadataNS": "vibi",
                    "wfsVersion": "1.1.0"
                }
            ],
            "autoOpen": true,
            "actionTarget": {
                "target": "north.tbar",
                "index": 2
            }
        },
        {
            "ptype": "mxp_login",
            "pluginId": "loginTool",
            "actionTarget": {
                "target": "north.tbar",
                "index": 10
            }
        },
        {
            "ptype": "mxp_languageselector",
            "actionTarget": {
                "target": "north.tbar",
                "index": 20
            }
        }
    ],
    "embedLink": {
        "embeddedTemplateName": "viewer",
        "showDirectURL": false,
        "showQRCode": false,
        "qrCodeSize": 128,
        "appDownloadUrl": "http://demo.geo-solutions.it/share/mapstoremobile/MapStoreMobile.apk"
    }
}