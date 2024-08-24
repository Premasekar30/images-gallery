import one from "./images/download1.jpeg"
import two from "./images/download2.jpeg"
import three from "./images/download4.jpeg"
import four from "./images/image3.jpeg"

function Image(){
    return(
        <div class="container">
        <h1>Image Gallery</h1>
        <div class="box-container">
            <div class="box">
                <img src={one}></img>
                <h1>Julie's Rabbit Ears</h1>
            </div>

            <div class="box">
                <img src={two}></img>
                <h1>The Innocent Lock</h1>
            </div>

            <div class="box">
                <img src={three}></img>
                <h1>Big Eyed Buggy</h1>
            </div>

            <div class="box">
                <img src={four}></img>
                <h1>The Saint Doggo</h1>
            </div>

            <div class="box">
                <img src={four}></img>
                <h1>The Innocent Lock</h1>
            </div>

            <div class="box">
                <img src={three}></img>
                <h1>Big Eyed Buggy</h1>
            </div>

            <div class="box">
                <img src={two}></img>
                <h1>Julie's Rabbit Ears</h1>
            </div>

            <div class="box">
                <img src={one}></img>
                <h1>The Saint Doggo</h1>
            </div>
        </div>
    </div>
    )
}

export default Image