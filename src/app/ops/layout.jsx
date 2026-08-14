export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};


export default function OpsLayout({ children }) {
  return (
    <>
        {children}
    </>
  );
}
