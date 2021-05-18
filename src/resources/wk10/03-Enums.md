## C# Enum's

This lesson explains how to use C# enum. Our objectives are as follows:

-   Understand what an enum is.
-   Be able to create new enum types.
-   Learn how to use enums.
-   Gain familiarity with System.Enum type methods.

## Enums Defined

Enums are strongly typed constants. They are essentially unique types that allow you to assign symbolic names to integral values. In the C# tradition, they are strongly typed. That means an enum of one type may not be implicitly assigned to an enum of another type, though the underlying value of their members is the same. Along the same lines, integral types and enums are not implicitly interchangeable. All assignments between different enum types and integral types require an explicit cast.

Enums lend themselves to more maintainable code because they are symbolic, allowing you to work with integral values but using a meaningful name to do so. For example, what type of code would you rather work with -- a set of values named North, South, East, and West or the set of integers 0, 1, 2, and 3 that mapped to the same values, respectively? Enums make working with strongly typed constants via symbolic names easy.

Enums are value types, which means they contain their own value, can't inherit or be inherited from, and assignment copies the value of one enum to another. You will see in this lesson and elsewhere that enums are used and referred to in both lower case, *enum*, and upper case, *Enum*. The relationship between the two is that the C# type, *enum*, inherits the Base Class Library (BCL) type, *Enum*. Use the C# type, *enum*, to define new enums and use the BCL type, *Enum*, to implement static enum methods.

## Creating an Enum

The .NET Framework Class Library contains many enums and examples of how they are used. For example, every time you put an icon on a *MessageBox*, you use the *MessageBoxIcon* enum. For a list of available enums in the .NET Framework Class Library, look at the documentation for the *Enum* class and click on the Derived Classes link.

Whenever there are situations where you are using a set of related numbers in a program, consider replacing those numbers with enums. It will make a program more readable and type-safe. Listing 17-1 contains an *enum* definition and code that uses enum in a *switch* statement. Instead of using the numbers 0, 1, and 2 in the *switch* statement, the code is more meaningful through the use of the *Volume*enum.

```csharp
using System; 

// declares the enum 
public enum Volume
{ 
  Low, 
  Medium,
  High
}  

// demonstrates how to use the enum  
class EnumSwitch
{  static void Main()
 { 
   // create and initialize     
   // instance of enum type 
   Volume myVolume = Volume.Medium;  
   // make decision based 
   // on enum value     
   switch (myVolume)
    {        
        case Volume.Low:
          Console.WriteLine("The volume has been turned Down.");           break;
        case Volume.Medium:
          Console.WriteLine("The volume is in the middle.");           break;
        case Volume.High:
          Console.WriteLine("The volume has been turned up.");           break;
    }
    Console.ReadLine();
 }
}
```

Notice that it is declared with the *enum* keyword and has a type identifier (*Volume*) and contains a comma-separated list of values enclosed within curly braces.

This enum is of type *Volume,* and we use it to declare the *myVolume* variable in the *Main* method. Since an enum is a value type, we can assign a value (*Volume.Medium*) to it directly, similar to the simple types such as *int* or *double*. Once the *myVolume* variable is declared and initialized, it is used in the *switch* statement. Each of the *case* statements represent a unique member of the *Volume* enum.

Any time a member of the *Volume* enum is used, it is fully qualified with the "*Volume*" identifier to guarantee type safety. For example, if there were a *Meat* enum in scope, then *Meat.Medium* would definitely have different semantics than *Volume.Medium*. With both enums in scope, it would be ambiguous just to use the *Medium* identifier without type qualification. Using the type identifier ensures such mistakes are not made.

## Using Enums

An enum is typically specified as shown in Listing 17-1 but may be customized by changing its base type and member values. By default, the underlying type of an enum is *int*. This default may be changed by specifying a base when declaring the enum. You would specify a different base if the enum was used extensively and there was an opportunity for space savings by selecting a smaller type. Another reason may be if you wanted the underlying type of the enum to correspond to another type in your program and you wanted to cast explicitly between the two without loss of precision. Valid base types include *byte*, *sbyte*, *short*, *ushort*, *int*, *uint*, *long*, and *ulong*.

Another modification you can make to an enum is to set the value of an enum member. By default, the first member of an enum takes the value of zero. If this value doesn't make sense for your enum, you can change it to one or some other number. Additionally, you can change any of the members of an enum to any value that is valid for its base type. Unassigned enum members have a value that is one more than their predecessor. Listing 17-2 shows how to modify the base type and member values of an enum.

