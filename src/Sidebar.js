import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
       {/* home , search and Library icons */}
      <SidebarOption Icon={AddHomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />



      {/* fetching all playlist from the our app using the   */}
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}




    </div>
  )
}

export default Sidebar;