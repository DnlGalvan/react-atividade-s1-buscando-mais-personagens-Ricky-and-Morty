import { Container, Main, Button } from "./style";
import CharCard from "../CharCard";

const Characters = ({ characterList, setCurrentPage, pages }) => {
  return (
    <Main>
      <Container>
        <h1>Personagens de Rick e Morty</h1>
        <div>
          <Button pages={pages.prev} onClick={() => setCurrentPage(pages.prev)}>Voltar</Button>
          <Button pages={pages.next} onClick={() => setCurrentPage(pages.next)}>Próxima</Button>
        </div>
        <div>
          {characterList.map(({ id, name, status, species, gender, image }) => (
            <CharCard
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
            />
          ))}
        </div>
      </Container>
    </Main>
  );
};
export default Characters;