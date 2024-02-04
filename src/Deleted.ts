export class Deleted {
    private deleted: { [key: string]: any } = {};
  
    delete(key: string, value: any) {
      this.deleted[key] = value;
    }
  
    getDeleted() {
      return this.deleted;
    }
  }