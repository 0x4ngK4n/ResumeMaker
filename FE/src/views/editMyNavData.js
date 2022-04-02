// edit the view, lets start with your basic details
var m = require("mithril")
var myData = require("../models/queryData")

module.exports = {
    oninit: myData.getMyNavData,
    view: function() {
        return (Object.keys(myData.resumeNavData).length > 0) && m("form", {
            onsubmit: function(e) {
                e.preventDefault()
                myData.saveNav()
            }
        }, [
            m("div", {class: "container"}, [
                m("br"),
                m("h4", "Edit Your Details"),
                m("hr"),
                m("div", {class: "form-group"}, [
                    m("label.label", "Github Link"),
                    m("input.input[type=text][placeholder=Github Link]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeNavData.Details[0].detailValue = e.target.value},
                        value: myData.resumeNavData.Details[0].detailValue,
                    }),
                    m("label.label", "Email"),
                    m("input.input[type=text][placeholder=Email]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeNavData.Details[1].detailValue = e.target.value},
                        value: myData.resumeNavData.Details[1].detailValue
                    }),
                    m("label.label", "Location"),
                    m("input.input[type=text][placeholder=Location]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeNavData.Details[2].detailValue = e.target.value},
                        value: myData.resumeNavData.Details[2].detailValue
                    }),
                    m("label.label", "Contact Number"),
                    m("input.input[type=text][placeholder=Contact Number]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeNavData.Details[3].detailValue = e.target.value},
                        value: myData.resumeNavData.Details[3].detailValue
                    }),
                    m("br"),
                    m("button.button[type=submit]", {class: "btn btn-primary"}, "Save"),
                    m("button.button[type=submit]", {class: "ml-2 btn btn-primary"}, [
                        m(m.route.Link, {href: "/resume", class: "text-white"}, [
                            "Back"
                        ])
                    ]),
                ])
            ])
        ])
    }
}
