import { AlertData } from '../index';
export interface LicenseInfo {
    onEnabledVitalSigns?: (EnabledVitalSigns: any) => void;
    onOfflineMeasurement?: (OfflineMeasurements: any) => void;
    onActivation?: (activationId: string) => void;
}
export interface LicenseOptions {
    readonly licenseKey: string;
    readonly productId: string;
    readonly licenseInfo?: LicenseInfo;
    readonly onLicenseError?: (errorData: AlertData) => void;
}
export interface EnabledVitalSigns {
    isEnabledHeartRate: boolean;
    isEnabledBreathingRate: boolean;
    isEnabledSpo2: boolean;
    isEnabledSdnn: boolean;
    isEnabledStressLevel: boolean;
    isEnabledStressIndex: boolean;
    isEnabledBloodPressure: boolean;
    isEnabledRri: boolean;
    isEnabledMeanRri: boolean;
    isEnabledRmssd: boolean;
    isEnabledSd1: boolean;
    isEnabledSd2: boolean;
    isEnabledPrq: boolean;
    isEnabledSnsIndex: boolean;
    isEnabledSnsZone: boolean;
    isEnabledPnsIndex: boolean;
    isEnabledPnsZone: boolean;
    isEnabledWellnessLevel: boolean;
    isEnabledWellnessIndex: boolean;
    isEnabledLfhf: boolean;
}
export interface OfflineMeasurements {
    offlineMeasurements: number;
    offlineMeasurementsRemaining: number;
    measurementSecondsEnd: number;
}
export interface OnStatusUpdate {
    (isMeasuringAllowed: boolean): void;
}
export declare enum CryptlexErrors {
    NO_ERROR = 0,
    ACTIVATION_LIMIT_REACHED = 2002,
    METER_ATTRIBUTE_USES_LIMIT_REACHED = 2003,
    AUTHENTICATION_FAILED = 2004,
    INVALID_PRODUCT_ID = 2006,
    INVALID_LICENSE_KEY = 2007,
    INVALID_LICENSE_TYPE = 2008,
    VM_ACTIVATION_NOT_ALLOWED = 2009,
    REVOKED_LICENSE = 2010,
    COUNTRY_NOT_ALLOWED = 2011,
    IP_ADDRESS_NOT_ALLOWED = 2012,
    TRIAL_NOT_ALLOWED = 2014,
    TRIAL_ACTIVATION_LIMIT_REACHED = 2015,
    SERVER_RESPONSE_FAILED_AUTHENTICATION = 2016,
    LICENSE_EXPIRED = 2017,
    LICENSE_SUSPENDED = 2018,
    TOKEN_EXPIRED = 2020,
    DEVICE_WAS_DEACTIVATED = 2021,
    UNKNOWN_ERROR_OCCURRED = 2023
}
