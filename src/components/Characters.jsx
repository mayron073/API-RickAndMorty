import { useState, useEffect } from 'react'
import { getCharacters, getFiltlerCharacters } from "../Api/Characters";
import Character from './Character'


function CharactersList() {

  const [ data, setData ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ name, setName ] = useState('')

  useEffect(() => {
    
    if (name == '') {
      funGetCharacters()
    } 
    else {
      funGetFiltlerCharacter()
    }

  }, [page])

//****************************************************************************************** */
  const nextPage = (next, pageNum) => {
    //if (!data.prev && page + next <= 0) return
    if (!data.next && page + next > pageNum) return

    setPage(page + next)


  }

  const previousPage = (prev) => {
    if (!data.prev && page + prev <= 0) return
    //if (!data.next && page + prev > 42) return

    setPage(page + prev)
  }

  const saveName = (name) => {
    setName(name)
  }

  const searchCharacter = () => {
    setPage(1)
    setData([])

    funGetFiltlerCharacter()
  }

  const refreshState = () => {
    setData([])
    setName('')
    setPage(1)

    funGetCharacters()
  }
//************************************************************************************************* */
  const funGetCharacters = () => {
    getCharacters(page).then((obj) => {
      setData(obj);
      //console.log(obj)
    })
  }

  const funGetFiltlerCharacter = () => {
    getFiltlerCharacters(name, page).then((obj) => {
      setData(obj);
      //console.log(obj)
    })
  }
//************************************************************************************************** */
  return (
    <div>
        <div className='flex justify-center mb-2'>
          <h1 className='text-center pt-4 mb-8 mr-10 font-bold'>Personajes de Rick y Morty</h1>
          <input type="text" placeholder='Nombre' 
                className='h-6 w-2/12 mt-5 mr-2 px-2 bg-slate-500 text-end text-xs rounded-md'
                onChange={(e) => {saveName(e.target.value)}}/>
          <button
                className='h-6 mt-5 p-0 bg-blue-400 px-1 rounded-md hover:bg-slate-500'
                onClick={searchCharacter}
                >Buscar</button>
          <button
                className='h-6 mt-5 ml-10 p-0 bg-blue-400 px-1 rounded-md hover:bg-slate-500'
                onClick={refreshState}
                >Refresh</button>
        </div>

        <div className='flex justify-around mb-4'>
          <button className='bg-blue-400 px-1 ml-6 rounded-md hover:bg-slate-500'
                  onClick={() => {previousPage(-1)}}>
            anterior
          </button>
          <p className='text-slate-500'>Pagina: {page}</p>
          <button className='bg-blue-400 px-1 mr-6 rounded-md hover:bg-slate-500'
                  onClick={() => {nextPage(+1, data.info.pages)}}>
            siguiente
          </button>
        </div>

        <div className='container columns-2 mx-auto'>
        {
          data?.results?.map((character) => (
            <div>
              <Character key={character.id} character={character}/>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default CharactersList