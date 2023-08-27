import Form from "@/components/form/Form";
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
        <Form />
      </div>
    </main>
  );
}
