import style from "./Contacts.module.css";

export const ContactsList = ({ contacts }) => {
  return (
    <>
    <p className="text">Contacts</p>
    <ul className="contacts">
      {contacts.map(({ id, name}) => (
        <li
          key={id}
          className={style.list}
        >
         {name}
        </li>
      ))}
      </ul>
    </>
  );
};
