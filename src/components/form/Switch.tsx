type SwitchProps = {
  first: string;
  second: string;
};

const Switch = ({ first, second }: SwitchProps) => {
  return (
    <div className="flex h-10 w-28 items-center border border-secondary/20 rounded-md mt-3">
      <div className="flex basis-1/2 justify-center hover:cursor-pointer">
        {first}
      </div>
      <div className="flex basis-1/2 justify-center hover:cursor-pointer">
        {second}
      </div>
    </div>
  );
};

export default Switch;
