import contacts from "@/json/schedule.json";

const ContactsPage = () => {
  return (
    <>
      {contacts.map((contact) => (
        <a href={`/contacts/${contact.alias}`} key={contact.id}>{contact.name}</a>
      ))}
    </>
  );
};

export default ContactsPage;
