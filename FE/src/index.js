import m from "mithril";
//var root = document.body
var myDataView = require("./views/showMyData")
var editMyHeaderDataView = require("./views/editMyHeaderData")
var editMyNavDataView = require("./views/editMyNavData")
var editMyAsideDataView = require("./views/editMyAsideData")
var editMySectionDataView = require("./views/editMySectionData")

m.route(document.body, "/resume", {
    "/resume": myDataView,
    "/editHeader": editMyHeaderDataView,
    "/editNav" : editMyNavDataView,
    "/editAside": editMyAsideDataView,
    "/editSection": editMySectionDataView,
})

//m.mount(root, myDataView);