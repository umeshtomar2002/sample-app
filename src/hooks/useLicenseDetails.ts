import { createLocalStorageStateHook } from 'use-local-storage-state';

export const DEFAULT_MEASUREMENT_DURATION = 60;
export const MIN_MEASUREMENT_DURATION = 20;
export const MAX_MEASUREMENT_DURATION = 180;

export const useLicenseKey = createLocalStorageStateHook('licenseKey', '226168-2F4AB2-447697-F47DD9-909A40-CBCD61');
export const useProductId = createLocalStorageStateHook('productId', null);
export const useMeasurementDuration = createLocalStorageStateHook(
  'measurementDuration',
  DEFAULT_MEASUREMENT_DURATION,
);
