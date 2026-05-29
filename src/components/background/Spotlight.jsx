/** Fixed emerald spotlight that follows the cursor (driven by --mx/--my). */
export function Spotlight() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background:
          'radial-gradient(420px circle at var(--mx) var(--my), rgba(16,185,129,0.10), transparent 60%)',
        transition: 'background 0.1s ease-out',
      }}
    />
  )
}
