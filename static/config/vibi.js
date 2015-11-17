{
    "composerUrl": "",
    "socialUrl": "",
    "start": 0,
    "limit": 20,
    "geoStoreBase": "http://localhost:9191/geostore/rest/",
    "adminUrl": "http://localhost:8080/admin/",
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
            "ptype": "mxp_updater",
            "geoBatchRestURL":"http://localhost:9192/opensdi2-manager/facade/geobatch/rest/",
            "uploadUrl":"http://localhost:9192/opensdi2-manager/mvc/admin/updater/upload",
            "actionTarget":{
                "target": "north.tbar",
                "index": 1
            }
        },
        {
            "ptype": "mxp_entity_manger",
            "notDuplicateOutputs": true,
            "actionTarget": {
                "target": "north.tbar",
                "index": 2
            },
            "entities": [
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": true,
                    "basePath": "mvc/vibi/plot/",
                    "canCreate": true,
                    "canDelete": true,
                    "canEdit": true,
                    "columns": [
                        {
                            "header": "id",
                            "mapping": "id",
                            "name": "id"
                        },
                        {
                            "header": "Label",
                            "mapping": "label",
                            "name": "label"
                        },
                        {
                            "header": "Default Production Uom",
                            "mapping": "prod_default_unit",
                            "name": "prod_default_unit"
                        },
                        {
                            "header": "Default Area Uom",
                            "mapping": "area_default_unit",
                            "name": "area_default_unit"
                        },
                        {
                            "header": "Default Yield Uom",
                            "mapping": "yield_default_unit",
                            "name": "yield_default_unit"
                        },
                        {
                            "falseText": "",
                            "fixed": true,
                            "header": "Rabi",
                            "mapping": "rabi",
                            "maxWidth": 100,
                            "name": "rabi",
                            "trueText": "Yes",
                            "width": 100,
                            "xtype": "booleancolumn"
                        },
                        {
                            "falseText": "",
                            "fixed": true,
                            "header": "Kharif",
                            "mapping": "kharif",
                            "maxWidth": 100,
                            "name": "kharif",
                            "trueText": "Yes",
                            "width": 100,
                            "xtype": "booleancolumn"
                        }
                    ],
                    "createTitle": "Create a new Plot",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Plot",
                    "fields": [
                        {
                            "mapping": "id",
                            "name": "id"
                        },
                        {
                            "mapping": "label",
                            "name": "label"
                        },
                        {
                            "mapping": "prod_default_unit",
                            "name": "prod_default_unit"
                        },
                        {
                            "mapping": "area_default_unit",
                            "name": "area_default_unit"
                        },
                        {
                            "mapping": "yield_default_unit",
                            "name": "yield_default_unit"
                        },
                        {
                            "header": "Rabi",
                            "mapping": "rabi",
                            "name": "rabi",
                            "type": "boolean"
                        },
                        {
                            "header": "Kharif",
                            "mapping": "kharif",
                            "name": "kharif",
                            "type": "boolean"
                        }
                    ],
                    "form": {
                        "create": [
                            {
                                "allowBlank": false,
                                "fieldLabel": "Id",
                                "name": "id",
                                "reandonly": false,
                                "xtype": "textfield"
                            },
                            {
                                "allowBlank": false,
                                "fieldLabel": "Label",
                                "name": "label",
                                "xtype": "textfield"
                            },
                            {
                                "fieldLabel": "Season",
                                "items": [
                                    {
                                        "boxLabel": "Rabi",
                                        "inputValue": true,
                                        "name": "rabi"
                                    },
                                    {
                                        "boxLabel": "Kharif",
                                        "inputValue": true,
                                        "name": "kharif"
                                    }
                                ],
                                "name": "seasons",
                                "xtype": "checkboxgroup"
                            },
                            {
                                "allowBlank": false,
                                "displayField": "name",
                                "fieldLabel": "Production Uom",
                                "forceSelected": true,
                                "hiddenName": "prod_default_unit",
                                "mode": "local",
                                "name": "prod_default_unit",
                                "store": {
                                    "autoLoad": true,
                                    "fields": ["id", "name"],
                                    "idProperty": "id",
                                    "root": "data",
                                    "totalProperty": "total",
                                    "url": "/opensdi2-manager/mvc/cip/uom/filterby?attributename=cls&valueLike=production",
                                    "xtype": "jsonstore"
                                },
                                "triggerAction": "all",
                                "valueField": "id",
                                "xtype": "combo"
                            },
                            {
                                "allowBlank": false,
                                "displayField": "name",
                                "fieldLabel": "Area Uom",
                                "hiddenName": "area_default_unit",
                                "mode": "local",
                                "name": "area_default_unit",
                                "store": {
                                    "autoLoad": true,
                                    "fields": ["id", "name"],
                                    "idProperty": "id",
                                    "root": "data",
                                    "totalProperty": "total",
                                    "url": "/opensdi2-manager/mvc/cip/uom/filterby?attributename=cls&valueLike=area",
                                    "xtype": "jsonstore"
                                },
                                "triggerAction": "all",
                                "valueField": "id",
                                "xtype": "combo"
                            },
                            {
                                "allowBlank": false,
                                "displayField": "name",
                                "fieldLabel": "Yield Uom",
                                "hiddenName": "yield_default_unit",
                                "mode": "local",
                                "name": "yield_default_unit",
                                "store": {
                                    "autoLoad": true,
                                    "fields": ["id", "name"],
                                    "idProperty": "id",
                                    "root": "data",
                                    "totalProperty": "total",
                                    "url": "/opensdi2-manager/mvc/cip/uom/filterby?attributename=cls&valueLike=yield",
                                    "xtype": "jsonstore"
                                },
                                "triggerAction": "all",
                                "valueField": "id",
                                "xtype": "combo"
                            }
                        ],
                        "edit": [
                            {
                                "allowBlank": false,
                                "fieldLabel": "Id",
                                "name": "id",
                                "readOnly": true,
                                "xtype": "textfield"
                            },
                            {
                                "allowBlank": false,
                                "fieldLabel": "Label",
                                "name": "label",
                                "xtype": "textfield"
                            },
                            {
                                "fieldLabel": "Season",
                                "items": [
                                    {
                                        "boxLabel": "Rabi",
                                        "inputValue": true,
                                        "name": "rabi"
                                    },
                                    {
                                        "boxLabel": "Kharif",
                                        "inputValue": true,
                                        "name": "kharif"
                                    }
                                ],
                                "name": "seasons",
                                "xtype": "checkboxgroup"
                            },
                            {
                                "allowBlank": false,
                                "displayField": "name",
                                "fieldLabel": "Production Uom",
                                "hiddenName": "prod_default_unit",
                                "mode": "local",
                                "name": "prod_default_unit",
                                "store": {
                                    "autoLoad": true,
                                    "fields": ["id", "name"],
                                    "idProperty": "id",
                                    "root": "data",
                                    "totalProperty": "total",
                                    "url": "/opensdi2-manager/mvc/cip/uom/filterby?attributename=cls&valueLike=production",
                                    "xtype": "jsonstore"
                                },
                                "triggerAction": "all",
                                "value": "000_tons",
                                "valueField": "id",
                                "xtype": "combo"
                            },
                            {
                                "allowBlank": false,
                                "displayField": "name",
                                "fieldLabel": "Production Uom",
                                "hiddenName": "area_default_unit",
                                "mode": "local",
                                "name": "area_default_unit",
                                "store": {
                                    "autoLoad": true,
                                    "fields": ["id", "name"],
                                    "idProperty": "id",
                                    "root": "data",
                                    "totalProperty": "total",
                                    "url": "/opensdi2-manager/mvc/cip/uom/filterby?attributename=cls&valueLike=area",
                                    "xtype": "jsonstore"
                                },
                                "triggerAction": "all",
                                "value": "000_ha",
                                "valueField": "id",
                                "xtype": "combo"
                            },
                            {
                                "allowBlank": false,
                                "displayField": "name",
                                "fieldLabel": "Production Uom",
                                "hiddenName": "yield_default_unit",
                                "mode": "local",
                                "name": "yield_default_unit",
                                "store": {
                                    "autoLoad": true,
                                    "fields": ["id", "name"],
                                    "idProperty": "id",
                                    "root": "data",
                                    "totalProperty": "total",
                                    "url": "/opensdi2-manager/mvc/cip/uom/filterby?attributename=cls&valueLike=yield",
                                    "xtype": "jsonstore"
                                },
                                "triggerAction": "all",
                                "value": "kg_ha",
                                "valueField": "id",
                                "xtype": "combo"
                            }
                        ]
                    },
                    "iconCls": "vibi_plot_ic",
                    "id": "Plots",
                    "idProperty": "id",
                    "name": "Plot",
                    "pluralName": "Plots",
                    "restful": true,
                    "root": "data"
                }
            ]
        },
        {
            "ptype": "mxp_filebrowser",
            "actionTarget": {
                "target": "north.tbar",
                "index": 4
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