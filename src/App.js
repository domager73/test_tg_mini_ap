import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            Hello word
            <button onClick={onClose}>закрыть</button>
        </div>
    );
}

export default App;
