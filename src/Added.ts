export class Added {
    private added: { [key: string]: any } = {};
  
    add(key: string, value: any) {
      this.added[key] = value;
    }
  
    getAdded() {
      return this.added;
    }
  }