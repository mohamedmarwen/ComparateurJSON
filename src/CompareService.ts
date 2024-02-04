import { DiffResult } from './DiffResult';
import { Added } from './Added';
import { Deleted } from './Deleted';
import { Updated } from './Updated';

export class CompareService {
  static compareJsonDetailed(obj1: { [key: string]: any }, obj2: { [key: string]: any }): DiffResult {
    const added = new Added();
    const deleted = new Deleted();
    const updated = new Updated();

    for (const key in obj1) {
      if (!(key in obj2)) {
        deleted.delete(key, obj1[key]);
      } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        updated.update(key, obj1[key], obj2[key]);
      }
    }

    for (const key in obj2) {
      if (!(key in obj1)) {
        added.add(key, obj2[key]);
      }
    }

    return {
      added: added.getAdded(),
      deleted: deleted.getDeleted(),
      updated: updated.getUpdated(),
    };
  }
}
