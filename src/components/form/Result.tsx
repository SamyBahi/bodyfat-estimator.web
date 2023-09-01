import { useSpring, animated } from "react-spring";

type ResultProps = {
  n: number;
};

const Result = ({ n }: ResultProps) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 50,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n: number) => n.toFixed(2))}</animated.div>;
};

export default Result;
