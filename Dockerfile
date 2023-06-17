#imagen

# version de node
FROM node:18

#directorio de trabajo
#DESPLIEGUE
WORKDIR /usr/src/app

#copiar archivo packen json  por que esta las depedencias de lo que ha instalado, el artirisco copia los dos acrchivos que hay en proyecto json
#ORIGEN
COPY package*.json ./  
# cuando ya estay le decimos run para que arranque
RUN npm install

#Copiar todas las carptetas(DONDE UNO INDIQUE)
COPY . .

#Para escoger el puerto, es donde se va a ejecutar dentro del contenedor  
EXPOSE 4002

# comando predeterminado que se ejecutara
CMD ["node", "server.js"]


