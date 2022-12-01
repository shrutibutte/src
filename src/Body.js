import React from 'react'
import "./Body.css"
import Header from "./Header.js"
import SongRow from "./SongRow.js"
import {useDataLayerValue} from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
        {/* <h1>I am the body</h1> */}
        <Header spotify={spotify}/>
        <div className="body__info">
            {/* <img src="https://www.tunelf.com/wp-content/uploads/2022/02/discover-weekly.jpg" alt=""/> */}
             <img src={discover_weekly?.images[0].url} alt="" />    {/* i got image from the spotify app from discover playlist  */}
          <div className="body__infoText">
            
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>   {/* shows the description of playlist  */}
          </div> 
        </div>

        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" /> {/*   */}
            <FavoriteIcon fontSize="large" />   {/* this is fav icon  using from mui material  */}
            <MoreHorizIcon />
          </div>


          {/* List of songs  */}
          {/* track the song from the spotify using the api of the spotify api  */}
          {discover_weekly?.tracks.items.map(item => ( 
            <SongRow track={item.track} />  
          ))}

        </div>
    </div>
  )
}

export default Body;

//  discover_weekly?.images[0].url}
