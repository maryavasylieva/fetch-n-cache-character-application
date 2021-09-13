import { Box } from "@material-ui/core";
import CharacterCard from "./Components/Card/CharacterCard";
import SearchField from "./Components/SearchField";

const App = () => {
  return (
    <Box display="flex" p={20} justifyContent="space-between">
      <Box>
        <SearchField />
        <CharacterCard />
      </Box>
    </Box>
  );
};

export default App;
