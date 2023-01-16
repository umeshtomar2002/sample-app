import { Size } from '../common/types';
import { FrameExtractor, HandleFrame } from './camera.types';
export declare class VideoFrameExtractor implements FrameExtractor {
    private video;
    private imageDimensions;
    private lastFrameTime;
    private context;
    private startTime;
    private handleFrame;
    constructor(video: HTMLVideoElement, imageDimensions: Size);
    setFrameHandler(handleFrame: HandleFrame): void;
    start(): void;
    resetTime(): void;
    private isNewFrameReady;
    private extractFrameData;
    private setupCanvasContext;
    private logFrame;
}
