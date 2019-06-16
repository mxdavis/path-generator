import React, { useState } from 'react'
import { Generator } from '../logic/generator'

export const Form = (): JSX.Element => {
  const [importPath, setImportPath] = useState('Set Import Path')
  const [filePath, setFilePath] = useState('Set File Path')

  const invalidPath = (path: string): boolean => path.length < 4 || /\s/.test(path)

  const message = (): string => {
    if (invalidPath(importPath)) return 'Enter the relative path for the file you want to insert'
    if (invalidPath(filePath)) return 'Enter the relative path for the file you are working in'
    return new Generator(filePath, importPath).path
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            return setImportPath(event.target.value)
          }}
          value={importPath}
        />
        <input
          type="text"
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
