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
import OpsWrapper from "@/components/OpsWrapper/OpsWrapper";

export async function generateStaticParams() {
  return contacts.map((c) => ({ id: String(c.alias) }));
}

const ContactPage = async ({ params }) => {
  const {id} = await params;
  const contact = contacts.find((c) => String(c.alias) === id);

  

  return (
    <OpsWrapper backButton={{ label: "All Contacts", value: "/ops/contacts" }}>
      <ContactCard contact={contact} />
      <div className={styles.block}>
        {/* <h2 className="typography--h4">Contact</h2> */}
        {contact.email && (
          <Button
            variation="link"
            className={classNames(styles.button, "typography--body")}
            href={`mailto:${contact.email}`}
          >
            {contact.email}
            <span
              className={classNames(styles.icon, "material-symbols-outlined")}
            >
              call_made
            </span>
          </Button>
        )}
        {contact.phone && (
          <Button
            variation="link"
            href={`tel:${contact.phone}`}
            className={styles.button}
          >
            {contact.phone}
            <span
              className={classNames(styles.icon, "material-symbols-outlined")}
            >
              call_made
            </span>
          </Button>
        )}
      </div>
      {contact.schedule && contact.schedule.length > 0 && (
        <div className={styles.block}>
          <h2 className="typography--h4">Schedule</h2>
          <ScheduleBlock schedule={contact.schedule} alias={contact.alias}/>
        </div>
      )}
    </OpsWrapper>
  );
};

export default ContactPage;
