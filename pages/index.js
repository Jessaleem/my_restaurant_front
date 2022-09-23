import Layout from "../components/Layout";
import { useFetchUser } from "../services/authContext";

export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user}>
      <h1 className="font-bold text-5xl">Hello from main</h1>
    </Layout>
  )
}