```csharp
using System;

// declares the enum
public enum Volume : byte
{
    Low = 1,
    Medium,
    High
}

class EnumBaseAndMembers
{
    static void Main()
    {
        // create and initialize 
        // instance of enum type
        Volume myVolume = Volume.Low;

        // make decision based
        // on enum value
        switch (myVolume)
        {
            case Volume.Low:
                Console.WriteLine("The volume has been turned Down.");
                break;
            case Volume.Medium:
                Console.WriteLine("The volume is in the middle.");
                break;
            case Volume.High:
                Console.WriteLine("The volume has been turned up.");
                break;
        }
        Console.ReadLine();
    }
}
```
The *Volume* enum shows how to modify the base type and members of an enum. Its base type is changed to *byte* with the:* <type>* syntax following the enum identifier, *Volume*. This ensures that the *Volume* enum may only have members with values that are valid for type *byte*.

The first member of the *Volume* enum, *Low*, has its value changed to 1. The same syntax, *<member> = <value>*, may be applied to any member of the enum. You are restricted from creating forward references, circular references, and duplicate references in enum members.

The default values of the *Volume* enum are *Low*=0, *Medium*=1, and *High*=2 because the first member of an enum default to 0 and the following members default to one more than their predecessor. However, the *Volume* enum in Listing 17-2 has its *Low* member set to 1, which means that *Medium*=2 and *High*=3.

## Enum tricks

Enum types implicitly inherit the System.Enum type in the Base Class Library (BCL). This also means that you can use the members of System.Enum to operate on enum types. This section does just that and shows useful tips and tricks to use with enums in your programs.

A common requirement with enums is to convert between the enum and a variable of its base type. For example, if you are getting input in the form of an *int* from a user or a file stream, then you can cast it to an enum and use it in a meaningful way in your program. You can also get a complete list of enum member names or enum values. The user will find it useful if you have logic that needs to iterate through every enum member. Listing 17-3 shows how to perform conversions between enums and their base types and how to use some of the System.Enum type members.

```csharp
using System;

// declares the enum
public enum Volume : byte
{
    Low = 1,
    Medium,
    High
}

// shows different ways
// to work with enums
class Enumtricks
{
    static void Main(string[] args)
    {
        // instantiate type
        Enumtricks enumtricks = new Enumtricks();

        // demonstrates explicit cast
        // of int to Volume
        enumtricks.GetEnumFromUser();

        // iterate through Volume enum by name
        enumtricks.ListEnumMembersByName();

        // iterate through Volume enum by value
        enumtricks.ListEnumMembersByValue();

        Console.ReadLine();
    }

    // demonstrates explicit cast
    // of int to Volume
    public void GetEnumFromUser()
    {
        Console.WriteLine("\n----------------");
        Console.WriteLine("Volume Settings:");
        Console.WriteLine("----------------\n");

        Console.Write(@"
1 - Low
2 - Medium
3 - High

Please select one (1, 2, or 3): ");

        // get value user provided
        string volString = Console.ReadLine();
        int volInt = Int32.Parse(volString);

        // perform explicit cast from
        // int to Volume enum type
        Volume myVolume = (Volume)volInt;

        Console.WriteLine();

        // make decision based
        // on enum value
        switch (myVolume)
        {
            case Volume.Low:
                Console.WriteLine("The volume has been turned Down.");
                break;
            case Volume.Medium:
                Console.WriteLine("The volume is in the middle.");
                break;
            case Volume.High:
                Console.WriteLine("The volume has been turned up.");
                break;
        }

        Console.WriteLine();
    }

    // iterate through Volume enum by name
    public void ListEnumMembersByName()
    {
        Console.WriteLine("\n---------------------------- ");
        Console.WriteLine("Volume Enum Members by Name:");
        Console.WriteLine("----------------------------\n");

        // get a list of member names from Volume enum,
        // figure out the numeric value, and display
        foreach (string volume in Enum.GetNames(typeof(Volume)))
        {
            Console.WriteLine("Volume Member: {0}\n Value: {1}", 
                volume, (byte)Enum.Parse(typeof(Volume), volume));
        }
    }

    // iterate through Volume enum by value
    public void ListEnumMembersByValue()
    {
        Console.WriteLine("\n----------------------------- ");
        Console.WriteLine("Volume Enum Members by Value:");
        Console.WriteLine("-----------------------------\n");

        // get all values (numeric values) from the Volume
        // enum type, figure out member name, and display
        foreach (byte val in Enum.GetValues(typeof(Volume)))
        {
            Console.WriteLine("Volume Value: {0}\n Member: {1}", 
                val, Enum.GetName(typeof(Volume), val));
        }
    }
}
```

