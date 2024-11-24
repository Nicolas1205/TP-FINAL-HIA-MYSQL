# Usar una imagen base de Node.js para la construcción
FROM node:18 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para la construcción del frontend
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Construir el proyecto
RUN npm run build

# Verificar si la carpeta de distribución se genera correctamente
RUN ls -al /app/dist

# Usar una imagen de servidor web para servir el frontend
FROM nginx:alpine

# Copiar los archivos de construcción al directorio predeterminado de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 3000

# Comando por defecto para Nginx
CMD ["nginx", "-g", "daemon off;"]
