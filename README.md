# HPSE-Assessment

#pull images from GIT
git pull https://github.com/Vighi88/HPSE-Assessment.git

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
