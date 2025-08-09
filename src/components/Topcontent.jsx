 export default function Topcontent({ convertEpochToTime, courseDetails }) {
  return (
    <div className="flex-row">
      <div>{new Date().toLocaleString().slice(0, 9)}</div>
      <div>{`${convertEpochToTime(
        courseDetails.startTime
      )} to ${convertEpochToTime(courseDetails.endTime)}`}</div>
    </div>
  );
};