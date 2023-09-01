import { Logo } from "@/components/svgs";

export default function About() {
  return (
    <main className="relative -top-[4rem] items-center flex flex-col h-full p-6 flex-1 w-full lg:static lg:overflow-auto">
      <div className="w-full max-w-[1000px]">
        <Logo className="text-xl fill-secondary lg:hidden mb-6 w-full text-center" />
        <div>
          <h1 className="text-4xl mb-6 font-bold">About</h1>
          <h2 className="text-3xl mb-6 fond-bold">How does it work ?</h2>
          <p className="opacity-60 font-medium">
            This web app uses artificial intelligence to estimate your density
            taking your mensurations as an input, and computes your bodyfat
            according to Siri's formula (1956).
          </p>
          <p className="opacity-60 font-medium mt-6">
            Prior to the adoption of DXA, the most accurate method of estimating
            body fat percentage was to measure that person's average density
            (total mass divided by total volume) and apply a formula to convert
            that to body fat percentage. Since fat tissue has a lower density
            than muscles and bones, it is possible to estimate the fat content.
            This estimate is distorted by the fact that muscles and bones have
            different densities: for a person with a more-than-average amount of
            bone mass, the estimate will be too low. However, this method gives
            highly reproducible results for individual persons (± 1 to 3%). As
            measuring body density can be hard and costly, I had the idea to
            implement a machine learning model that is capable of predicting
            density given mesnurations.
          </p>
          <p className="opacity-60 font-medium mt-6">
            The model used for density prediction is a RandomForest Regressor.
            It is trained on a bodyfat and mensurations dataset that you can
            find on{" "}
            <a
              href="https://www.kaggle.com/datasets/fedesoriano/body-fat-prediction-dataset"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle
            </a>
            . You can also find the notebook that led to the model's actual
            state on my github following this{" "}
            <a
              href="https://github.com/SamyBahi/bodyfat-estimation"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
            .
          </p>
          <p className="opacity-60 font-medium my-6">
            Please note that the result may be off by around 1-3% according to
            the fact that Siri's formula may also be off by around 1-3%.
            However, this model should be more precise than bioelectrical
            impedance scale (3-5% off).
          </p>
          <h2 className="text-3xl mb-6 fond-bold">
            How knowing bodyfat can be beneficial ?
          </h2>
          <p className="opacity-60 font-medium">
            Bodyfat is the total amount of fat in your body. Everybody has at
            least a little bit of bodyfat. It is the extra, stored energy in
            your body. It's like a savings account for calories. Just as you put
            money in a savings account to use when you need it, your body stores
            calories as fat to use for energy later. Having some body fat is
            normal and healthy, but too much can cause health issues (contrarely
            to money in your bank account).
          </p>
          <p className="opacity-60 font-medium mt-6">
            Thus, predicting bodyfat percentage can be useful for many reasons,
            including :
            <ul className="list-disc ml-10">
              <li>
                <span className="underline font-bold">Health</span> : knowing
                the body fat percentage can help us to identify any potential
                health risks associated with excess body fat.
              </li>
              <li>
                <span className="underline font-bold">Motivation</span> :
                knowing the body fat percentage can help us to stay motivated to
                lose weight and improve the health as we see the number
                dicreasing.
              </li>
              <li>
                <span className="underline font-bold">Self-image</span> :
                knowing the body fat percentage can help us to feel more
                confident and comfortable in the own skin.
              </li>
              <li>
                <span className="underline font-bold">
                  Athletic performance
                </span>{" "}
                : Body fat can affect the athletic performance in a number of
                ways.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}
