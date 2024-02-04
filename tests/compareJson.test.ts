// CompareService.test.ts
import { CompareService } from './../src/CompareService';

describe('CompareService', () => {
  it('should accurately report differences between two objects', () => {
    const obj1 = { key1: "value1", key2: "unchanged", key3: "toBeDeleted" };
    const obj2 = { key1: "value1Changed", key2: "unchanged", key4: "added" };

    const result = CompareService.compareJsonDetailed(obj1, obj2);
    console.log(result)
    expect(result).toEqual({
      added: { key4: "added" },
      deleted: { key3: "toBeDeleted" },
      updated: { key1: { oldValue: "value1", newValue: "value1Changed" } },
    });
  });
});
