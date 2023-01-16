import { HealthMonitorSession, OnStateChange, OnWarning, SessionState } from './session.types';
import { HealthMonitorCamera } from '../camera/camera.types';
import { HealthMonitorProcessor } from '../processor/processor.types';
import { OrientationHelper } from '../device/types';
export declare class HealthMonitorSessionImpl implements HealthMonitorSession {
    private readonly processorManager;
    private readonly healthMonitorCamera;
    private readonly processingTime;
    private readonly orientationHelper;
    private readonly onWarning;
    private state;
    private timeoutId;
    constructor(processorManager: HealthMonitorProcessor, healthMonitorCamera: HealthMonitorCamera, processingTime: number, orientationHelper: OrientationHelper, onWarning: OnWarning);
    addOnStateChangeListener(onStateChange: OnStateChange): void;
    getState(): SessionState;
    init(): Promise<void>;
    start(): void;
    stop(): void;
    private stopAsync;
    terminate(): void;
    private validate;
    private startProcessingTimeout;
    private startAsync;
    private updateLicense;
}
