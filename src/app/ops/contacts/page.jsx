'use client';

import contacts from "@/json/contacts.json";
import { Contact, Container, PromoGroup, SearchBar, useSearchFilter } from "@courtneyring/components-library";
import styles from './page.module.scss';

const ContactsPage = () => {

  const { query, setQuery, filtered } = useSearchFilter(contacts, (item) => [
    item.name,
    item.title,
  ]);
  return (
    <>
      <Container>
        <h1>Contacts</h1>
        <SearchBar
          value={query}
          onSearch={setQuery}
          debounceMs={300}
          placeholder="Search by name or role"
        />
        {filtered.map((contact) => (
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
