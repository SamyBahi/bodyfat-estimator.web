import FormCard from "./FormCard";

const Lower = () => {
  return (
    <div className="md:col-span-1 md:row-span-2">
      <FormCard title="Lower Body">
        <div>
          <div className="flex h-10 w-full items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
            <input
              type="number"
              name=""
              id=""
              min={1}
              placeholder="Thigh"
              className="remove-arrow w-full bg-transparent focus:outline-none"
              aria-label="Thigh"
            />
          </div>
          <div className="flex space-x-3">
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                placeholder="Knee"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Knee"
              />
            </div>
            <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
              <input
                type="number"
                name=""
                id=""
                min={1}
                placeholder="Ankle"
                className="remove-arrow w-full bg-transparent focus:outline-none"
                aria-label="Ankle"
              />
            </div>
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default Lower;
