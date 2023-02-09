
function Character({character}) {
    //console.log(character)
    if (character) {
      return (
        <div className="text-sm py-4 px-8 max-w-xs mx-auto mb-4 bg-slate-700 rounded-3xl shadow-xl space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img src={character?.image} alt="" className="rounded-full h-24 " />
            <div>
                <h2 className="text-center">{character?.name}</h2>
                <ul className="text-xs text-slate-400">
                    <li>Origen: {character?.origin?.name}</li>
                    <li>Estado: {character?.status}</li>
                </ul>
            </div>
        </div>
      )
    }

    else {
      return
    }

}

export default Character