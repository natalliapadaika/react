import './nav.css'

export const Navigation = (props) => {
    return ( <div className='App-header-nav'>
        <nav>
            <ul>
                <NavigationLi navigate = {props.l} link = '#' text = 'Каталог'/>
                
                <NavigationLi navigate = {props.l} link = '#' text = 'О нас'/>
                <NavigationLi navigate = {props.l} link = '#' text = 'Контакты'/>
            </ul>
        </nav>
    </div>)
    
};

const NavigationLi = (props) =>{
    return (
        <li>
            <a className='App-header-li' href ={props.link}>
{props.text}
            </a>
        </li>
    )
};