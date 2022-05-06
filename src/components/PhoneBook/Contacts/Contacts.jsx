import style from "./Contacts.module.css";


export const Contacts = ({ contacts }) => {
  return (
    <>
      <div className={style.wraper}>
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
      </div>
    
    </>
  );
};
