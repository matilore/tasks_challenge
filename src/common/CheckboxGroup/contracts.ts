export interface CheckboxGroupProps {
  options: {
    description: string
    value: number
    checked: boolean
  }[]
  onChange: (callback: (prevSum: number) => number) => void
}
