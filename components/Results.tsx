import FlipMove from "react-flip-move";

import { MovieResponse } from "../models/MovieResponse";
import Thumbnail from "./Thumbnail";

type Props = {
  data: MovieResponse[];
};

const Results = ({ data }: Props) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    2xl:grid-cols-4"
    >
      {data.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
