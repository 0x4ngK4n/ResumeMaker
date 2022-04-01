package resumemaker

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"gopkg.in/yaml.v2"
)

// The defined structures map to the resume.yaml file
type bioData struct {
	Name            string                   `json: "name"`
	Title           string                   `json: "title"`
	AboutMe         string                   `json: "aboutme"`
	Details         []map[string]string      `json: "details"`
	TechnicalSkills []map[string]interface{} `json: "technicalskills"`
	Certifications  []map[string]string      `json: "certifications"`
	Experiences     []map[string]interface{} `json: "experiences"`
	Version         string                   `json: "version"`
}

type myData struct {
	Data bioData `json: "data"`
}

// structs mapped to HTML5 sections
type resumeHeaderData struct {
	Name    string `json: "name"`
	Title   string `json: "title"`
	AboutMe string `json: "aboutme"`
}

const resumeFileName = "resume.yaml"

// Helper Function(s); I am not exporting these
func getResumeLocation() (string, error) {
	pwd, err := os.Getwd()
	if err != nil {
		return "", err
	}
	resumeFileLocation := filepath.Join(pwd, resumeFileName)
	return resumeFileLocation, nil
}

func Preflight(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
	c.JSON(http.StatusOK, struct{}{})
}

func unMarshalResume() (myData, error) {
	var me myData
	resumeLocation, err := getResumeLocation()
	if err != nil {
		return myData{}, nil
	}
	resumeFile, err := ioutil.ReadFile(resumeLocation)
	if err != nil {
		return myData{}, nil
	}
	if err := yaml.Unmarshal(resumeFile, &me); err != nil {
		return myData{}, nil
	}
	return me, nil
}

// Function starts with upper-case letter and thus, exported for use in other Go files
func GetData(c *gin.Context) {
	var me myData
	me, err := unMarshalResume()
	if err != nil {
		log.Fatal(err)
		return
	}
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
	c.JSON(http.StatusOK, me)
}

func GetHeaderData(c *gin.Context) {
	var me myData
	var meHeaderData resumeHeaderData
	me, err := unMarshalResume()
	if err != nil {
		log.Fatal(err)
		return
	}
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")

	meHeaderData.AboutMe = me.Data.AboutMe
	meHeaderData.Name = me.Data.Name
	meHeaderData.Title = me.Data.Title

	c.JSON(http.StatusOK, meHeaderData)

}

func UpdateHeaderData(c *gin.Context) {
	var me myData
	var meHeaderData resumeHeaderData

	me, err := unMarshalResume()
	if err != nil {
		log.Fatal(err)
		return
	}

	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
	if err := c.BindJSON(&meHeaderData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": err.Error()})
		return
	}

	me.Data.AboutMe = meHeaderData.AboutMe
	me.Data.Name = meHeaderData.Name
	me.Data.Title = meHeaderData.Title

	updatedResume, err := yaml.Marshal(me)
	if err != nil {
		log.Fatal(err)
	}
	resumeLocation, err := getResumeLocation()
	if err != nil {
		log.Fatal(err)
	}
	if err := ioutil.WriteFile(resumeLocation, updatedResume, 0644); err != nil {
		log.Fatal(err)
	}
	c.JSON(http.StatusOK, gin.H{"status": "success"})

}

func GetNavData() {
	//ToDo
}

func UpdateNavData() {

}

func GetAsideData() {
	//ToDo
}

func UpdateAsideData() {
	//ToDo
}

func GetSectionData() {
	//ToDo
}

func UpdateSectionData() {
	//ToDo
}

func UpdateData(c *gin.Context) {
	var me myData

	if err := c.BindJSON(&me); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": err.Error()})
		return
	}
	// Update the resume
	// ToDo: Can I abstract the YAML marshal just like I did with unmarshal?
	updatedResume, err := yaml.Marshal(me)
	if err != nil {
		log.Fatal(err)
	}
	resumeLocation, err := getResumeLocation()
	if err != nil {
		log.Fatal(err)
	}
	if err := ioutil.WriteFile(resumeLocation, updatedResume, 0644); err != nil {
		log.Fatal(err)
	}
	c.JSON(http.StatusOK, gin.H{"status": "success"})
}
