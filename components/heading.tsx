type HeadingProps = {
  heading: string
  description?: string
}

export default function Heading({ heading, description }: HeadingProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold">{heading}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}
