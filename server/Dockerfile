# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para la aplicación
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000


# Comando para iniciar la aplicación
#CMD ["sh -c"sleep 240", "&&", "npm", "start"]
CMD sh -c "sleep 240 && npm start"
