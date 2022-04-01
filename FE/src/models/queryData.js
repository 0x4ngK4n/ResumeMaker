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
    }
}
module.exports = getMyData