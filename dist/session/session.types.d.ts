import { VitalSigns, VitalSignsResults, AlertData } from '../common/types';
import { DeviceOrientation } from '../device/types';
export interface OnFaceDetected {
    (isFaceRect: boolean): void;
}
export interface OnVitalSign {
    (VitalSign: VitalSigns): void;
}
export interface OnFinalResults {
    (vitalSignsResults: VitalSignsResults): void;
}
export interface OnError {
    (errorData: AlertData): void;
}
export interface OnWarning {
    (warningData: AlertData): void;
}
export declare type ErrorListener = () => void;
export interface OnStateChange {
    (state: SessionState): void;
}
export interface FaceSessionOptions {
    input: HTMLVideoElement;
    cameraDeviceId: string;
    processingTime: number;
    onError?: OnError;
    onWarning?: OnWarning;
    onFaceDetected?: OnFaceDetected;
    onVitalSign?: OnVitalSign;
    onFinalResults?: OnFinalResults;
    onStateChange?: OnStateChange;
    orientation?: DeviceOrientation;
}
export interface HealthMonitorSession {
    start(): void;
    stop(): void;
    terminate(): void;
    getState(): SessionState;
    addOnStateChangeListener(onStateChange: OnStateChange): any;
}
export declare enum SessionState {
    INIT = 0,
    ACTIVE = 1,
    MEASURING = 2,
    STOPPING = 3,
    TERMINATED = 4
}
export declare enum HealthMonitorSessionMode {
    FACE_FRONT_CAMERA = 0
}
