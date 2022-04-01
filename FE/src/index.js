import m from "mithril";
var root = document.body
var myDataView = require("./views/showMyData")
var editMyHeaderDataView = require("./views/editMyHeaderData")

m.route(document.body, "/resume", {
    "/resume": myDataView,
    "/editHeader": editMyHeaderDataView,
})

//m.mount(root, myDataView);