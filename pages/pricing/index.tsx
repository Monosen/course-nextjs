import Link from "next/link";

import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <>
      <h2>pricing</h2>
      <h1 className={"title"}>
        ir a <Link href="/">Pricing</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className="code">pages/pricing.jsx</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
