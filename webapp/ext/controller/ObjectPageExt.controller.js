sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onInit: function (oEvent) {
            // MessageToast.show("Custom handler invoked.");
            this.extensionAPI.attachPageDataLoaded(this._pageDataLoaded.bind(this));

        },

        _pageDataLoaded: function (oEvt) {
            var curObj = oEvt.context.getObject();
            if (curObj.Status === "CONFIRMED") {
                this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--edit").setVisible(false);

                this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--delete").setVisible(false);

                // this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--action::cds_zsd_pp_cico_main_adm.cds_zsd_pp_cico_main_adm_Entities::reprocessIncompleteOrders").setVisible(false);
            } else if (curObj.Status === "INCOMPLETE") {
                this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--edit").setVisible(true);

                this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--delete").setVisible(true);

                // this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--action::cds_zsd_pp_cico_main_adm.cds_zsd_pp_cico_main_adm_Entities::reprocessIncompleteOrders").setVisible(true);
            } else {
                this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--edit").setVisible(true);

                this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--delete").setVisible(true);

                // this.byId("com.nttdata.acumed.rapcicoadmin::sap.suite.ui.generic.template.ObjectPage.view.Details::ZC_PP_RAP_CICO_MAIN_ADM--action::cds_zsd_pp_cico_main_adm.cds_zsd_pp_cico_main_adm_Entities::reprocessIncompleteOrders").setVisible(false);
            }

            this.getOwnerComponent().getModel().attachBatchRequestCompleted(function (oEvent) {
                var aRequests = oEvent.getParameters().requests;
                if (aRequests && aRequests.length > 0) {
                    for (var i = 0; i < aRequests.length; i++) {
                        var vMethod = aRequests[i].method;
                        var vUrl = aRequests[i].url;
                        if (( vMethod === "MERGE") ) { //vMethod === "GET" || vMethod === "POST" ||
                            this.extensionAPI.refresh();
                            // this.extensionAPI.attachPageDataLoaded(this._pageDataLoaded.bind(this));  
                        }
                    }
                }
            }.bind(this));
        }
    };
});