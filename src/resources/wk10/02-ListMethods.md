# C# List
Following examples show how to create and manipulate with .NET strongly typed list `List<T>`. When reading documentation on lists know that `T` stands for any type, in many of the examples the `T` will be an `int`

## List<T>
List is a generic type, so you can create list of any type (it can be reference type such as Customer or value type such as int)
```csharp
var list1 = new List<object>();
var list2 = new List<Customer>();
var list3 = new List<int>();
```

## List Constructor
Creates an empty list (of integer values).
```csharp
var list = new List<int>(); // list: (empty)
```
Creates a list and initializes it with some items (integer values).
```csharp
var list = new List<int>() { 8, 3, 2 }; // list:	8, 3, 2,
```
Creates a list and initializes it with items of another list (or array or anything which implements IEnumerable interface).
```csharp
var listA = new List<int>() { 8, 3, 2 };
var listB = new List<int>(listA); // listB: 8 3 2
```
Creates a list with specified capacity.
```csharp
var list = new List<int>(16); 
// list.Count:	0
// list.Capacity:	16
```

## List[index]
Gets an item at the specified zero-based index.
```csharp
// list:	8 3 2
 int item = list[1]; 
// item:	3
```
Sets the item at the specified zero-based index.
```csharp
// list:	8 3 2
 list[1] = 4; 
// list:	8 4 2
```

## List.Add
Adds an item to the end of the list.
```csharp
// list:	8 3 2
 list.Add(5); 
// list:	8 3 2 5
```
## List.AddRange
Adds items of another list (or an IEnumerable collection) to the end of the list.
```csharp
// listA:	8 3 2
// listB:	5 7
 listA.AddRange(listB); 
// listA:	8 3 2 5 7
```
## List.BinarySearch
Returns the zero-based index of the item in the sorted list. If the items is not found, returns a negative number. See MSDN for more info.

