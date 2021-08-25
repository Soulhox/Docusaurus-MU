---
sidebar_position: 1
---
# Archivos spec de OpenApi

Utilizando **Redocusaurus** es posible crear páginas que utilizan archivos de especificaciones OpenApi, que pueden ser generados manualmente, mediante un plugin, o desde **Swagger**. 

## Spec estáticos:
Dentro de carpetas en el proyecto de esta página web se pueden almacenar archivos JSON o YAML que correspondan a especificaciones openApi, de tal forma que sea posible acceder a ellos localmente sin realizar ninguna modificación. Ver ejemplo **[aquí](https://soulhox.github.io/Docusaurus-MU/spec/)**

## Spec dinámicos:

Algunos archivos de especificaciones suelen almacenarse en una URL y llamarse desde ella, de esta forma si el spec requiere un cambio, solo es necesario modificar el archivo que se encuentra online, y no este proyecto. Ver ejemplo **[aquí](https://soulhox.github.io/Docusaurus-MU/specUrl/)**