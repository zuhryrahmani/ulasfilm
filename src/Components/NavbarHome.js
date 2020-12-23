import React, {useState} from 'react';

function NavbarHome() {
  return (
    <div className='logo'>
      {/* JSX */}
      <h1 style={{fontFamily: 'Comfortaa, cursive'}}><i class="fas fa-film"></i> ReviewYuk</h1>
      <h1 style={{fontFamily: 'Bebas Neue, cursive'}}><i class="fas fa-ticket-alt"></i> ReviewYuk</h1>
      <h1 style={{fontFamily: 'Viga, sans-serif'}}><i class="fas fa-tape"></i> ReviewYuk</h1>
    </div>
  );
}

export default NavbarHome;