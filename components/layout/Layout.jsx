import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "Rankly \u2014 Ranked Profile Listings" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Submit your profile, choose a category, and place a higher bid to move up the ranking."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
