
import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
// import { Otro } from "./Components/otro.jsx"




export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleCLick = async () => {
        refreshFact()
    }



    return (
        <main>
            <h1>CAT APP</h1>
            <button onClick={handleCLick}>Get New Fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}

            {/* <Otro /> */}
        </main>
    )
}
