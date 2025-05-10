# Factory Method - Implementación de Notificaciones

## Descripción

Este proyecto demuestra cómo aplicar el patrón de diseño **Factory Method** para gestionar el envío de notificaciones de diferentes tipos: **Email**, **SMS** y **Push**.

La implementación está hecha en **JavaScript**, y el patrón permite crear una clase base `Notification`, y diferentes subclases como `EmailNotification`, `SMSNotification`, y `PushNotification`, cada una encargada de enviar un tipo específico de notificación.

## Archivos

- **NotificationFactory.js**: Contiene la clase `NotificationFactory`, que decide qué tipo de notificación crear basado en el tipo proporcionado.
- **index.js**: Contiene ejemplos de cómo usar la fábrica para enviar notificaciones.

## Cómo ejecutar

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para iniciar el archivo `index.js`:
   ```bash
   node index.js
