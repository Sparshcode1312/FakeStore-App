import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="app-header">
      <div className="container header-content">
        <div className="logo">
          <ShoppingBag size={28} strokeWidth={2.5} />
          <span>FakeStore</span>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search products by name, description or category..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
