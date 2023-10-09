import Link from "next/link";

function NotFund() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl">Not Found 404</h1>
        <Link href="/" className="text-2xl">Volver al Inicio</Link>
      </div>
    </section>
  );
}

export default NotFund;
