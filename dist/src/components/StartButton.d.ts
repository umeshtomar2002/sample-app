export interface IStartButton {
    isLoading: any;
    onClick: () => void;
    isMeasuring: boolean;
}
declare const StartButton: ({ isLoading, onClick, isMeasuring }: IStartButton) => JSX.Element;
export default StartButton;
