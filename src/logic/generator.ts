export class Generator {
  private originPathArray: string[]
  private importPathArray: string[]
  private samePath: boolean

  public constructor(originPath: string, importPath: string) {
    this.originPathArray = this.splitPath(originPath)
    this.importPathArray = this.splitPath(importPath)
    this.samePath = originPath === importPath
  }

  private splitPath(path: string): string[] {
    return path.split('/')
  }

  private checkWhenDifferent(): void {
    let i = 0
    while (i < this.originPathArray.length) {
      if (this.originPathArray[i] === this.importPathArray[i]) i++
      else {
        this.originPathArray = this.originPathArray.splice(i)
        this.importPathArray = this.importPathArray.splice(i)
        return
      }
    }
  }

  private generatePath(): string {
    if (this.originPathArray.length === 1) {
      return './' + this.importPathArray.join('/')
    } else {
      let path = ''
      let i = 0
      for (i; i < this.originPathArray.length - 1; i++) {
        path += '../'
      }
      return path + this.importPathArray.join('/')
    }
  }

  public get path(): string {
    if (this.samePath) return 'Origin and Import are Same'

    this.checkWhenDifferent()
    return this.generatePath()
  }
}
