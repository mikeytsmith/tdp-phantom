import axios from "axios";
import { useState } from "react";

const DeleteArtist = ({getData, fetchData}) => {
    const [id, setId] = useState();

    const handleDelete= (e)=>{
        e.preventDefault();

        axios.delete("http://localhost:4400/artists/remove/"+id)
        .then(()=>{
                setTimeout(()=>{
                    getData(!fetchData)
                }, 500)
        })
        .catch((error)=>alert(error))
    }

    return (
        <>
        <br/>
        <h2>Remove an existing artist: </h2>
            <form >
                <p>Delete record with ID: </p>
            <input type="number" min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <br/>
            <button className="button button3" onClick={handleDelete} >Delete</button>
          </form>
          </>
    );
}

export default DeleteArtist;