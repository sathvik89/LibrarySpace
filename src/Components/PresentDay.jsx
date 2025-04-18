export default function PresentDay() {
  const d = new Date();
  return (
    <div>
      <span style={{ marginRight: "30px" }}>
        Date: {`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()}`}
      </span>
      <span>
        Day:{" "}
        {d.getDay() == 1
          ? "Monday"
          : d.getDay() == 2
          ? "Tuesday"
          : d.getDay() == 3
          ? "Wednesday"
          : d.getDay() == 4
          ? "Thursday"
          : d.getDay() == 5
          ? "Friday"
          : d.getDay() == 6
          ? "Saturday"
          : "Sunday"}
      </span>
    </div>
  );
}
