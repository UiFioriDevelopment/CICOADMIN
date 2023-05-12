sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onInit: function(oEvent) {
            this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ListReport.view.ListReport::ZC_PP_RAP_CICO_MAIN_ADM--deleteEntry").setVisible(false);
            // this.extensionAPI.attachPageDataLoaded(this._pageDataLoaded.bind(this));
        }
    };
});