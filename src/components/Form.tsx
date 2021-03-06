import React, { useState } from 'react'
import { Generator } from '../logic/generator'

export const Form = (): JSX.Element => {
  const defaultImportPathValue = 'Set Import Path'
  const defaultFilePathValue = 'Set File Path'

  const [importPath, setImportPath] = useState(defaultImportPathValue)
  const [filePath, setFilePath] = useState(defaultFilePathValue)

  const invalidPath = (path: string): boolean => path.length < 4 || /\s/.test(path)

  const message = (): string => {
    if (invalidPath(importPath)) return 'Enter the relative path for the file you want to insert'
    if (invalidPath(filePath)) return 'Enter the relative path for the file you are working in'
    const path: string = new Generator(filePath, importPath).path
    return 'import ' + path
  }

  const handleOnClick = (event: React.MouseEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLButtonElement).value
    if (value === defaultImportPathValue) return setImportPath('')
    if (value === defaultFilePathValue) return setFilePath('')
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onClick={(event: React.MouseEvent<HTMLInputElement>): void => {
            return handleOnClick(event)
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            return setImportPath(event.target.value)
          }}
          value={importPath}
        />
        <input
          type="text"
          onClick={(event: React.MouseEvent<HTMLInputElement>): void => {
            return handleOnClick(event)
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            return setFilePath(event.target.value)
          }}
          value={filePath}
        />
      </form>

      {message()}
    </div>
  )
}
