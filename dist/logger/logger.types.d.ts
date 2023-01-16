import { LogFile, HealthMonitorMessage } from '@binah/wasm';
import { HealthMonitorCodes, VitalSigns } from '../index';
export interface LogAlgoMeasurements {
    (): any;
}
export interface Log {
    index: number;
    time: string;
    heartRate: number;
    breathingRate: number;
    oxygenSaturation: number;
    sdnn: number;
    stressLevel: number;
    stressIndex: number;
    bloodPressureSYS: number;
    bloodPressureDIA: number;
    meanRri: number;
    rmssd: number;
    sd1: number;
    sd2: number;
    prq: number;
    pnsIndex: number;
    pnsZone: number;
    snsIndex: number;
    snsZone: number;
    wellnessIndex: number;
    wellnessLevel: number;
    lfhf: number;
    warningsErrorsCode: number;
    batteryLevel: number;
    temperature: number;
}
export interface SdkLoggerType {
    start: () => void;
    stop: () => LogFile[];
    logMessage: (messageType: HealthMonitorMessage, message: any) => void;
    logReport: (report: VitalSigns) => void;
    logWarning: (errorCode: HealthMonitorCodes) => void;
    logError: (errorCode: HealthMonitorCodes) => void;
    getFileFormattedDate: () => string;
}