This List<T> method works only if the type T implements IComparable<T> or IComparable interface.
```csharp
// list:	1 3 4 6 7 9
 int index = list.BinarySearch(6); 
// index:	3
```
This BinarySearch method overload uses specified comparer.
```csharp
// list:	1 3 4 6 7 9
 int index = list.BinarySearch( item: 6, comparer: new MyComparer() ); 
// index:	3
```
This BinarySearch method overload uses specified comparer and search in specified range.
```csharp
// list:	1 3 4 6 7 9
 int index = list.BinarySearch( index: 1, count: 3, item: 6, comparer: new MyComparer() ); 
// index:	3
```
This example shows the case when the item was not found in the list. The result is negative number.
```csharp
// list:	1 3 4 6 7 9
 int index = list.BinarySearch( index: 1, count: 2, item: 6, comparer: new MyComparer() ); 
// index:	-4
```
```csharp
public class MyComparer : IComparer<int>
{
    public int Compare(int x, int y) { return x.CompareTo(y); }
}
```
## List.Clear
Removes all items from the list. Count is zero, Capacity is unchanged.
```csharp
// list:	8 3 2
 list.Clear(); 
// list:	(empty)
```
## List.Contains
Returns true if the list contains the specified item.
```csharp
// list:	8 3 2
 bool result = list.Contains(3); 
// result:	true
```
Returns false if the list doesn't contain the specified item.
```csharp
// list:	8 3 2
 bool result = list.Contains(6); 
// result:	false
```
## List.ConvertAll
Converts items using specified delegate. Items can be converted to another type.
```csharp
// listA:	8 3 2
 var conv = new Converter<int, decimal>(x => (decimal)(x+1));

var listB = listA.ConvertAll<decimal>(conv); 
// listB:	9.0 4.0 3.0
```
## List.CopyTo
Copies all list items into the beginning of the specified array.
```csharp
// list:	8 3 2
// array:	0 0 0 0 0
 list.CopyTo(array); 
// array:	8 3 2 0 0
```
Copies all list items into the array, starting from the specified array index.
```csharp
// list:	8 3 2
// array:	0 0 0 0 0
 list.CopyTo(array, arrayIndex: 2); 
// array:	0 0 8 3 2
```
Copies a range of list items into the array, starting from the specified array index.
```csharp
// list:	8 3 2
// array:	0 0 0 0 0
 list.CopyTo(index: 1, array: array, arrayIndex: 3, count: 1); 
// array:	0 0 0 3 0
```
## List.Exists
Returns true if the list contains items matching the specified predicate.
```csharp
// list:	8 3 2
 bool result = list.Exists(x => x == 3); 
// result:	true
```
Returns false if the list doesn't contain items matching the specified predicate.
```csharp
// list:	8 3 2
 bool result = list.Exists(x => x > 10); 
// result:	false
```
## List.Equals
Returns true if the two specified lists are reference equal (are the same instance).
```csharp
var listA = new List<int>() { 8, 3, 2 };
var listB = listA;
bool result = listA.Equals(listB); 
// result:	true
```
Returns false if the specified two lists are not the same instance. To determine whether all items of the two lists are equal use LINQ method SequenceEqual.
```csharp
var listA = new List<int>() { 8, 3, 2 };
var listB = new List<int>() { 8, 3, 2 };
bool result = listA.Equals(listB); 
// result:	false
```
## List.Find
Returns the first occurrence of item matching the specified predicate.
```csharp
// list:	8 3 2
 int item = list.Find(x => x > 2); 
// item:	3
```
For List<T> returns the default value of type T if no item matches the predicate. In this case the default value of int is 0.
```csharp
// list:	8 3 2
 int item = list.Find(x => x > 10); 
// item:	0 (default value)
```
## List.FindAll
Returns list with items matching the specified predicate.
```csharp
// listA:	8 3 2
 var listB = listA.FindAll(x => x > 2); 
// listB:	8 3
```
Returns empty list, if no item matches the specified predicate.
```csharp
// listA:	8 3 2
 var listB = listA.FindAll(x => x > 10); 
// listB:	(empty)
```
## List.FindIndex
Returns zero-based index of the first item which matches the specified predicate.
```csharp
// list:	8 3 6 4 2
 int index = list.FindIndex(x => x < 5); 
// index:	1
```
Returns index of the first item which matches the specified predicate. It searches the list from startIndex to the end of the list.
```csharp
// list:	8 3 6 4 2
 int index = list.FindIndex( startIndex: 2, match: x => x < 5); 
// index:	3
```
Returns index of the first item which matches the specified predicate. It searches the list in the range specified by startIndex and count.
```csharp
// list:	8 3 6 4 2
 int index = list.FindIndex( startIndex: 2, count: 2, match: x => x < 5); 
// index:	3
```
Returns -1 if no item matches the specified predicate.
```csharp
// list:	8 3 6 4 2
 int index = list.FindIndex( startIndex: 2, count: 2, match: x => x < 3); 
// index:	-1
```
## List.FindLast
Returns the last occurrence of item matching the specified predicate.
```csharp
// list:	8 3 2
 int item = list.FindLast(x => x < 5); 
// item:	2
```
For List<T> returns the default value of type T if no item matches the predicate. In this case the default value of int is 0.
```csharp
// list:	8 3 2
 int item = list.FindLast(x => x > 10); 
// item:	0 (default value)
```
## List.FindLastIndex
Returns zero-based index of the last item which matches the specified predicate.
```csharp
// list:	2 4 6 3 8
 int index = list.FindLastIndex(x => x < 5); 
// index:	3
```
Returns index of the last item which matches the specified predicate. It searches the list from the beginning to the specified startIndex.
```csharp
// list:	2 4 6 3 8
 int index = list.FindLastIndex( startIndex: 2, match: x => x < 5); 
// index:	1
```
Returns index of the last item which matches the specified predicate in the range specified by count and the end index surprisingly called startIndex.
```csharp
// list:	2 4 6 3 8
 int index = list.FindLastIndex( startIndex: 2, count: 2, match: x => x < 5); 
//index:	1
```
Returns -1 if no item matches the specified predicate.
```csharp
// list:	2 4 6 3 8
 int index = list.FindLastIndex( startIndex: 2, count: 2, match: x => x < 3); 
// index:	-1
```
List.ForEach
Executes the specified action for each item in the list. It does the same as standard C# foreach statement.
```csharp
// list:	8 3 2
 list.ForEach(x => { Console.Write(x); }); 
// output:	832
```
## List.GetRange
Returns a list with a range of items of the source list.
```csharp
// listA:	8 3 6 4 2
 var listB = listA.GetRange( index: 1, count: 3); 
// listB:	3 6 4
```
## List.IndexOf
Returns the zero-based index of the first occurrence of the item in the list.
```csharp
// list:	8 3 2 6 8
 int index = list.IndexOf(8); 
// index:	0
```
Returns the index of the first occurrence of the item in the list. It searches the list from the specified index to the end of the list.
```csharp
// list:	8 3 2 6 8
 int index = list.IndexOf(item: 8, index: 1); 
// index:	4
```
Returns the index of the first occurrence of the item in the list. It searches the list in the range specified by index and count.
```csharp
// list:	8 3 2 6 8
 int index = list.IndexOf(item: 3, index: 1, count: 2); 
// index:	1
```
Returns -1 if the item is not found in the specified range.
```csharp
// list:	8 3 2 6 8
 int index = list.IndexOf(item: 8, index: 1, count: 2); 
// index:	-1
```
## List.Insert
Inserts an item into the list at the specified index.
```csharp
// list:	8 3 2
 list.Insert(index: 1, item: 5); 
// list:	8 5 3 2
```
## List.InsertRange
Inserts items of another list (or object implementing IEnumerable) into the list at the specified index.
```csharp
// listA:	8 3 2
// listB:	5 7
 listA.InsertRange(index: 1, collection: listB); 
// listA:	8 5 7 3 2
```
## List.LastIndexOf
Returns the zero-based index of the last occurrence of the item in the list.
```csharp
// list:	8 3 2 6 8
 int index = list.LastIndexOf(8); 
//index:	4
```
Returns the index of the last occurrence of the item in the list. It searches the list from the beginning of the list to the specified index.
```csharp
// list:	8 3 2 6 8
 int index = list.LastIndexOf( item: 8, index: 3); 
//index:	0
```
Returns the index of the last occurrence of the item in the list. It searches in the range specified by count and the end index.
```csharp
// list:	8 3 2 6 8
 int index = list.LastIndexOf( item: 6, index: 3, count: 2); 
//index:	3
```
Returns -1 if the item is not found in the specified range.
```csharp
// list:	8 3 2 6 8
 int index = list.LastIndexOf( item: 8, index: 3, count: 2); 
//index:	-1
```
## List.Remove
Removes the first occurence of the specified item from the list.
```csharp
// list:	8 4 2 4
 list.Remove(item: 4); 
// list:	8 2 4
```
##List.RemoveAll
Removes all items matching the specified predicate.
```csharp
// list:	8 3 6 2
 list.RemoveAll(x => x < 4); 
// list:	8 6
```
## List.RemoveAt
Removes the item at the specified index.
```csharp
// list:	8 3 6 2
 list.RemoveAt(index: 2); 
// list:	8 3 2
```
## List.RemoveRange
Removes items from the specified range.
```csharp
// list:	8 3 6 2 4 5
 list.RemoveRange(index: 2, count: 3); 
// list:	8 3 5
```
## List.Reverse
Reverses the order of all items in the list.
```csharp
// list:	8 3 2
 list.Reverse(); 
// list:	2 3 8
```
Reverses the order of the items in the specified range.
```csharp
// list:	8 3 6 2
 list.Reverse(index: 1, count: 2); 
// list:	8 6 3 2
```
## List.Sort
Sorts all items in the list.

