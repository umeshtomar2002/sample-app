import { FaceSessionOptions, HealthMonitorSession } from './session.types';
export declare class SessionFactory {
    static createFaceSession({ input, cameraDeviceId, onFaceDetected, processingTime, onVitalSign, onFinalResults, onError, onWarning, onStateChange, orientation, }: FaceSessionOptions): Promise<HealthMonitorSession>;
    private static createCamera;
}
