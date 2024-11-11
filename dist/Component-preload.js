//@ui5-bundle manageassignments/Component-preload.js
sap.ui.require.preload({
	"manageassignments/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("manageassignments.Component",{metadata:{manifest:"json"}})});
},
	"manageassignments/ext/controller/AssignmentController.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{editAssignment:function(s){}}});
},
	"manageassignments/ext/controller/ObjectPageController.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("manageassignments.ext.controller.ObjectPageController",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()}}})});
},
	"manageassignments/i18n/i18n.properties":'# This is the resource bundle for manageassignments\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Manage Assignments\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,54\nflpTitle=Manage Assignments\n',
	"manageassignments/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"manageassignments","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.3","toolsId":"f35b42d3-eef2-4167-9b06-7d5255a522a1"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml","odataVersion":"4.0"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"crossNavigation":{"inbounds":{"Assignments-Manage":{"semanticObject":"Assignments","action":"Manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.130.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"manageassignments.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{"flexibleColumnLayout":{"defaultTwoColumnLayoutType":"TwoColumnsMidExpanded","defaultThreeColumnLayoutType":"ThreeColumnsMidExpanded"},"routerClass":"sap.f.routing.Router"},"routes":[{"pattern":":?query:","name":"EngagementsList","target":["EngagementsList"]},{"pattern":"Engagements({key}):?query:","name":"EngagementsObjectPage","target":["EngagementsList","EngagementsObjectPage"]}],"targets":{"EngagementsList":{"type":"Component","id":"EngagementsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Engagements","variantManagement":"Page","navigation":{"Engagements":{"detail":{"route":"EngagementsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"},"columns":{"DataField::ea::name":{"width":"20%"},"DataField::CustomerName":{"width":"20%"},"DataField::CRMId":{"width":"10%"},"DataField::isActive":{"width":"15%"},"DataField::isLead":{"width":"15%"},"DataField::leadEA":{"width":"20%"},"DataField::comment":{"width":"30%"}}}},"initialLoad":"Enabled","defaultTemplateAnnotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#table"}},"controlAggregation":"beginColumnPages","contextPattern":""},"EngagementsObjectPage":{"type":"Component","id":"EngagementsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Engagements","content":{"footer":{"actions":{"Save":{"text":"Save","press":".extension.manageassignments.ext.controller.EngagementsObjectController.saveAssignment","visible":true,"enabled":true}}},"header":{"actions":{"Edit":{"press":"manageassignments.ext.controller.AssignmentController.editAssignment","visible":true,"enabled":true,"text":"Edit","position":{"placement":"Before","anchor":"DeleteAction"}}}}}}},"controlAggregation":"midColumnPages","contextPattern":"/Engagements({key})"}}},"rootView":{"viewName":"sap.fe.templates.RootContainer.view.Fcl","type":"XML","async":true,"id":"appRootView"},"extends":{"extensions":{"sap.ui.controllerExtensions":{}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"manageassignments"}}'
});
//# sourceMappingURL=Component-preload.js.map