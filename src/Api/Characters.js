

export async function getCharacters(page) {

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      
      if (!response.ok) {
        alert("No fue posible obtener los datos")
      }
  
      const data = await response.json()
      return data
  
    } catch (error) {
      console.log(error)
    }  
    
  }
  
  export async function getFiltlerCharacters(name, page) {

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
      
      if (!response.ok) {
        alert("No fue posible obtener los datos")
      }
  
      const data = await response.json()
      return data
  
    } catch (error) {
      console.log(error)
    }  
    
  }

  export async function getCharacter(id = 1) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    
    return data
  }
  
  class NetworkError extends Error {
    constructor() {
      super("Network error")
    }
  }
