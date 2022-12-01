import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  
  return (
    <div className='header'>
      <div className="header__left">
        <SearchIcon />       {/* this is icon image using from mui material  */}
        <input placeholder='Search for Artists, Songs, or Podcasts' type="text" />   {/* search icon fro search a song  */}

        {/* <Header spotify={spotify}/> */}

      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />    {/* i got profile image from my account  */}
        <h4>{user?.display_name}</h4>                                    {/* shruti i got user name from my account  */}

      </div>
    </div>

  );
}

export default Header;

