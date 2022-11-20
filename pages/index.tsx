import { NavList } from "@primer/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello, Next.js!</title>
      </Head>
      <NavList>
        <NavList.Group title="Guides">
          <NavList.Item>Getting started</NavList.Item>
        </NavList.Group>
        <NavList.Group title="Foundations">
          <NavList.Item>Colors</NavList.Item>
        </NavList.Group>
        <NavList.Group title="Components">
          <NavList.Item>ActionList</NavList.Item>
        </NavList.Group>
      </NavList>
    </div>
  );
}
