export interface CheckboxGroupProps {
  options: {
    description: string
    value: number
    checked: boolean
  }[]
  onCheckboxChange: (index: number) => void
}
