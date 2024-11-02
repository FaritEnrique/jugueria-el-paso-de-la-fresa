import { useCounterStore } from "../store/counter"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Counter = () => {

    const { count, increment, decrement, increaseByValue } = useCounterStore()
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '8px', borderRadius: '0.5rem', marginBottom: "0.5rem"}}>

            <h3 className="text-base font-bold">Cantidad</h3>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: 'min(100%, 200px)', backgroundColor: 'rgba(189, 189, 189,0.5)', padding: '8px', borderRadius: '1rem' }}>
                <button
                    className="bg-lime-400 rounded-lg w-12 flex items-center text-center justify-center"
                    onClick={decrement}> <IoIosArrowBack /> -1</button>
                <h1 className="text-base font-bold ring-offset-2 ring-2 w-10 text-center">{count}</h1>
                <button
                    className="bg-lime-400 rounded-lg w-12 flex items-center justify-center"
                    onClick={increment}>+1 <IoIosArrowForward /></button>
            </div>

        </div>
    )
}

export default Counter