import { Box } from "@material-ui/core";

import characterBg from "../../assets/characterBg.png";

const CharacterCard = () => {
  return (
    <Box
      boxShadow={4}
      borderRadius={3}
      overflow="hidden"
      width={300}
      height={300}
      marginTop={4}
    >
      <img width={300} height={300} src={characterBg} alt="character bg" />
    </Box>
  );
};

export default CharacterCard;
