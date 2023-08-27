import FormCard from "./FormCard";

const Upper = () => {
  return (
    <div className="md:col-span-2 md:row-span-2">
      <FormCard title="Upper Body">
        <div>
          <div className="flex h-10 w-full items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
            <input
              type="number"
              name=""
              id=""
              min={1}
              max={100}
              placeholder="Neck"
              className="remove-arrow w-full bg-transparent focus:outline-none"
              aria-label="Neck"
            />
          </div>
          <div className="flex space-x-3">
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={100}
                placeholder="Chest"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Chest"
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={100}
                placeholder="Waist"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Waist"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={100}
                placeholder="Biceps"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Biceps"
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={100}
                placeholder="Forearm"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Forearm"
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                max={100}
                placeholder="Wrist"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Wrist"
              />
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default Upper;
