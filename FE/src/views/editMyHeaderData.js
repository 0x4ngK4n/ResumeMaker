// edit the view, lets start with your basic details
var m = require("mithril")
var myData = require("../models/queryData")

module.exports = {
    oninit: myData.getMyHeaderData,
    view: function() {
        return (Object.keys(myData.resumeHeaderData).length > 0) && m("form", {
            onsubmit: function(e) {
                e.preventDefault()
                myData.save()
            }
        }, [
            m("div", {class: "container"}, [
                m("br"),
                m("h4","Edit Basic Information"),
                m("div", {class: "form-group"}, [
                    m("label.label", "Name"),
                    m("input.input[type=text][placeholder=Name]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeHeaderData.Name = e.target.value},
                        value: myData.resumeHeaderData.Name,
                    }),
                    m("label.label", "Title"),
                    m("input.input[type=text][placeholder=Title]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeHeaderData.Title = e.target.value},
                        value: myData.resumeHeaderData.Title
                    }),
                    m("label.label", "About Me"),
                    m("input.input[type=text][placeholder=About Me]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeHeaderData.AboutMe = e.target.value},
                        value: myData.resumeHeaderData.AboutMe
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
