import { StorageKeys } from '@/enums';

export class SettingsManager {
  private readonly storage: Storage;
  private static instance: SettingsManager;

  private constructor() {
    this.storage = window.localStorage;
  }

  public static getInstance(): SettingsManager {
    if (!SettingsManager.instance) {
      SettingsManager.instance = new SettingsManager();
    }

    return SettingsManager.instance;
  }

  public setItem<T>(key: StorageKeys, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: StorageKeys): T | null {
    const item = this.storage.getItem(key);
    if (!item) {
      return null;
    }
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error parsing setting for key: ${key}`, error);
      return null;
    }
  }

  public removeItem(key: StorageKeys): void {
    this.storage.removeItem(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}
