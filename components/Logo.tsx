export function Logo({ name = 'AI Platform', size = 28 }: { name?: string; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2 font-extrabold tracking-tight" aria-label={name}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="8" fill="#6366f1" />
        <path d="M9 22l7-12 7 12" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span>{name}</span>
    </span>
  )
}
