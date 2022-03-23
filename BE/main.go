package main

import (
	"github.com/0x4ngk4n/ResumeMaker/BE/resumemaker"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/getdata", resumemaker.GetData)
	r.POST("/updatedata", resumemaker.UpdateData)

	r.Run()

	//ToDo: Open Browser
}
