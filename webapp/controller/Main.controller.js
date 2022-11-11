sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sample.project.salesdocumentmanagement.controller.Main", {
            onInit: function () {
            var oTableModel = new JSONModel()
            this.getView().setModel(oTableModel, 'Data');
            this.getTableRecords();
            },
            getTableRecords: function(){
                var oDataModel = this.getOwnerComponent().getModel();
                oDataModel.read('/salesheaderSet', {
                    success: function(oData){
debugger
            this.getView().getModel('Data').setProperty('/tabledata', oData.results)
            this.getView().getModel('Data').setProperty('/tabledata', [{Vbeln: '1234'}])
                    }.bind(this), 
                    error: function(oError){
debugger
                    }.bind(this)
                })
            },
            onTableRowSelect: function(){
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Detail");
            }
        });
    });
