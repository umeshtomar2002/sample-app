export interface OrientationHelper {
    resetValidOrientation(): void;
    isOrientationValid(): boolean;
}
export declare enum DeviceOrientation {
    PORTRAIT = 0,
    LANDSCAPE_LEFT = 1,
    LANDSCAPE_RIGHT = 2
}
export declare enum ImageRotation {
    ROTATION_0 = 0,
    ROTATION_90 = 90,
    ROTATION_270 = 270,
    ROTATION_NEGATIVE_90 = -90,
    ROTATION_LANDSCAPE_FALLBACK = 1
}
export declare const MAP_CONSTANT_ORIENTATION_TO_IMAGE_ROTATION: {
    0: ImageRotation[];
    2: ImageRotation[];
    1: ImageRotation[];
};
