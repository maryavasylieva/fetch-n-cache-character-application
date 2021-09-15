import { makeStyles, Theme, Box, Typography } from "@material-ui/core";

const DESC_COLOR = {
  unknown: "grey",
  dead: "red",
} as const;

const useStyles = makeStyles((theme: Theme) => ({
  species: {
    width: "20%",
    minWidth: "100px",
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[400],
  },
  description: {
    fontWeight: 600,
    textTransform: "capitalize",
    // поиск и получение ключей с помощью оператора keyof typeof
    color: ({ color }: { color: keyof typeof DESC_COLOR }) => DESC_COLOR[color],
  },
}));

type TCharacterDesc = {
  species: string;
  description: string | undefined;
  color: keyof  typeof DESC_COLOR;
};

const Description = ({ species, description, color }: TCharacterDesc) => {
  const classes = useStyles({ color });

  return (
    <Box display="flex" justifyContent="space-between" pb={1}>
      <Typography className={classes.description}>{species}</Typography>
      <Typography className={classes.species}>{description}</Typography>
    </Box>
  );
};

export default Description;
