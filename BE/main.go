package main

import (
	"github.com/0x4ngk4n/ResumeMaker/BE/resumemaker"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/getdata", resumemaker.GetData)
	r.POST("/updatedata", resumemaker.UpdateData)
	r.GET("/getheader", resumemaker.GetHeaderData)
	r.OPTIONS("/updateheader", resumemaker.Preflight)
	r.POST("/updateheader", resumemaker.UpdateHeaderData)
	// testing SPA deploy
	// r.Use(spa.Middleware("/index.html", "../FE/index.html"))
	r.Run()

	//ToDo: Open Browser
}
