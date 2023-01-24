import React, {useContext} from 'react'
import CountrySelector from './CountrySelector'
import SearchInput from './SearchInput';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/mode-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="home mx-auto">
        <SearchInput />
      </div>
    </div>
  );
}

export default Home