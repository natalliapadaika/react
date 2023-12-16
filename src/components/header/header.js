import marron from '../../components/img/marron.png';
import {Head} from '../../components/header/head';
import { Navigation} from '../../components/header/nav';

export const Header = () => {
    return (
    <header className="App-header">
    <Head newLogo = {marron}
    link='#' text = 'MARRON'/>
    <Navigation  
    />
  </header>
  )

}