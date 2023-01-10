import './Header.css'

import Logo from '../Logo/Logo';
import SocialMedia from '../SocialMedia/SocialMedia';

const Header = () => {
  return (
     <header className="header">
        <div className="container">
          <div className="header__flex">
            <Logo/>
            <div className="header__blog-name">Blog Name</div>
            <SocialMedia/>
          </div>
        </div>
     </header>
  )
}

export default Header;