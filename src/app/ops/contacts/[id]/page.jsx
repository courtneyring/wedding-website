import contacts from "@/json/contacts.json";
import styles from "./page.module.scss";
import {
  Container,
  ContactCard,
  Event,
  Button,
  EventList,
  SegmentedToggle
} from "@courtneyring/components-library";
import classNames from "classnames";
import ScheduleBlock from "@/components/ScheduleBlock/ScheduleBlock";

export async function generateStaticParams() {
  return contacts.map((c) => ({ id: String(c.alias) }));
}

const ContactPage = async ({ params }) => {
  const {id} = await params;
  const contact = contacts.find((c) => String(c.alias) === id);

  

  return (
    <Container className={styles.root}>
      <ContactCard contact={contact} />
      <div className={styles.block}>
        <h2 className="typography--h4">Contact</h2>
        <Button
          variation="link"
          className={classNames(styles.button, "typography--body")}
          href={`mailto:${contact.email}`}
        >
          <span className={classNames(styles.icon, "material-symbols-outlined")}>send</span>
          {contact.email}
        </Button>
        <Button variation="link" href={`tel:${contact.phone}`}>
          <span className={classNames(styles.icon, "material-symbols-outlined")}>
            mobile
          </span>
          {contact.phone}
        </Button>
      </div>
      {contact.schedule && (
        <div className={styles.block}>
          <h2 className="typography--h4">Schedule</h2>
         <ScheduleBlock schedule={contact.schedule}/>
        </div>
      )}
    </Container>
  );
};

export default ContactPage;
