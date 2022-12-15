import { Notification } from '../types/Notification';
import { NotificationManager } from 'react-notifications';

export const createNotification = (type) => {
  switch (type) {
    case Notification.checkout:
      NotificationManager.success(
        'Please check your email', 'Your order has been placed!', 3000,
      );
      break;
    case Notification.addFavorites:
      NotificationManager.info('Added to Favorites', '', 2000);
      break;
    case Notification.removeFavorites:
      NotificationManager.warning('Removed from Favorites', '', 2000);
      break;
    case Notification.addCart:
      NotificationManager.info('Added to Cart', '', 2000);
      break;
    case Notification.removeCart:
      NotificationManager.warning('Removed from Cart', '', 2000);
      break;
    default:
      break;
  }
};
