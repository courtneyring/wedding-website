import contacts from "@/json/contacts.json";
import styles from "./page.module.scss";
import moment from "moment";
import {
  Container,
  ContactCard,
  Event,
  Button,
  EventList
} from "@courtneyring/components-library";

export async function generateStaticParams() {
  return contacts.map((c) => ({ id: String(c.alias) }));
}

const ContactPage = ({ params }) => {
  const contact = contacts.find((c) => String(c.alias) === params.id);
  return (
    <Container className={styles.root}>
      <ContactCard contact={contact} />
      <div className={styles.block}>
        <h2 className="typography--h4">Contact</h2>
        <Button
          variation="link"
          className="typography--body"
          href={`mailto:${contact.email}`}
        >
          <span className="material-symbols-outlined">send</span>
          {contact.email}
        </Button>
        <Button variation="link" href={`tel:${contact.phone}`}>
          <span className="material-symbols-outlined">mobile</span>
          {contact.phone}
        </Button>
      </div>
      {contact.schedule && (
        <div className={styles.block}>
          <h2 className="typography--h4">Schedule</h2>
          <EventList tasks={contact.schedule} />
        </div>
      )}
    </Container>
  );
};

export default ContactPage;
