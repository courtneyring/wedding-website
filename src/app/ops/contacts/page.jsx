"use client";

import contacts from "@/json/contacts.json";
import {
  Contact,
  Container,
  PromoGroup,
  SearchBar,
  useSearchFilter,
  Button,
} from "@courtneyring/components-library";
import styles from "./page.module.scss";
import OpsWrapper from "@/components/OpsWrapper/OpsWrapper";

const ContactsPage = () => {
  const { query, setQuery, filtered } = useSearchFilter(contacts, (item) => [
    item.name,
    item.title,
  ]);
  return (
    <OpsWrapper
      backButton={{ label: "Main Menu", value: "/ops" }}
      header="Contacts"
    >
      <SearchBar
        onSearch={setQuery}
        debounceMs={200}
        placeholder="Search by name or role"
      />
      {filtered.map((contact, idx) => (
        <div className={styles.row} key={`contact-${idx}`}>
          <Contact
            header={contact.name}
            body={contact.title}
            image={contact.image}
            cta={{ href: `/ops/contacts/${contact.alias}` }}
          />
        </div>
      ))}
    </OpsWrapper>
  );
};

export default ContactsPage;
