# How not to use interfaces in C#

### Follow these best practices for using interfaces to avoid interface overuse when designing your types


![How not to use interfaces in C#](https://images.idgesg.net/images/article/2018/03/wrong_way_road_sign_neonbrand_cc0_via_unsplash_1200x800-100753508-large.jpg)

When designing an application, you will often need to use interfaces and abstract classes. This article discusses some common examples of "interface abuse" and the strategies we can use to avoid them. It also discusses what is meant by the tenet, "program to an interface and not to an implementation."


## What are interfaces?

First off, let's get an understanding of interfaces and why they are needed in programming. An interface is strictly a contract; it doesn't have any implementation. An interface contains only member declarations. You can have method declarations but not definitions. The members declared in an interface should be implemented in the types (classes and structs) that extend or implement the interface. An interface cannot contain fields. An interface cannot be serialized because it cannot have data members. As I said, an interface can have only declarations and not definitions.  

## Avoid making changes to interfaces 

A class or a struct that extends an interface should implement all of its members. If the implementation changes, your code will still work. However, if the contract, i.e., the interface, changes, then you'll have to change the implementations of all types that extend the interface. In other words, any change to the interface will impact all of the types that extend the interface. The types extending the interface must adhere to the contract. So, use interfaces only when you rarely need to change them. Also, it's generally better to create a new interface than change an existing one. 

## Program to an interface, not to an implementation

You might have heard the words "program to an interface and not to an implementation" now and then. You might have been using interfaces in your code but you were still programming to the implementation. Let's now examine the difference between the two approaches.

When you are programming to an interface you use the most generic abstraction (an interface or an abstract class) instead of a concrete implementation. Since interfaces guarantee uniformity, programming to an interface implies that you can handle similar objects in a uniform manner. In doing so, you're decoupled from the implementation --- i.e., your implementations can vary. This adds flexibility to your designs as well.

The following code snippet illustrates programming to an interface. Consider an interface named IRepository that contains the declaration of a few methods. The ProductRepository and CustomerRepository classes extend the IRepository interface and implement the methods declared in the IRepository interface, as shown below.
```csharp
public  interface  IRepository
{
  //Some code
}
public  class  ProductRepository:  IRepository
{
  //Some code
}
public  class  CustomerRepository:  IRepository
{
  //Some code
}
```
The following code can be used to create an instance of the ProductRepository.
```csharp
IRepository repository =  new  ProductRepository();
```
The idea is that you can use any class here that implements the IRepository interface. So, the following statement is also valid.
```csharp
IRepository repository =  new  CustomerRepository();
```
When you program to an implementation, this uniformity is lost. Instead, you will typically have some constructs, such as "if..else" or "switch..case" statements, for controlling behavior in your code.

## Avoid overuse of interfaces

Associating every class with an interface is not a good practice. Overuse of interfaces in this manner creates unnecessary complexity, introduces redundancy of code, violates [YAGNI](https://martinfowler.com/bliki/Yagni.html), and reduces the readability and maintainability of the code base. Interfaces are used to group together objects that have identical behavior. If the objects don't have identical behavior, there is no need for this grouping. Using interfaces when you aren't going to have multiple implementations of it is an example of interface overuse.

Creating an interface for a class that matches the public members of the class is quite common. In doing so you don't add any value at all --- you merely duplicate the interface of the class without adding any real abstraction.

Let's now look at an example of how interfaces are overused. Consider the following interface named IProduct.
```csharp
public  interface  IProduct
{
  int  Id  {  get;  set;  }
  string  ProductName  {  get;  set;  }
  double  Price  {  get;  set;  }
  int  Quantity  {  get;  set;  }
}
```
The Product class extends the IProduct interface as shown below.
```csharp
public  class  Product  :  IProduct
{
  public  int  Id  {  get;  set;  }
  public  string  ProductName  {  get;  set;  }
  public  double  Price  {  get;  set;  }
  public  int  Quantity  {  get;  set;  }
}
```
Clearly, we don't need the IProduct interface, as the interface and its implementation are identical. The redundant code is unnecessary.

Let's look at another example. The following code snippet shows an interface named IProductManager having the declaration of two methods, namely Save and Update.
```csharp
 public  interface  IProductManager
{
  void  Save(IProduct product);
  void  Update(IProduct product);
}
```
The IProductManager interface contains the declarations of the public methods of the ProductManager class. Here's what the ProductManager class looks like.
```csharp
 public  class  ProductManager  :  IProductManager
{
  public  void  Save(IProduct product)
  {
    //Write your implementation here
  }
  public  void  Update(IProduct product)
  {
    //Write your implementation here
  }
}
```
The IProduct and IProductManager interfaces are examples of interface overuse. Both of these interfaces have a single implementation and they don't add any value at all.

## Conclusion
By using interfaces, you can remove the unnecessary couplings in your code and make your code easily testable. However, overuse of interfaces should be avoided. Use interfaces only when there will be more than one implementation of them. You can also use interfaces when you have a class that has many roles to play or that has multiple responsibilities. In this case your class can implement multiple interfaces --- one for each role.

<br>
<br>
<hr>
<small>Kanjilal, M., &amp; Kanjilal, J. (2019, May 06). How not to use interfaces in C#. Retrieved November 12, 2020, from https://www.infoworld.com/article/3391960/how-not-to-use-interfaces-in-c.html</small>
<br>