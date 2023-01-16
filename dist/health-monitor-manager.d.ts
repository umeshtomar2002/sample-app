import { HealthMonitorManagerOptions, HealthMonitorManagerType } from './health-monitor.types';
import { FaceSessionOptions, HealthMonitorSession } from './session/session.types';
import { AlertData } from './common/types';
export declare class HealthMonitorManager implements HealthMonitorManagerType {
    private static readonly MAX_SESSIONS;
    private static readonly MINIMUM_SAFARI_VERSION;
    private static readonly MINIMUM_CHROME_VERSION;
    private sessions;
    private onError;
    initialize({ licenseKey, productId, licenseInfo, }: HealthMonitorManagerOptions): Promise<void>;
    private initLicense;
    reset(): void;
    private stopAll;
    onLicenseError(errorData: AlertData): void;
    getMaxSessions(): number;
    createFaceSession(sessionOptions: FaceSessionOptions): Promise<HealthMonitorSession>;
    private validateOptions;
}
