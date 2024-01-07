import LockInForm from "~/components/lock-in/lock-in-form";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";

export default function LockIn() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto px-8 pt-10">
        <div className="flex h-full w-full flex-col space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-200">
              Lock-In 🔒
            </h2>
          </div>
          <div className="flex h-full w-full items-center justify-center py-10">
            <LockInForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
