import type { MetaFunction } from "@remix-run/deno";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Netlify Remix Demo</h1>
      <p>That was easy</p>
    </div>
  );
}
