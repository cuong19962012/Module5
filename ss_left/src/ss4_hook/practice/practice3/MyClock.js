import useClock from "./UseClock";
function MyClock() {
    const [time, ampm] = useClock();
    return (
        <div id="Clock-style">
            {time}
            <span>{ampm}</span>
        </div>
    );
}
export default MyClock;