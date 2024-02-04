export class Updated {
    private updated: { [key: string]: { oldValue: any; newValue: any } } = {};
  
    update(key: string, oldValue: any, newValue: any) {
      this.updated[key] = { oldValue, newValue };
    }
  
    getUpdated() {
      return this.updated;
    }
  }