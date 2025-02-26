import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // const product = await fakeDb.getProduct(params.pid);
  // return product;
  const time = new Date().toLocaleTimeString();
  return { time };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { time } = loaderData;
  console.log({ time });
  return <Welcome time={time} />;
}
