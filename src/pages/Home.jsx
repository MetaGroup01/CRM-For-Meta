export default function Home() {
  return (
    <section className="space-y-6">
      <div>
        <h1>Welcome to CRM Frontend</h1>
        <p className="text-gray-600 mt-2">Your React + Tailwind starter with a professional structure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <h3>Next steps</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Add features under <code>src/features/</code></li>
            <li>Create services in <code>src/services/</code> for APIs</li>
            <li>Share UI components via <code>src/components/</code></li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h3>Tech</h3>
          <p className="text-gray-600 mt-2">Vite, React 19, React Router 7, Tailwind CSS 4</p>
        </div>
      </div>
    </section>
  )
}
