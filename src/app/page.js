import Heading from "@/components/Heading";

export default function Home() {
  // console.log(name); // for common err check
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Heading />
      <h1>Hello from page.js</h1>
      <button>Button</button>
    </main>
  );
}
