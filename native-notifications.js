import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

window.NativeNotify = {
  isNative: () => Capacitor.isNativePlatform(),
  async request() {
    if (!Capacitor.isNativePlatform()) return false;
    let p = await LocalNotifications.checkPermissions();
    if (p.display !== 'granted') p = await LocalNotifications.requestPermissions();
    return p.display === 'granted';
  },
  async cancel() {
    if (!Capacitor.isNativePlatform()) return;
    try { await LocalNotifications.cancel({ notifications: [{ id: 1001 }] }); } catch (_) {}
  },
  async schedule(date, title, body) {
    if (!Capacitor.isNativePlatform()) return false;
    const ok = await this.request();
    if (!ok) return false;
    await this.cancel();
    if (!(date instanceof Date) || date.getTime() <= Date.now()) return false;
    await LocalNotifications.schedule({
      notifications: [{
        id: 1001,
        title,
        body,
        schedule: { at: date, allowWhileIdle: true },
        sound: undefined,
        extra: { type: 'period-reminder' }
      }]
    });
    return true;
  }
};
