import FormCard from "@/components/form/FormCard";
import Switch from "@/components/form/Switch";
import { Logo } from "@/components/svgs";

export default function Home() {
  return (
    <main className="relative -top-[4rem] items-center flex flex-col h-full p-6 flex-1 w-full lg:static lg:overflow-auto">
      <div className="w-full max-w-[1000px]">
        <Logo className="text-4xl fill-secondary lg:hidden mb-6" />
        <div className="hidden md:block">
          <h1 className="text-4xl mb-6">Estimate your bodyfat percentage</h1>
          <p className="opacity-60 font-medium">
            This web app uses artificial intelligence to estimate your density
            taking your mensurations as an input, and computes your bodyfat
            thanks to Siri's formula (1956).
          </p>
          <p className="opacity-60 font-medium my-6">
            To use this tool, just enter your mensurations in the form below and
            click Estimate to get your results.
          </p>
        </div>
        <form
          action=""
          className="w-full grid grid-cols-1 gap-3 md:grid-cols-3 max-w-7xl"
        >
          <div>
            <FormCard title="Units">
              <div className="flex w-full space-x-3">
                <Switch first="lbs" second="kg" />
                <Switch first="in." second="cm" />
              </div>
            </FormCard>
          </div>
          <div className="md:col-span-2">
            <FormCard title="General Information">
              <div className="md:flex md:space-x-3">
                <div className="flex h-10 w-fullitems-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow md:w-1/3">
                  <input
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={100}
                    placeholder="Age"
                    className="remove-arrow w-full bg-transparent focus:outline-none"
                    aria-label="Age"
                  />
                </div>
                <div className="flex space-x-3 w-full">
                  <div className="flex h-10 w-1/2  items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow md:w-full">
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={100}
                      placeholder="Height"
                      className="remove-arrow w-full bg-transparent focus:outline-none"
                      aria-label="Height"
                    />
                  </div>
                  <div className="flex h-10 w-1/2 items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow md:w-full">
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={100}
                      placeholder="Weight"
                      className="remove-arrow w-full bg-transparent focus:outline-none"
                      aria-label="Weight"
                    />
                  </div>
                </div>
              </div>
            </FormCard>
          </div>
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
          <div className="md:col-span-1 md:row-span-2">
            <FormCard title="Lower Body">
              <div>
                <div className="flex h-10 w-full items-center border border-secondary/20 rounded-md mt-3 p-2 bg-transparent remove-arrow">
                  <input
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={100}
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
                      max={100}
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
                      max={100}
                      placeholder="Ankle"
                      className="remove-arrow w-full bg-transparent focus:outline-none"
                      aria-label="Ankle"
                    />
                  </div>
                </div>
              </div>
            </FormCard>
          </div>
          <div className="w-full flex justify-center md:col-span-3 mt-4 md:mt-20">
            <button className="p-3 border border-yellow-500/70 text-yellow-500/70 hover:bg-yellow-500/70 hover:text-secondary w-full md:w-1/3 rounded-md transition-all">
              Estimate
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
