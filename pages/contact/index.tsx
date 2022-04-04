import Link from "next/link";

import { MainLayout } from "../../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h2>contact</h2>
      <h1 className={"title"}>
        ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className="code">pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
