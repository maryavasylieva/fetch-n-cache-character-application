import { Box, Typography } from "@material-ui/core";
import { TCharacter } from "../types/TCharacter";

import Description from "./Description";

type TCharacterInfoCard = {
  character: TCharacter | null;
  error: any;
};

const Info = ({ character, error }: TCharacterInfoCard) => {
  const { name, species, type, location, origin, status } = character ?? {};
  return (
    <Box p={4}>
      <Typography variant="h3">{name}</Typography>
      <Description species="Species" description={species} color={"unknown"} />
      <Description species="Type" description={type} color={"unknown"} />
      <Description
        species="Location"
        description={location?.name ?? location?.url}
        color={"unknown"}
      />
      <Description
        species="Origin"
        description={origin?.url ?? origin?.name}
        color={"unknown"}
      />
      <Description species="Status" description={status} color={"unknown"} />
    </Box>
  );
};

export default Info;
