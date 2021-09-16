import { makeStyles, Theme, Box, Typography } from "@material-ui/core";

const DESC_COLOR = {
  unknown: "grey",
  dead: "red",
} as const;

const useStyles = makeStyles((theme: Theme) => ({
  species: {
    width: "20%",
    minWidth: "200px",
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[500],
  },
  description: {
    minWidth: "100px",
    fontWeight: "bold",
    textTransform: "capitalize",
    // поиск и получение ключей с помощью оператора keyof typeof
    color: ({ color }: { color: keyof typeof DESC_COLOR }) => DESC_COLOR[color],
  },
}));

type TCharacterDesc = {
  species: string;
  description?: string | string[];
  color: keyof typeof DESC_COLOR;
};

const Description = ({ species, description, color }: TCharacterDesc) => {
  const classes = useStyles({ color });

  return (
    <Box display="flex" pb={2}>
      <Typography className={classes.description}>{species}</Typography>
      <Typography className={classes.species}>{description}</Typography>
    </Box>
  );
};

export default Description;
