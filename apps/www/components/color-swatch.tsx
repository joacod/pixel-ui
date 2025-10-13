import { colors } from '@joacod/pixel-ui'

type ColorKey = keyof typeof colors

interface ColorSwatchProps {
  name: string
  colorKey: ColorKey
  description?: string
}

export function ColorSwatch({ name, colorKey, description }: ColorSwatchProps) {
  const hexValue = colors[colorKey]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div
        style={{
          height: '6rem',
          width: '100%',
          backgroundColor: hexValue,
          border: '2px solid #000000',
        }}
      />
      <div style={{ fontSize: '0.875rem' }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <div style={{ color: '#585858' }}>{hexValue}</div>
        {description && (
          <div style={{ fontSize: '0.75rem', color: '#A1A1A1' }}>
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

interface ColorGridProps {
  columns: 2 | 3 | 4
  children: React.ReactNode
}

export function ColorGrid({ columns, children }: ColorGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: '1rem',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
