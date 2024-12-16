interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="text-center space-y-4 mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

