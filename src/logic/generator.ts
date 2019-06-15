export class Generator {
  originPathArray: string[];
  importPathArray: string[];
  samePath: boolean;
  constructor(originPath: string, importPath: string) {
    this.originPathArray = this.splitPath(originPath)
    this.importPathArray = this.splitPath(importPath)
    this.samePath = originPath === importPath
  }

  splitPath(path: string) { 
    return path.split("/")
  }

  checkWhenDifferent() {
    let i = 0
    while (i < this.originPathArray.length) {
      if (this.originPathArray[i] === this.importPathArray[i]) i ++
      else {
        this.originPathArray = this.originPathArray.splice(i)
        this.importPathArray = this.importPathArray.splice(i)
        return
      }
    }
  }

  generatePath() {
    if (this.originPathArray.length === 1) {
      return "./" + this.importPathArray.join("/")
    } else {
      let path = ''
      let i = 0 
      for(i; i < this.originPathArray.length -1; i++){
        path += "../"
      }
      return path + this.importPathArray.join("/")
    }
  }

  get path() {
    if (this.samePath) return "Origin and Import are Same"
    
    this.checkWhenDifferent()
    return this.generatePath()
  }
}