import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import { TCharacter } from "../../App";

import Description from "./Description";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    paddingBottom: theme.spacing(2),
  }
}))

type TCharacterInfoCard = {
  character: TCharacter | null;
  error: any;
};

const Info = ({ character, error }: TCharacterInfoCard) => {
  const classes = useStyles()
  const { name, species, episode, location, origin, status } = character ?? {};
  return (
    <Box p={4}>
      <Typography variant="h3" className={classes.title}>{name}</Typography>
      <Description species="Species" description={species} color={"unknown"} />
      <Description species="Type" description={episode} color={"unknown"} />
      <Description
        species="Location"
        description={location?.name || location?.url || 'unknown'}
        color={"unknown"}
      />
      <Description
        species="Origin"
        description={origin?.url || origin?.name || 'unknown'}
        color={"unknown"}
      />
      <Description species="Status" description={status} color={"unknown"} />
    </Box>
  );
};

export default Info;
