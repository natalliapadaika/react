import './info.css'

export const Info  = (props) => {
    return (
<div className='App-footer-info'>
    <h2>{props.h2}</h2>
    <p>{props.p}</p>
</div>)
};