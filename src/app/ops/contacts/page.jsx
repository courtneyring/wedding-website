import contacts from "@/json/contacts.json";
import { Contact, Container, PromoGroup } from "@courtneyring/components-library";
import styles from './page.module.scss';

const ContactsPage = () => {
  return (
    <>
      <Container>
        <h1>Contacts</h1>
        {contacts.map((contact) => (
          <div className={styles.row}>
            <Contact
              header={contact.name}
              body={contact.title}
              image={contact.image}
              cta={{ href: `/ops/contacts/${contact.alias}` }}
            />
          </div>
        ))}
      </Container>
    </>
  );
};

export default ContactsPage;
