// DiffResult.ts
export interface DiffResult {
    added?: { [key: string]: any };
    deleted?: { [key: string]: any };
    updated?: { [key: string]: { oldValue: any; newValue: any } };
  }
  