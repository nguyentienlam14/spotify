import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong'
import ListSong from './components/ListSong'
import DataSongs from './data/songs.json'
import { Songs } from './Context';
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) {
      setSong(DataSongs[0])
    } else {
      setSong(song)
    }
  }
  return (
    <div className='Ap'>
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
      <Navbar />
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
        <DetailSong />
        <ListSong />
      </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
