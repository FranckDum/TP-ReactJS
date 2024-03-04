import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function YgoAPI({ requete }) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        requeteApi(requete);
    }, [requete]);

    const requeteApi = (requete) => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${requete}`)
            .then(response => {
                console.log(response.data);
                setData(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <ul>
                {data.map(element => (
                    <section key={element.id} className="card-item">
                        <div className="card-image">
                            <h3>{element.name}</h3>
                            <img src={element.card_images[0].image_url_small} alt={element.name} />
                        </div>
                        <div>
                            <p><strong>Type:</strong> {element.type}</p>
                            <p><strong>FrameType:</strong> {element.frameType}</p>
                            <p><strong>Description:</strong><br/> {element.desc}</p>
                            <p><strong>Attaque:</strong> {element.atk}</p>
                            <p><strong>Défense:</strong> {element.def}</p>
                            <p><strong>Niveau:</strong> {element.level}</p>
                            <p><strong>Race:</strong> {element.race}</p>
                            <p><strong>Attribut:</strong> {element.attribute}</p>
                        </div>
                    </section>
                ))}
            </ul>
        </div>
    );
}

YgoAPI.propTypes = {
    requete: PropTypes.string.isRequired 
};

export default YgoAPI;
