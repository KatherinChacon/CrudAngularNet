Instrucciones de ejecución local

Con el fin de orientar al usuario es necesario realizar la clonación del repositorio, una vez clonado el repositorio en su máquina local dar continuidad a los siguientes pasos:

1. Ingrese a la carpeta donde se clonó el repositorio
2. Posteriormente visualizará tres carpetas.
3. Ingresar a la carpeta denominada "ApiProductos"
4. Dar doble clic en la solución denominada "ApiProductos.sln"
Interacciones en Framework Visual Studio 
6. Una vez la solución esté abierta en .net dar doble clic al archivo denominado "appsettings.json", el cual está ubicado en el explorador de soluciones.
7. En el archivo "appsettings.json" se encuentra ubicada la cadena de conexión de la base de datos denominada "ConnectionStrings", es necesario realizar el cambio de la variable Server de acuerdo a la instancia del servidor local de base de datos que tenga en su equipo.
8. Posteriormente, en el explorador de soluciones visualizará una carpeta denominada "Migrations", es necesario dar clic derecho y eliminar.
   ![image](https://github.com/KatherinChacon/CrudAngularNet/assets/127790075/8231738e-3e60-4423-9932-29517dde3bb8)
9. Una vez elimianda la carpeta "Migrations", dirigirse a Herramientas ubicada en la parte superior de Visual Studio, dar clic en Herramientas>Administrador de paquetes Nuget>Consola de administrador de paquetes.
10. Una vez se visualice la Consola de administrador de paquetes, colocar el comando "Add-Migration initial" y dar enter.
11. Posteriormente esperar que finalice el proceso y se visualiza una carpeta denominada "Migrations".
12. Nuevamente en la Consola de administrador de paquetes, colocar el comando "Update-database" y dar enter.
13. Una vez se finalice con éxito este proceso, se podrá visualizar la creación de la base de datos en Sql Server.
14. Finalmente, ejecutar el proyecto dando clic en el icono de play ubicado en la parte superior de Visual Studio.
Interacciones en Visual Studio Code
15. Abra Visual Studio Code
16. Clic en Abrir Carpeta y buscar la ruta donde se clonó el repositorio carpeta denominada "FrontendProducto".
17. Una vez se tenga la carpeta abierta en visual Studio Code, abrir una Terminal.
18. colocar los siguientes comando:
    ng install -g @angular/cli@17, espere hasta que finalice el proceso y permita ingresar el sisguiente comando.
    ng add @angular/material@17, espere hasta que finalice el proceso.
20. Finalmente, colocar el comando servidor ng server --open para ejecutar el servidor, esperar hasta que se abra una ventana del navegador predeterminado y podra realizar una interacción con el sistema, generando la creación, actualización, eliminación y listado d elos productos. 
