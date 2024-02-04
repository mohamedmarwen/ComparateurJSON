import { CompareService } from './CompareService';

const obj1 = { key1: "value1", key2: "unchanged", key3: "toBeDeleted" };
const obj2 = { key1: "value1Changed", key2: "unchanged", key4: "added" };

const diff = CompareService.compareJsonDetailed(obj1, obj2);
console.log(diff);