import { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ResourceHighlight from "../components/ResourceHighlight";
import ResourceList from "../components/ResourceList";

export default function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 1)} />
      <Newsletter />
      <ResourceList resources={resources.slice(1)} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  return {
    props: {
      resources: data,
    },
  };
}
