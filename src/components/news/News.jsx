import "./news.css";
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://newsapi.org/v2";

const NewsList = ({ item }) => (

    <div className="infoDiv">
        <p className="infoP">Interacting with our pets</p>
        <div className="newsDiv">
        {item.map(({ description, urlToImage, id }) => (
            <div className="cardNews" key={id}>
                <img src={urlToImage} className="infoImg" />
                <p className="info">{description}</p>
            </div>  
        ))}
        </div>
        <button className="infobth">see more</button>

    </div>

)

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const Data = async () => {
            const response = await axios.get("/everything?q=ukraine&pageSize=4&apiKey=3d623b20477b4a1793bce4cf6d726729");
            console.log(response)
            setNews(response.data.articles);

        }

        Data();
    }, []);
    return (
        <div className="newsContainer">
            <NewsList item={news} />
        </div>)


}
export default News