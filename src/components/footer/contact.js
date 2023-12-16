import "./contact.css";

export const Contacts = (props) => {
  return (
    <div className="App-footer-contacts">
      <h2>{props.h2}</h2>
      <Contact
        adresTelEmail={props.ate}
        h3="Адрес"
        p="Санкт-Петербург, ул. Большая Конюшенная, 19"
      />
      <Contact adresTelEmail={props.ate} h3="Телефон" p="+7 (923) 888-90-60" />
      <Contact adresTelEmail={props.ate} h3="E-mail" p="info@maroon.ru" />
    </div>
  );
};

const Contact = (props) => {
  return (
    <div className="App-footer-contact">
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  );
};
