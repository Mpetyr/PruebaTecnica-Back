# PruebaTecnica-Back Api Acronimos

Prueba técnica realizada en Nodejs

## Tecnologías utilizadas

Nodejs
Sql Server

## Instalación del proyecto

De la página oficial de Visual Studio Code descargar el programa.

Descargar el repositorio con git a través del siguiente comando:
**git clone https://github.com/Mpetyr/PruebaTecnica-Back.git**

*(O descargarlo como archivo comprimido en un zip)*

## Ejecución del programa

Ejecutar el comando npm i para la instalacion de todos los paquetes necesarios dentro del proyecto

Estando dentro de Visual Studio Code ejecutamos el comando npm run dev para iniciar el programa

## Estructura de base de datos requerida

Dentro de este mismo repositorio hay un archivo llamado **Script-Database.sql** que contiene las líneas requeridas para la creación de la base de datos en limpio.

## Variables de conexión con la base de datos

Dentro del proyecto en la carpetadatabases existe un archivo llamado **database.js** que contiene las siguientes variables de conexion:

    user: "sa",
    password: "123456789",
    server: "localhost",
    database: "historial"
  
  Luego de haber creado previavemente la base de datos, ajustar la cadena de conexion a los establecidos en su computador para Sql Server
  
  ## FIN DE LA DOCUMENTACIÓN