This List<T> method works only if the type T implements IComparable<T> or IComparable interface.
```csharp
// list:	8 3 6 2
 list.Sort(); 
// list:	2 3 6 8
```
Sorts list using comparison delegate.
```csharp
// list:	8 3 6 2
 list.Sort((x, y) => x.CompareTo(y)); 
// list:	2 3 6 8
```
Sorts list using comparison delegate (in descending order).
```csharp
// list:	8 3 6 2
 list.Sort((x, y) => y.CompareTo(x)); 
// list:	8 6 3 2
```
Sorts the list using custom comparer.
```csharp
// list:	8 3 6 2
 list.Sort(new MyComparer()); 
// list:	2 3 6 8
```
Sorts the specified range of the list using custom comparer.
```csharp
// list:	8 3 6 2 4 5
 list.Sort(index: 2, count: 3, comparer: new MyComparer()); 
// list:	8 3 2 4 6 5

public class MyComparer : IComparer<int>
{
    public int Compare(int x, int y) { return x.CompareTo(y); }
}
```
## List.ToArray
Creates new array and copies all items into it.
```csharp
// list:	8 3 2
 int[] array = list.ToArray(); 
// array:	8 3 2
```
Returns empty array for empty list.
```csharp
// list:	(empty)
 int[] array = list.ToArray(); 
// array:	(empty)
```
## List.TrimExcess
Trims the list capacity to reduce memory usage if it's reasonable. It sets Capacity to the same value as Count but only if the Count is less than about 90 % of Capacity.
```csharp
// list:	1 2 3 4 5
// list.Count:	5
// list.Capacity:	8
 list.TrimExcess(); 
// list.Count:	5
// list.Capacity:	5
```
If the Count is almost the same as the list Capacity it does nothing.
```csharp
// list:	1 2 3 4 5 6 7
// list.Count:	7
// list.Capacity:	8
list.TrimExcess(); 
// list.Count:	7
// list.Capacity:	8
```
## List.TrueForAll
Returns true if all items in the list match the specified predicate.
```csharp
// list:	8 3 2
 bool result = list.TrueForAll(x => x < 10); 
//result:	true
```
Returns false if not all items in the list match the specified predicate.
```csharp
// list:	8 3 2
 bool result = list.TrueForAll(x => x < 5); 
// result:	false
```
