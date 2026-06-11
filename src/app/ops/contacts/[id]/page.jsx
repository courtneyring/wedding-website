import contacts from "@/json/schedule.json";

export async function generateStaticParams() {
  return contacts.map((c) => ({ id: String(c.alias) }));
}

const ContactPage = ({ params }) => {
  const contact = contacts.find((c) => String(c.alias) === params.id);
  return (
    <div>
      <h1>{contact.name}</h1>
      <h2>{contact.role}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </div>
  );
};

export default ContactPage;
