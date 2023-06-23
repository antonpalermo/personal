import Link from 'next/link'

export default function Brand() {
  return (
    <div>
      <Link href={'/'} className="text-lg font-bold">
        antonpalermo
      </Link>
      <p className="text-muted-foreground">Build the web!</p>
    </div>
  )
}
