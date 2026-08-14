import { redirect, notFound } from 'next/navigation';
import contacts from '@/json/contacts.json';

export async function generateStaticParams() {
  return contacts.map((c) => ({ alias: String(c.alias) }));
}
export default function NameRedirectPage({ params }) {
  const { alias } = params;

  const contactExists = contacts.some(
    (contact) => contact.alias?.toLowerCase() === alias.toLowerCase()
  );

  if (!contactExists) {
    notFound();
  }

  redirect(`/ops/contacts/${alias}`);
}