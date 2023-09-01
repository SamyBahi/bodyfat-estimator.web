import { Spinner } from "../svgs";

type EstimateButtonProps = {
  loading: boolean;
};

const EstimateButton = ({ loading }: EstimateButtonProps) => {
  return (
    <div className="w-full flex justify-center md:col-span-3 mt-4 md:mt-20">
      <button
        type="submit"
        className={`flex items-center justify-center p-3 border border-yellow-500/70 text-yellow-500/70 hover:bg-yellow-500/70 disabled:bg-yellow-500/50 disabled:text-secondary/60 hover:text-secondary w-full md:w-1/3 rounded-md transition-all`}
        disabled={loading}
      >
        {loading && (
          <Spinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" />
        )}
        {loading && "Processing..."}
        {!loading && "Estimate"}
      </button>
    </div>
  );
};

export default EstimateButton;
