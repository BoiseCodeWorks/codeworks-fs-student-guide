# C# Inheritance: 
### A Complete but Gentle Introduction

Time for another dive into a concept of the C# language. Today's post will cover inheritance, a concept that will make us analyze the object-oriented side of C#.

As the title of the article makes clear, this post is a gentle introduction to the concept of inheritance. It's aimed at beginners that still haven't mastered inheritance. That means that, despite being a complete introduction, we'll not venture into more advanced aspects of the concept. By the end of the post, you'll not know everything there is to know about C# inheritance. Instead, you'll have a solid working knowledge, upon which you can keep building more and more.

Let's get started.

## Defining C# Inheritance

Inheritance is a feature present in object-oriented languages, and it's one of the most essentials features at that. It's not rare to see people describing it as a mechanism to help you achieve code reuse. Sure, inheritance can be used for that, but there's a lot more to it than just getting rid of duplicated code. So, without further ado, let's talk about what inheritance is.

Inheritance is a mechanism that allows the developer to describe a relationship between two classes. One of the classes is called a **derived class**, and the other we call a **base class**. We say that the derived class *inherits* from the base class. Conversely, we can also call the classes **child class** and **parent class**, respectively. So, what does said relationship entail? What happens when a class inherits from another one, in practice?

In short, two main things happen, and that's due to what I call the dual nature of inheritance. You can think of inheritance as a mechanism to share (or reuse) code. On the other hand, inheritance is also a mechanism to imprint identity into a class. Confused? This will become more evident in some examples.

## Inheritance as a Sharing Code Mechanism: A Quick Example

Suppose we have a class called **Foo**, containing only one method called **SayHi()**:
```csharp
public class Foo
{
    public void SayHi()
    {
        Console.WriteLine("Hi! I'm an instance of 'Foo'!");
    }
}
```
Let's now add a second class, called **Bar**:
```csharp
public class Bar : Foo
{

}
```
This new class doesn't feature any member. No constructor, no properties, nothing. However, take a look at the name of the class. A colon follows it and then the name of the first class. By using this syntax, we declare that the **Bar** class inherits from **Foo**. That means that **Bar** has access to the **SayHi()** method, even though it never declares it. See the following example:
```csharp
static void Main(string[] args)
{
    Foo foo = new Foo();
    foo.SayHi(); // prints "Hi! I'm an instance of 'Foo'!"
    Bar bar = new Bar();
    bar.SayHi(); // prints "Hi! I'm an instance of 'Foo'!"
}
```
If you run the code above, you'll see that both the second and the fourth lines print the same message. The **Bar** class can use the **SayHi()** method normally, because it inherits it from **Foo**.

"Wait a minute!" you might be wondering. "This is all nice and stuff, but the message isn't quite right! I mean, **bar** is clearly not an instance of **Foo**!". Well, not so fast.

## Inheritance as an Identity Marker: A Quick Example

The second important aspect of inheritance is what it means for the identity of the child class. When a class inherits from another one, we say that an "is-a" relationship now exists between them. In other words, if **Bar** inherits from **Foo**, then for all intents and purposes, **Bar** *is* a **Foo.** Again, an example will make this easier to understand.

Suppose we have a method that takes an instance of **Foo** as an argument:
```csharp
static void MakeAFooSayHi(Foo foo) => foo.SayHi();
```
The method is so simple we can write it as a one-liner, using the expression-bodied method feature, introduced back in C# 6.0. As you can see, the method takes an instance of **Foo** and call its **SayHi()** method. Now, consider the following lines of code, which prove that an instance of **Bar** is, indeed, an instance of **Foo**:
```csharp
static void Main(string[] args)
{
    Bar bar = new Bar();
    MakeAFooSayHi(bar);
}
```
If you look at the excerpt of code above, you'll see that the second line does print the expected message, meaning that **bar** is, indeed, a **Foo**.

## C# Inheritance: Going Deeper

Now that you have a basic understanding of inheritance in C# let's start diving deeper into it. In this section, you'll learn more about the characteristics of inheritance in C#?how it works, what can be inherited and what can't, and much more. Roll up your sleeves and let's get to it.

## Inheritance in C#: Single and Transitive

There are programming languages that support what we call multiple inheritance, i.e., a class can simultaneously inherit from more than one class. C# isn't one of those since it only supports single inheritance. There is a good reason for that, class designs that make use of multiple inheritance can have severe problems. It's out the scope of this post to explain the problems in detail, this is a gentle introduction, after all. If you're curious, google "[diamond problem](https://www.lambdafaq.org/what-about-the-diamond-problem/)," and you'll find plenty of material discussing it at length.

