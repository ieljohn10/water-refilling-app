import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ userInfo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear()
    navigate('/login');
  };

  const handlerSearch = () => {

  };

  const onClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h1 className='text-xl font-medium text-black py-2'>Notes</h1>

      <SearchBar 
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handlerSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
    </div> 
  )
}
export default Navbar