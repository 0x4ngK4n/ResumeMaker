var m = require("mithril")
const { myDataJson } = require("../models/queryData")
var myData = require("../models/queryData")


module.exports = {
    oninit: myData.getMyDataJson,
    view: function() {
        // I am going to use html 5 layout inside 'main' tag
        // Thanks Mithril chat @Osban for suggesting to use 'Object.keys(myData.myDataJson).length > 0' since m.request is a promise and returns {} until it resolves
        return (Object.keys(myData.myDataJson).length > 0) && (m("main", [
            m("div", {class: "container-fluid"}, [
                m("div", {class: "row"}, [
                    // Header element
                    m("header",{class: "mb-0 pb-0 col-sm-12 bg-primary text-white jumbotron"},[ //Applied the mb pb classes here to trim the margin
                        m("h1", myData.myDataJson.Name),
                        m("h4", myData.myDataJson.Title),
                        m("hr"),
                        m("h5", myData.myDataJson.AboutMe),
                    ]),
                ]),
                m("div", {class: "pt-2 pb-2 row justify-content-center bg-warning text-white"}, [
                    // Nav element
                    m("nav", {class: "col-sm-12 navbar-nav navbar-expand-sm"}, [
                        myData.myDataJson.Details.map(function(detail) {
                            return m("li", {class: "col-sm-3 text-center nav-item"}, [ 
                                m("a", {class: detail.detailIcon, href: detail.detailHref}, " " + detail.detailValue) 
                            ]);
                        }),
                    ]),
                ]),
                m("div", {class: "row"}, [
                    // Aside element for skills
                    m("aside", {class: "col-sm-3 bg-info text-white"}, [
                        m("ul", [
                            m("p", {class: "font-weight-bold"}, "Key Skills"),
                            m("hr"),
                            myData.myDataJson.TechnicalSkills.map(function(technicalSkill) {
                                return m("li", {class: "list-unstyled"}, [
                                    technicalSkill.skillName + ": ",
                                    m("br"),
                                    m("input[type=range]", {class: "form-range", min: "0", max: "10", value: technicalSkill.skillValue}, technicalSkill.skillName ),
                                ])
                            }),
                            m("br"),
                            m("br"),
                            m("p", {class: "font-weight-bold"}, "Certifications"),
                            m("hr"),
                            myData.myDataJson.Certifications.map(function(certifications) {
                                return m("li", {class: "list-unstyled"}, [
                                    certifications.certificateName,
                                ])
                            }),
                        ]),
                    ]),
                    // Section element for experience
                    m("section", {class: "col-sm-9 bg-secondary text-white"}, [
                        m("p","Experience"),
                        m("hr"),
                        myData.myDataJson.Experiences.reverse().map(function(experience) {
                            return m("p", [
                                m("i", {class: "font-weight-bolder"}, experience.companyname + " - " + experience.companyduration),
                                m("br"),
                                m("i", {class: "font-weight-bold"}, experience.companydesignation),
                                m("br"),
                                m("i", {class: "fa fa-map-marker font-weight-bold"}, " " + experience.companylocation),
                                m("br"),
                                m ("p", {class: "lead"}, experience.companyduties),
                            ])
                        })
                    ]),
                ]),
                m("div", {class: "row bg-dark text-white"}, [
                    // Footer element
                    m("footer", {class: "pb-2 pt-2 col-sm-12"}, [
                        m("p", {class: "font-italic font-weight-light text-right"}, "built via resume maker " + myData.myDataJson.Version),
                    ]),
                ]),
            ]),
        ]))
    }
}