# docker-project

> pull docker-project   
> npm install    
> node routs/server.js   

> curl localhost:8080/hello   
> curl localhost:8080/hello?name="AliMahmudi"   
> curl localhost:8080/author   



# Dockerfile:

> mkdir myTestServer  
> cd myTestServer   
> vim Dockerfile  

FROM https://github.com/z-mansoori/docker-project.git   
RUN cd /routs &&\   
  mkdir testapp &&\   
  cd testapp &&\    
  echo "HELLO" > test.txt   
