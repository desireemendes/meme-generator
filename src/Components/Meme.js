import './Meme.css'
import memesData from '../memesData'


export default function Meme() {


    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button 
                    className="form-button"
                >
                    Generate meme image 🖼
                </button>
                
            </form>
        </main>
    )
}