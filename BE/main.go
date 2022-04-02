package main

import (
	"fmt"
	"log"
	"os/exec"
	"runtime"

	"github.com/0x4ngk4n/ResumeMaker/BE/resumemaker"
	"github.com/gin-gonic/gin"
	"github.com/labstack/echo/v4"
)

func echoServer() {
	e := echo.New()
	e.Static("/", "../FE/")
	e.Start(":1323")
}

func openbrowser(url string) {
	var err error
	switch runtime.GOOS {
	case "linux":
		err = exec.Command("xdg-open", url).Start()
	case "windows":
		err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin":
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("unsupported platform")
	}
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	r := gin.Default()

	exec.Command("cd", "../FE")
	exec.Command("npm", "start")

	go echoServer()
	go openbrowser("http://127.0.0.1:1323/")

	r.GET("/getdata", resumemaker.GetData)
	r.POST("/updatedata", resumemaker.UpdateData)

	//Header element APIs
	r.GET("/getheader", resumemaker.GetHeaderData)
	r.OPTIONS("/updateheader", resumemaker.Preflight)
	r.POST("/updateheader", resumemaker.UpdateHeaderData)
	//Nav element APIs
	r.GET("/getnav", resumemaker.GetNavData)
	r.OPTIONS("/updatenav", resumemaker.Preflight)
	r.POST("/updatenav", resumemaker.UpdateNavData)
	//Aside element APIs
	r.GET("/getaside", resumemaker.GetAsideData)
	r.OPTIONS("/updateaside", resumemaker.Preflight)
	r.POST("/updateaside", resumemaker.UpdateAsideData)
	//Section element APIs
	r.GET("/getsection", resumemaker.GetSectionData)
	r.OPTIONS("/updatesection", resumemaker.Preflight)
	r.POST("/updatesection", resumemaker.UpdateSectionData)

	r.Run()
}
