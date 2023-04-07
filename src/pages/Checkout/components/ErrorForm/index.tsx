import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'
import * as S from './styles'

interface ErrorFormProps {
  listFields: string[]
  errors: FieldErrors
}

export function ErrorForm({ listFields, errors }: ErrorFormProps) {
  return (
    <S.Wrap>
      <header>
        <S.Title>Os seguintes campos estão com erro:</S.Title>
      </header>
      {listFields.map((field, index) => (
        <ErrorMessage
          key={`index-${field}`}
          as="p"
          errors={errors}
          name={field}
        />
      ))}
    </S.Wrap>
  )
}
