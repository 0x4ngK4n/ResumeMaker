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
}
module.exports = getMyData