import './head.css'

export const Head = (props) => {
  return  (<div className='App-header-img'>
        <img src={props.newLogo} className='App-header-newLogo' alt ='newLogo'/> 
        <a
          className="App-header-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text}
        </a>
    </div>)
};
