import Global from './styles/global.js'
import { useEffect, useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characterList, setCharacterlist] = useState([])
  const [currentPage, setCurrentPage] = useState("https://rickandmortyapi.com/api/character/")
  const [pages, setPages] = useState([])

  useEffect(() => {
    fetch(currentPage)
    .then(response => response.json())
    .then(response => {
      setCharacterlist(response.results)
      setPages(response.info)
    })
    .catch(err => console.log(err))
  }, [currentPage, pages])

  return (
    <>
      <Global />
      <Characters characterList={characterList}  setCurrentPage={setCurrentPage} pages={pages} />
    </>
  );
}

export default App;