Another critical property of inheritance is that it is transitive. That means that if B inherits from A, and C inherits from B, then C also inherits from A. Take a look at the following example:
```csharp
public class A
{
    public void FirstLevelMethod()
    {
        Console.WriteLine("This is the method defined in 'A'");
    }
}

public class B : A
{
    public void SecondLevelMethod()
    {
        Console.WriteLine("This is the method defined in 'B'");
    }
}

public class C: B
{
    public void ThirdLevelMethod()
    {
        Console.WriteLine("This is the method defined in 'C'");
    }
}

static void Main(string[] args)
{
    B b = new B();
    C c = new C();

    b.SecondLevelMethod(); // 'b' has access to the method defined on its own class
    b.FirstLevelMethod(); // 'b' has also access to the method defined in 'A'

    c.ThirdLevelMethod(); // 'c' has access to the method defined on its own class
    c.SecondLevelMethod(); // 'c' has also access to the method defined in 'B', since it inherits from it
    c.FirstLevelMethod(); // 'c' has also access to the method defined in 'A', since it inherits from 'B', who inherits from 'A'
}
```
Here we have three classes. Each class inherits from the previous one except the first, obviously but also defines a method of its own. Inside the main method, we create new instances of both "B" and "C" and call their methods, demonstrating the transitive property of inheritance.

The example above shows the transitive property of inheritance when it comes to its "code sharing" side. Does the same apply to its role as an identity assigner? In other words: if B is an A, and C is a B, then is C also an A?

Yes, the transitive nature of inheritance still applies in this case. Let's see an example.

Suppose we define a method like this:
```csharp
static void SomeMethod(A a) => a.FirstLevelMethod();
```
Now let's change the main method of our example, so it looks like the following:
```csharp
static void Main(string[] args)
{
    A a = new A();
    B b = new B();
    C c = new C();

    SomeMethod(a);
    SomeMethod(b);
    SomeMethod(c);
}
```
If you run the code, you'll see that it prints the line "This is the method defined in 'A'" three times, proving that all of the objects are being considered instances of A.

## What Can Be Inherited?

Not all members of a class are inherited. Constructors, for instance, are not and have never been inheritable in C#. That means that every class must declare its own constructors. Child classes also don't inherit [finalizers](https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/classes-and-structs/destructors) from their parents. Everything else is inherited, but whether it'll be visible or not depends on the member's visibility.

## Visibility Affects Inheritance

While all other members of a base class are inherited by derived classes, whether they are visible or not depends on their accessibility. You'll now learn how a member's visibility affects whether it's going to be accessed in derived classes or not.

### Private Members

Private members aren't visible from child classes. Let's illustrate it with an example:
```csharp
public class Person
{
    private readonly string name;

    private readonly int age;

    public Person()
    {
        name = "John Doe";
        age = 42;
    }

    public string IntroduceThemselves() =>
        $"Hello, my name is {name} and I'm {age} years old.";
}
```
A simple class, nothing too fancy about it. Now, consider the **Student** class, which inherits from **Person**:
```csharp
public class Student : Person
{
    public string SayAge() =>
        $"I am {age} years old";
}
```
The class above fails to compile, with a message informing that **Person.age**?isn't accessible due to its protection level, as you can see in the following image:

![](https://i1.wp.com/blog.submain.com/wp-content/uploads/2019/09/01-c.png?resize=906%2C264)

Is there an alternative? As it turns out, yes. Private members can be accessed in child classes if the child class is nested in the parent class. With a simple change, the code starts compiling:
```csharp
public class Person
{
    private readonly string name;

    private readonly int age;

    public class Student : Person
    {
        public string SayAge() =>
            $"I am {age} years old";
    }

    public Person()
    {
        name = "John Doe";
        age = 42;
    }

    public string IntroduceThemselves() =>
        $"Hello, my name is {name} and I'm {age} years old.";
}
```
Now the code gladly compiles. It'd be out of the scope of this post to take a detour on nested classes, but there's [plenty of material out there](https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/nested-types) to learn from.

### Protected and Internal Members

When it comes to protected members, things are different. Protected members are visible *only *in child classes, which means they're supposed to be used in inheritance. Internal members are a little bit different?they're visible in derived classes located in the same assembly as the parent class.

### Public Members

Finally, inherited public members are not only accessible, they're part of the public interface of the child class. They can be normally called as if they were declared in the child class. You've already seen this behavior in action during our first example.

## Wrapping-up

To close this post, let's make it clear that all that we've covered today is just the tip of the iceberg when it comes to C# inheritance. There's a lot more to it than we could realistically cover in a single blog post. In the article, you've learned the basics of inheritance. We've defined inheritance, explaining what it means for a class to inherit from another. We've looked at things like the transitive nature of inheritance, how inheritance defines an "is-a" relationship, and how visibility affects inheritance.

<br>
<br>
<hr>
<small>Schults, C. (2019, October 01). C# Inheritance: A Complete but Gentle Introduction. Retrieved November 12, 2020, from https://blog.submain.com/c-inheritance-complete-introduction/</small>
<br>