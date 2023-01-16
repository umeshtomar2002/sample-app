interface IInfoBar {
    isMeasuring: boolean;
    durationSeconds: number;
    showTimer: boolean;
    offlineMeasurements: {
        measurementSecondsEnd: number;
        offlineMeasurements: number;
        offlineMeasurementsRemaining: number;
    };
}
declare const InfoBar: ({ isMeasuring, durationSeconds, showTimer, offlineMeasurements, }: IInfoBar) => JSX.Element;
export default InfoBar;
