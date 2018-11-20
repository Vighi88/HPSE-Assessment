# HPSE-Assessment - Step by Step Guide and E2E Automation Guide

############Step By Step Guide###############

#pull images from GIT
git clone https://github.com/Vighi88/HPSE-Assessment.git

#Build war
mvn clean install  [This is to be executed from where the pom.xml is located after pulling the files] 

#Copy Docker file inside the target folder of the project (/root/HPSE_Assessement/HPSE/target)

#Build Docker image 
docker build -t imageName:v1 .

#How to run the docker image? 
 . Execute the command "docker run -it --rm -p 8888:8080 imageName"

#How to access the webpage after running docker image? 
 . ipaddress of your VM followed by :8888/HPSE 
 . eg: http://10.194.129.64:8888/HPSE
 
 
#################END of Step by Step Guide################



##################E2E Automation Guide##########
Step-1 : Download the file Vignesh_HPSE.properties and hpse_cicd.sh files to your root folder.

Step-2 : run the command "sh hpse_cicd.sh" 

Step-3 : Open your Browser and access the URL http://yourVMIP:8888/HPSE

You can see the Page loaded.

Step-4 : Click on ShortestPath to provide input to identify shortest Path or Click User Guide menu to see the guide

