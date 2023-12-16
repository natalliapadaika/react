import './card.css';


export const Cards = (props) => {
    return (
        <main className='App-main'>
            
            <Card renderCard = {props.card}  h2 = 'Бестселлеры' p ='Легендарные продукты, завоевавшие любовь наших клиентов' button = 'Смотреть все'/>
            <Card renderCard = {props.card}  h2 = 'MAROON' p ='Натуральная косметика для бережного ухода за кожей' button = 'Подробнее'/>
            <Card renderCard = {props.card}  h2 = 'Встречайте весну вместе с нами' p ='Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой' button = 'Подробнее'/>

        </main>       
    )
}

const Card = (props) => {
    return (
<div className='App-main-card'>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            <button>{props.button}</button>
        </div>
    )
}