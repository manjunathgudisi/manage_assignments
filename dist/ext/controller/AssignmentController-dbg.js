sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        editAssignment: function(oEvent) {
            // var oModel = this._view.getModel();
            // MessageToast.show(oModel);
            //MessageToast.show("Custom handler invoked.");
        }
    };
});


// sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
// 	'use strict';

// 	return ControllerExtension.extend('manageassignments.ext.controller.ObjectPageController', {
// 		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
// 		override: {
// 			/**
//              * Called when a controller is instantiated and its View controls (if available) are already created.
//              * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
//              * @memberOf manageassignments.ext.controller.ObjectPageController
//              */
// 			onInit: function () {
// 				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
// 				var oModel = this.base.getExtensionAPI().getModel();
// 			},

//             editAssignment: function(oEvent) {
//                 MessageToast.show("Custom handler invoked.");
//             }
// 		}
// 	});
// });
