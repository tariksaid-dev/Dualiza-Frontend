# Docker prod build

La imagen corre por defecto en el puerto 8080. 

```bash
docker build -t dualiza-prod /path/with/dockerfile
docker container run -p hostPort:8080 dualiza-prod
```

# Estructura de carpetas

- **components**: Los distintos componentes reutilizables de la ui.
- **features**: Las distintas funcionalidades de nuestra web. Noticias, autenticación, panel de administración...
- **hooks**: Hooks globales reutilizables, como por ejemplo useLocalStorage, useOutsideClick...
- **pages**: Componente que se pasará por el router y que, junto a otros componentes de features y components, forman una view.
- **services**: conjunto de funciones que realiza una acción con una api externa: enviar mails, consultar información externa, usar orms...
- **utils**: conjunto de variables y funciones globales para realizar X tarea: constantes, formateo de monedas, manipulación de fechas...
