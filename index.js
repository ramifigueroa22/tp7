// index.js
const NotificationFactory = require('./NotificationFactory');

// Función para enviar una notificación de tipo seleccionado
function sendNotification(type, message) {
  const notification = NotificationFactory.createNotification(type);
  notification.send(message);
}

// Ejemplo de uso
sendNotification('email', 'Welcome to our platform!');
sendNotification('sms', 'Your code is 123456');
sendNotification('push', 'You have a new message!');
