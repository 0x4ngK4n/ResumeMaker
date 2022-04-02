// edit the view, lets start with your basic details
var m = require("mithril")
var myData = require("../models/queryData")

module.exports = {
    oninit: myData.getMyAsideData,
    view: function() {
        return myData.resumeAsideDataError? [m("alert", "uh-oh")] : (Object.keys(myData.resumeAsideData).length > 0) && m("form", {
            onsubmit: function(e) {
                e.preventDefault()
                myData.saveAside()
                //return myData.saveAsideError? [m("p","damn!")]: m("p", "all okay...")
            }
        }, [
            m("div", {class: "container"}, [
                m("div", {class: "form-group"}, [
                    m("br"),
                    m("h4","Edit Technical Skills & Certifications"),
                    m("label.label", myData.resumeAsideData.TechnicalSkills[0].skillName),
                    m("input.input[type=text][placeholder=Skill Value]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.TechnicalSkills[0].skillValue = e.target.value},
                        value: myData.resumeAsideData.TechnicalSkills[0].skillValue,
                    }),
                    m("label.label", myData.resumeAsideData.TechnicalSkills[1].skillName),
                    m("input.input[type=text][placeholder=Skill Value]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.TechnicalSkills[1].skillValue = e.target.value},
                        value: myData.resumeAsideData.TechnicalSkills[1].skillValue,
                    }),
                    m("label.label", myData.resumeAsideData.TechnicalSkills[2].skillName),
                    m("input.input[type=text][placeholder=Skill Value]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.TechnicalSkills[2].skillValue = e.target.value},
                        value: myData.resumeAsideData.TechnicalSkills[2].skillValue,
                    }),
                    m("label.label", myData.resumeAsideData.TechnicalSkills[3].skillName),
                    m("input.input[type=text][placeholder=Skill Value]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.TechnicalSkills[3].skillValue = e.target.value},
                        value: myData.resumeAsideData.TechnicalSkills[3].skillValue,
                    }),
                    m("label.label", myData.resumeAsideData.TechnicalSkills[4].skillName),
                    m("input.input[type=text][placeholder=Skill Value]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.TechnicalSkills[4].skillValue = e.target.value},
                        value: myData.resumeAsideData.TechnicalSkills[4].skillValue,
                    }),
                    m("hr"),
                    m("label.label", "Certificate Name"),
                    m("input.input[type=text][placeholder=Certificate Name]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.Certifications[0].certificateName = e.target.value},
                        value: myData.resumeAsideData.Certifications[0].certificateName,
                    }),
                    m("label.label", "Certificate Name"),
                    m("input.input[type=text][placeholder=Certificate Name]", {
                        class: "form-control", 
                        oninput: function(e) {myData.resumeAsideData.Certifications[1].certificateName = e.target.value},
                        value: myData.resumeAsideData.Certifications[1].certificateName,
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
