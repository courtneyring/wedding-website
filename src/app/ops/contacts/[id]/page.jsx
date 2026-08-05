import contacts from "@/json/contacts.json";
import styles from './page.module.scss';
import { Container, ContactCard, Event } from "@courtneyring/components-library";

export async function generateStaticParams() {
  return contacts.map((c) => ({ id: String(c.alias) }));
}

const ContactPage = ({ params }) => {
  const contact = contacts.find((c) => String(c.alias) === params.id);
  return (
    <Container>
      <ContactCard contact={contact}/>
      <h2 className="typography--h3">Schedule</h2>
      <Event startTime='8am' endTime='10am' title='Rehearsal Dinner' location='Beekman' notes='notes'/>
    </Container>
  );
};

export default ContactPage;
