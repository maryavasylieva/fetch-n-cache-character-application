import { Box, CircularProgress } from "@material-ui/core";

import characterBg from "../../assets/characterBg.png";
import { TCharacter } from "../../App";
import Info from "./Info";

type TCharacterCardProps = {
  isFetching: boolean;
  character: TCharacter | null;
  error: any;
};

const Card = ({ isFetching, character, error }: TCharacterCardProps) => {
  return (
    <Box display="flex">
      <Box
        boxShadow={4}
        borderRadius={3}
        overflow="hidden"
        width={300}
        height={300}
        marginTop={4}
      >
        <img
          width={300}
          height={300}
          src={character?.image || characterBg}
          alt="character bg"
        />
      </Box>
      {character ? <Info character={character} error={error} /> : null }
    </Box>
  );
};

export default Card;