This includes three method calls to *GetEnumFromUser*, *ListEnumMembersByName*, and *ListEnumMembersByValue*. Each of these methods demonstrates a different aspect of using System.Enum to work with enums.

The *GetEnumFromUser* method shows how to obtain *int* input and translate it into an appropriate enum type. Converting an *int* to an enum makes the code more readable and type-safe. The following is an excerpt from above that shows the pertinent part of the code that performs the conversion:
```csharp
// get value user provided
string volString = Console.ReadLine();
int volInt = Int32.Parse(volString);
// perform explicit cast from
// int to Volume enum type
Volume myVolume = (Volume)volInt;
```
After the program displays a menu, it prompts the user for a selection in the form of a number (1, 2, or 3). When the user makes a selection and presses the Enter key, the code reads the value with *Console.ReadLine*, which returns the value as a *string* type. Since you can only cast an *int* to a *Volume* enum type, the user's input must be converted from a *string* to an *int* with the *Int32.Parse* method. Converting the *in*t to a *Volume* enum type is simply a matter of applying a cast operation during the assignment.

## Furthermore

To get all the members of an enum at the same time, you can use the *GetNames* method of the *System.Enum* type. It returns a *string *array of the names of all enum's members. An excerpt from the *ListEnumMembersByName* method in Listing 17.3 that shows this appears below:
```csharp
// get a list of member names from Volume enum,
// figure out the numeric value, and display
foreach (string volume in Enum.GetNames(typeof(Volume)))
{
    Console.WriteLine("Volume Member: {0}\n Value: {1}", 
        volume, (byte)Enum.Parse(typeof(Volume), volume));
}
```
*Since GetNames* returns an array of *strings*, it is easy to use in a loop statement such as *foreach*. Something you may be curious about in the code above is the second parameter to the *WriteLine* method's format string. Given the enum type and a string representation of the member name, you can use the *Enum.Parse* method to get the underlying value of that member. Considering the *Volume* enum's base type is the byte, the return value from *Enum.Parse* must be cast to a *byte* before the assignment. That forces the numeric representation of the enum value to appear.

If we had omitted the *byte* cast, the output would be the Volume enum member. That would then be converted to a string representation of the member name, not what the code intended to show.

Instead of getting names of all the members of an enum, you may have a reason to get all the values of the enum at one time. The code below, from the *ListEnumMembersByValue* method in Listing 17.3, shows how to accomplish this:
```csharp
// get all values (numeric values) from the Volume
// enum type, figure out member name, and display
foreach (byte val in Enum.GetValues(typeof(Volume)))
{
    Console.WriteLine("Volume Value: {0}\n Member: {1}", 
        val, Enum.GetName(typeof(Volume), val));
}
```
Given the type of the enum, the *GetValues* method of System.Enum will return an array of the given enum's base type. In this case, it is *a byte*. While iterating through this list, each member is printed to the console showing its value and name. The name is obtained by using the *GetName* method of System.Enum. That accepts an enum type and a value for which to get the corresponding name.

### Final Thoughts About C# Enum

Enums are lists of strongly typed constants with members that are symbolic names, corresponding to an underlying integral type. Enum base types can be changed and member values can be specified. The System.Enum .NET Framework Class Library type is the base class of enum types. It contains methods that allow you to work with enums in different ways, such as working with a list of names or values, converting from value to name, and converting from name to value. For more information on the System.Enum type, see the .NET Framework SDK documentation.

<br>
<br>
<hr>
<small>Friedman, J. (2019, June 18). C# Enum: Learning the Essentials in Lesson 17. Retrieved November 12, 2020, from http://csharp-station.com/Tutorial/CSharp/Lesson17</small>
<br>
<br>

## Daily Journal
### Answer the following questions
 
1. What is an Enum?

2. What are some use cases for Enum's?

3. How can you modify an Enum?
