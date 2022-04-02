// edit the view, lets start with your basic details
var m = require("mithril")
var myData = require("../models/queryData")

module.exports = {
    oninit: myData.getMySectionData,
    view: function() {
        return myData.resumeSectionDataError? [m("alert", "uh-oh")] : (Object.keys(myData.resumeSectionData).length > 0) && m("form", {
            onsubmit: function(e) {
                e.preventDefault()
                //myData.Experiences.reverse()
                myData.saveSection()
                //return myData.saveAsideError? [m("p","damn!")]: m("p", "all okay...")
            }
        }, [
            m("div", {class: "container"}, [
                m("div", {class: "form-group"}, [
                    m("br"),
                    m("h4","Edit Career Experience"),
                    m("hr"),
                    //console.log(myData.resumeSectionData.Experiences),
                    myData.resumeSectionData.Experiences.map(function(experience){
                        //console.log(experience.companyname)
                        return m("div", [
                            m("label.label", "Company Name"),
                            m("input.input[type=text][placeholder=Company Name]", {
                                class: "form-control", 
                                oninput: function(e) {experience.companyname = e.target.value},
                                value: experience.companyname,
                            }),
                            m("label.label", "Company Designation"),
                            m("input.input[type=text][placeholder=Company Designation]", {
                                class: "form-control", 
                                oninput: function(e) {experience.companydesignation = e.target.value},
                                value: experience.companydesignation,
                            }),
                            m("label.label", "Company Duration"),
                            m("input.input[type=text][placeholder=Company Duration]", {
                                class: "form-control", 
                                oninput: function(e) {experience.companyduration = e.target.value},
                                value: experience.companyduration,
                            }),
                            m("label.label", "Company Location"),
                            m("input.input[type=text][placeholder=Company Location]", {
                                class: "form-control", 
                                oninput: function(e) {
                                    experience.companylocation = e.target.value
                                    console.log(experience.companylocation)
                                    console.log(e.target.value)
                                },
                                value: experience.companylocation,
                            }),

                            m("label.label", "Company Duties"),
                            m("textarea[rows=5][placeholder=Company Duties]", {
                                class: "form-control", 
                                oninput: function(e) {
                                    experience.companyduties = e.target.value
                                },
                                value: experience.companyduties,
                            }),
                            m("hr")
                        ])
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
