var m = require("mithril")

var getMyData = {
    myDataJson: {},
    getMyDataJson: function() {
        return (m.request({
            method: "GET",
            url: "http://127.0.0.1:8080/getdata",
            withCredentials: false,
        })
        .then(function(result){
            getMyData.myDataJson = result.Data
        })
        )
    },

    resumeHeaderData: {},
    getMyHeaderData: function() {
        return(m.request({
            method: "GET",
            url: "http://localhost:8080/getheader",
            withCredentials: false,
        }))
        .then(function(headerResult){
            getMyData.resumeHeaderData = headerResult
            //console.log(getMyData.resumeHeaderData)
        })
    },
    
    save: function() {
        return m.request({
            method: "POST",
            url: "http://localhost:8080/updateheader",
            body: getMyData.resumeHeaderData,
            withCredentials: false,
        })
    },

    resumeNavData: {},
    getMyNavData: function() {
        return(m.request({
            method: "GET",
            url: "http://localhost:8080/getnav",
            withCredentials: false,
        }))
        .then(function(navResult){
            getMyData.resumeNavData = navResult
        })
    },

    saveNav: function() {
        //console.log(getMyData.resumeNavData)
        return m.request({
            method: "POST",
            url: "http://localhost:8080/updatenav",
            body: getMyData.resumeNavData,
            withCredentials: false,
        })
    },

    resumeAsideData: {},
    resumeAsideDataError: "",
    getMyAsideData: function(){
        return(m.request({
            method: "GET",
            url: "http://localhost:8080/getaside",
            withCredentials: false,
        }))
        .then(function(asideResult){
            getMyData.resumeAsideData = asideResult
        })
        .catch(function(e){
            getMyData.resumeAsideDataError = e.code
        })
    },

    saveAsideError: "",
    saveAside: function(){
        return m.request({
            method: "POST",
            url: "http://localhost:8080/updateaside",
            body: getMyData.resumeAsideData,
            withCredentials: false,
        })
        .catch(function(e){
            getMyData.saveAsideError = e.code
        })
    }

}
module.exports = getMyData