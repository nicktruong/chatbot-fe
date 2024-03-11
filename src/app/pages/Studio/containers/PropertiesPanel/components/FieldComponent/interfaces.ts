export interface FieldComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onUpdateField: (value: string) => void;
}
