export function Data() {
  return (
    <div className="flex gap-4">
      <div className="w-min">
        <label htmlFor="name">Day</label>
        <input
          type="number"
          name="day"
          id="day"
          className="w-16 border rounded-lg py-1 px-4"
        />
      </div>
      <div className="w-min">
        <label htmlFor="name">Month</label>
        <input
          type="number"
          name="month"
          id="month"
          className="w-16 border rounded-lg py-1 px-4 "
        />
      </div>
      <div className="w-min">
        <label htmlFor="name">Year</label>
        <input
          type="number"
          name="year"
          id="year"
          className="w-16 border rounded-lg py-1 px-4"
        />
      </div>
    </div>
  );
}
