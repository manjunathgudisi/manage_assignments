sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        editEngagement: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
