import style from "./Contacts.module.css";

export const ContactsList = ({ contacts }) => {
  return (
    <>
    <p className={style.text}>Contacts</p>
    <ul className={style.list}>
      {contacts.map(({ id, name, number}) => (
        <li
          key={id}
          className={style.list_item}
        >
          <p className={style.item_text}>{name}:</p> 
          <p className={style.item_text}>{number}</p>
        </li>
      ))}
      </ul>
    </>
  );
};
