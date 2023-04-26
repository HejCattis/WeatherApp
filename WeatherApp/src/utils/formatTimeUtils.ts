import useStoreUnit from "../store/storeUnits";

export const formatTime = (timestamp: number) => {
    const { storeUnit } = useStoreUnit();
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    
    if (storeUnit === 'metric') {
        return `${hours.toString().padStart(2, '0')}:${minutes}`;
    } else {
        const isPM = hours >= 12;
        const amPM = isPM ? "pm" : "am";
        const twelveHour = (hours % 12) || 12;
        return `${twelveHour.toString().padStart(2, '0')}:${minutes} ${amPM}`;
    }
};
