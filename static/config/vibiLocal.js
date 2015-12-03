{
    "composerUrl": "",
    "socialUrl": "",
    "start": 0,
    "limit": 20,
    "geoStoreBase": "http://localhost:9191/geostore/rest/",
    "adminUrl": "http://localhost:9192/opensdi2-manager/",
    "msmTimeout": 30000,
    "mediaContent": "./externals/mapmanager/theme/media",
    "header": {
	   "html": "<div class='topbanner'><div id='left-banner'><img src='img/header_01.png' height='86' border='0' /> </div><div id='right-banner'><img src='img/header_02.png' height='86' style='float:right' border='0' /></div></div>",
	   "css": "<style type='text/css'>div.topbanner{background-image: none;background-color:white;background-position:center top;height:100%;}</style>",
	   "container": {
			"border": false,
			"header": false,
			"collapsible": true,
			"collapseMode":  "mini",
			"hideCollapseTool": true,
			"split": true,
			"animCollapse": false,
			"minHeight": 86,
			"maxHeight": 86,
			"height": 86
	   }
    },
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
            "ptype": "mxp_entity_manger",
            "notDuplicateOutputs": true,
            "buttonText": "Data",
            "setActiveOnOutput": true,
            "closable": false,
            "autoOpen": true,
            "actionTarget": {
                "target": "north.tbar",
                "index": 1
            },
            "entities":
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": true,
                    "basePath": "mvc/vibi/plot/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [
                        {
                            "header": "Plot #",
                            "mapping": "plot_no",
                            "name": "plot_no"
                        },
                        {
                            "header": "Project Name",
                            "mapping": "project_name",
                            "name": "project_name"
                        },
                        {
                            "header": "Plot Name",
                            "mapping": "plot_name",
                            "name": "plot_name"
                        },
                        {
                            "header": "Label",
                            "mapping": "plot_label",
                            "name": "plot_label"
                        },
                        {
                            "header": "Monitoring Event",
                            "mapping": "monitoring_event",
                            "name": "monitoring_event"
                        }
                    ],
                    "createTitle": "Create a new Plot",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Plot",
                    "fields": [
                        {
                            "mapping": "plotNo",
                            "name": "plot_no"
                        },
                        {
                            "mapping": "projectName",
                            "name": "project_name"
                        },
                        {
                            "mapping": "plotName",
                            "name": "plot_name"
                        },
                        {
                            "mapping": "plotLabel",
                            "name": "plot_label"
                        },
                        {
                            "mapping": "monitoringEvent",
                            "name": "monitoring_event"
                        }
                    ],
                    "iconCls": "vibi_plot_ic",
                    "id": "Plots",
                    "idProperty": "id",
                    "name": "Plot",
                    "pluralName": "Plots",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/species/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Specie",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Specie",
                    "fields": [],
                    "iconCls": "vibi_species_ic",
                    "id": "Species",
                    "idProperty": "id",
                    "name": "Specie",
                    "pluralName": "Species",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/plot_module_herbaceous/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Plot Module Herbaceous",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Plot Module Herbaceous",
                    "fields": [],
                    "iconCls": "vibi_plot_module_herbaceous_ic",
                    "id": "Plots Modules Herbaceous",
                    "idProperty": "id",
                    "name": "Plot Module Herbaceous",
                    "pluralName": "Plots Modules Herbaceous",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/herbaceous_relative_cover/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Herbaceous Relative Cover",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Herbaceous Relative Cover",
                    "fields": [],
                    "iconCls": "vibi_herbaceous_relative_cover_ic",
                    "id": "Herbaceous Relative Cover",
                    "idProperty": "id",
                    "name": "Herbaceous Relative Cover",
                    "pluralName": "Herbaceous Relative Cover",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/plot_module_woody/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Plot Module Woody",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Herbaceous Plot Module Woody",
                    "fields": [],
                    "iconCls": "vibi_plot_module_woody_ic",
                    "id": "Plot Module Woody",
                    "idProperty": "id",
                    "name": "Plot Module Woody",
                    "pluralName": "Plots Modules Woody",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/woody_importance_value/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Woody Importance Value",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Woody Importance Value",
                    "fields": [],
                    "iconCls": "vibi_woody_importance_value_ic",
                    "id": "Woody Importance Value",
                    "idProperty": "id",
                    "name": "Woody Importance Value",
                    "pluralName": "Woody Importance Values",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/biomass/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Biomass",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Biomass",
                    "fields": [],
                    "iconCls": "vibi_biomass_ic",
                    "id": "Biomass",
                    "idProperty": "id",
                    "name": "Biomass",
                    "pluralName": "Biomass",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/metric_calculations/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Metric Calculation",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Metric Calculation",
                    "fields": [],
                    "iconCls": "vibi_metric_calculations_ic",
                    "id": "Metrics Calculations",
                    "idProperty": "id",
                    "name": "Metric Calculation",
                    "pluralName": "Metrics Calculations",
                    "restful": true,
                    "root": "data"
                }
            ]
        },
        {
            "ptype": "mxp_updater",
            "geoBatchRestURL":"http://localhost/geobatch/rest/",
            "uploadUrl":"http://localhost:9192/opensdi2-manager/mvc/admin/updater/upload",
            "flowId":"mapper",
            "autoOpen": true,
            "closable": false,
            "showActionButton": false
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
    "loggedTools": [
        {
            "ptype": "mxp_entity_manger",
            "notDuplicateOutputs": true,
            "buttonText": "Data",
            "setActiveOnOutput": true,
            "closable": false,
            "autoOpen": true,
            "entities": [
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": true,
                    "basePath": "mvc/vibi/plot/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [
                        {
                            "header": "Plot #",
                            "mapping": "plot_no",
                            "name": "plot_no"
                        },
                        {
                            "header": "Project Name",
                            "mapping": "project_name",
                            "name": "project_name"
                        },
                        {
                            "header": "Plot Name",
                            "mapping": "plot_name",
                            "name": "plot_name"
                        },
                        {
                            "header": "Label",
                            "mapping": "plot_label",
                            "name": "plot_label"
                        },
                        {
                            "header": "Monitoring Event",
                            "mapping": "monitoring_event",
                            "name": "monitoring_event"
                        }
                    ],
                    "createTitle": "Create a new Plot",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Plot",
                    "fields": [
                        {
                            "mapping": "plotNo",
                            "name": "plot_no"
                        },
                        {
                            "mapping": "projectName",
                            "name": "project_name"
                        },
                        {
                            "mapping": "plotName",
                            "name": "plot_name"
                        },
                        {
                            "mapping": "plotLabel",
                            "name": "plot_label"
                        },
                        {
                            "mapping": "monitoringEvent",
                            "name": "monitoring_event"
                        }
                    ],
                    "iconCls": "vibi_plot_ic",
                    "id": "Plots",
                    "idProperty": "id",
                    "name": "Plot",
                    "pluralName": "Plots",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/species/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Specie",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Specie",
                    "fields": [],
                    "iconCls": "vibi_species_ic",
                    "id": "Species",
                    "idProperty": "id",
                    "name": "Specie",
                    "pluralName": "Species",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/plot_module_herbaceous/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Plot Module Herbaceous",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Plot Module Herbaceous",
                    "fields": [],
                    "iconCls": "vibi_plot_module_herbaceous_ic",
                    "id": "Plots Modules Herbaceous",
                    "idProperty": "id",
                    "name": "Plot Module Herbaceous",
                    "pluralName": "Plots Modules Herbaceous",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/herbaceous_relative_cover/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Herbaceous Relative Cover",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Herbaceous Relative Cover",
                    "fields": [],
                    "iconCls": "vibi_herbaceous_relative_cover_ic",
                    "id": "Herbaceous Relative Cover",
                    "idProperty": "id",
                    "name": "Herbaceous Relative Cover",
                    "pluralName": "Herbaceous Relative Cover",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/plot_module_woody/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Plot Module Woody",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Herbaceous Plot Module Woody",
                    "fields": [],
                    "iconCls": "vibi_plot_module_woody_ic",
                    "id": "Plot Module Woody",
                    "idProperty": "id",
                    "name": "Plot Module Woody",
                    "pluralName": "Plots Modules Woody",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/woody_importance_value/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Woody Importance Value",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Woody Importance Value",
                    "fields": [],
                    "iconCls": "vibi_woody_importance_value_ic",
                    "id": "Woody Importance Value",
                    "idProperty": "id",
                    "name": "Woody Importance Value",
                    "pluralName": "Woody Importance Values",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/biomass/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Biomass",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Biomass",
                    "fields": [],
                    "iconCls": "vibi_biomass_ic",
                    "id": "Biomass",
                    "idProperty": "id",
                    "name": "Biomass",
                    "pluralName": "Biomass",
                    "restful": true,
                    "root": "data"
                },
                {
                    "api": {},
                    "autoExpandColumn": "label",
                    "autoload": false,
                    "basePath": "mvc/vibi/metric_calculations/",
                    "canCreate": false,
                    "canDelete": false,
                    "canEdit": false,
                    "columns": [],
                    "createTitle": "Create a new Metric Calculation",
                    "displayField": "label",
                    "editHeight": 270,
                    "editTitle": "Edit Metric Calculation",
                    "fields": [],
                    "iconCls": "vibi_metric_calculations_ic",
                    "id": "Metrics Calculations",
                    "idProperty": "id",
                    "name": "Metric Calculation",
                    "pluralName": "Metrics Calculations",
                    "restful": true,
                    "root": "data"
                }
            ]
        },
        {
            "ptype": "mxp_updater",
            "geoBatchRestURL":"http://localhost/geobatch/rest/",
            "uploadUrl":"http://localhost/opensdi2-manager/mvc/admin/updater/upload",
            "flowId":"mapper",
            "setActiveOnOutput": false,
            "autoOpen": true,
            "closable": false,
            "showActionButton": false,
            "autoRefreshState": true
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
