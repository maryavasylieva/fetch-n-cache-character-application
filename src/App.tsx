import { Box } from "@material-ui/core";
import Card from "./Components/Card/Card";
import SearchField from "./Components/SearchField";
import useSearch from "./hooks/useSearch";

export type TCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
};


const App = () => {
  const { isFetching, fetchData, data, error } = useSearch<TCharacter>();

  const onSearchCharacter = async (search: string) => {
    fetchData(`https://rickandmortyapi.com/api/character/${search}`);
  };

  return (
    <Box display="flex" p={20} justifyContent="space-between">
      <Box>
        <SearchField
          isFetching={isFetching}
          onSearchCharacter={onSearchCharacter}
        />
        <Card character={data} isFetching={false} error={error} />
      </Box>
    </Box>
  );
};

export default App;
