import Link from "next/link";

import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <h1 className={"title"}>
        ir a <Link href="/about">about</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.jsx</code>
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
