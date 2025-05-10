// NotificationFactory.js
class Notification {
    send() {
      throw new Error("This method must be overridden!");
    }
  }
  
  class EmailNotification extends Notification {
    send(message) {
      console.log(`Sending Email: ${message}`);
    }
  }
  
  class SMSNotification extends Notification {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  class PushNotification extends Notification {
    send(message) {
      console.log(`Sending Push Notification: ${message}`);
    }
  }
  
  class NotificationFactory {
    static createNotification(type) {
      switch(type) {
        case 'email':
          return new EmailNotification();
        case 'sms':
          return new SMSNotification();
        case 'push':
          return new PushNotification();
        default:
          throw new Error("Unknown notification type");
      }
    }
  }
  
  module.exports = NotificationFactory;
  