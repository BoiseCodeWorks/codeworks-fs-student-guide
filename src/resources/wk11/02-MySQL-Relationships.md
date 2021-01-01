# Relationships
SQL databases use things called keys (Primary keys and Foreign keys) in order to build relationships between tables. In this lesson, we'll discuss the difference between the two keys and how to use them, and we will also discuss the different types of relationships you can build with them. There are 3 relationship types: one-to-one, one-to-many, and many-to-many. 

### keys
Remember in lesson one we discussed how SQL databases are strongly dependent on relationships? We use keys to build those relationships. A record on one table might be associated with a record on another table and the way they reference one another is through the use of primary and foreign keys. 

## Primary Keys

Primary keys are pieces of unique information that are used to identify records on a table. Primary key values must be unique (not repeated, all values must be different from each other), and they may not contain Null values. 

Imagine you're creating a database for a car rental business and they have a lot of the same cars in their inventory (e.g., multiple Toyota Camry's). A good way to tell them all apart from each other might be a license plate number - license plate numbers are unique to vehicles in that they do not repeat themselves and all cars should have a license plate (so you should not have null values). This would make a great Primary key.

We could create our table and establish the primary key by using the following command:

```SQL
CREATE TABLE vehicles (
make VARCHAR(40),
model VARCHAR(40),
year int NOT NULL,
color VARCHAR(40),
miles int NOT NULL,
mpg int NOT NULL,
license_plate VARCHAR(40),
driver VARCHAR(255),
PRIMARY KEY (license_plate)
)
```




### Foreign Keys

Now that we have a primary key, what do we do with it? We use it as a foreign key on a different table. Foreign keys are used to reference data on another table. It's how we tell other tables where to look if they want to pull up a specific record. 

Imagine you're standing in a garage full of 2015 Toyota Camrys and they are all black. If I ask you to go find a specific car and tell me it's mileage, how will you be able to identify the one I want? It would be pretty difficult unless you had a unique identifier, like the license plate number. In this example, you're another table that's using a foreign key (the license plate number) to find information.

The syntax for delcaring a foreign key is incredibly similar to declaring a primary key, except with one added line - we just need to tell the current table what table the foreign key is coming from. Let's create a table for our customers and add a foreign key so that we can keep track of which vehicle the customer rented. Let's also establish a primary key in case a future table needs to reference the customer table.


```SQL
CREATE TABLE customers (
first_name VARCHAR(50),
last_name VARCHAR(50),
age int NOT NULL,
insurance_company VARCHAR (50),
license_number VARCHAR(50),
vehicle_license VARCHAR(50),
PRIMARY KEY (license_number),
FOREIGN KEY (vehicle_license) REFERENCES vehicle_inventory(license_plate)
```

And without even knowing it, you just built your first relationship.

## Relationships

### One-To-One

One-to-one relationships are exactly what they sound like - one row on one table should be associated with only one row on another table. 

A good example of this is that every person can have only one passport. One passport would not have multiple people assigned to it, and one person would not have multiple passports to the same country at one time. 

When you declare this kind of relationship in your tables, it would look a lot like what we just did with one exception: we would need to declare the foreign key on the customers table as being unique, meaning that it cannot be repeated. If we were to do that, it would look like:

```SQL
CREATE TABLE customers (
first_name VARCHAR(50),
last_name VARCHAR(50),
age int NOT NULL,
insurance_company VARCHAR (50),
license_number VARCHAR(50),
vehicle_license VARCHAR(50),
PRIMARY KEY (license_number),
FOREIGN KEY (vehicle_license) UNIQUE REFERENCES vehicle_inventory(license_plate)
```

This would prevent other customers from renting the same vehicle - each car can only be rented by one driver, and each driver can only rent one car.

### One-To-Many
One-to-one relationships are easy to understand and maintain, but they aren't the most practical in all cases. They are useful in very specific instances, but they are rigid and inflexible. 

One of the more common data relationships is the one-to-many. What if we have one car being rented by a group of friends on a trip - there could be many drivers for that one car. 

In this situation, it would make sense to remove the UNIQUE keyword on the customer table; that way you can enter multiple customers as renting the same car. 

Another example of one-to-many would be to think of a kindergarden class - many students have only one teacher, but that one teacher has many students.

### Many-To-Many

Many-To-Many relationships occur when many records on one table are associated with many records on another table. A real world example of this might be customers and products - a customer can buy many products, and a product can be bought by many customers. 

Many-to-many relationships require the use of a third table that has at least two foreign keys. This would apply to our current example in the event that a group with multiple drivers rents multiple cars, such that any driver can drive any of the rented cars within the group. 

Let's go ahead and create this table to see what this would look like:

```SQL
CREATE TABLE customers_vehicles (
id INT NOT NULL AUTO_INCREMENT,
license_plate VARCHAR(255),
license_number VARCHAR(255),
PRIMARY KEY (id),
FOREIGN KEY (license_plate)
  REFERENCES vehicles(license_plate),
FOREIGN KEY (license_number)
  REFERENCES customers(license_number)
  )
```
>*Important to note* the combination of AUTO_INCREMENT and NOT NULL will tell the database to fill in each record with an id and it will automatically count upwards. 

The first record you insert will have an id of 1, the next record will have an id of 2...etc. You will never have to manually provide this information, it will happen automatically upon creation of the record.

  This table will allow you to keep track of the multiple drivers renting the multiple cars. Each record will reference a driver and the vehicle they rented, but there are no unique constraints on the foreign keys, which allows you to add the same driver multiple times and the same vehicle multiple times. 

## Think About It

Identify an instance of each of the three relationships within a school (without using any of the previously provided examples).

<br>
<hr>
<br>

# Advancing with Queries - Inner Join

## 1. Understanding the problem
Let's imagine we have a relational table called classroomStudents with the following structure and inserts:
<table>
<tr>
<th>id</th>
<th>classroomId</th>
<th>studentId</th>
</tr>
<tr>
<td>1</td>
<td>14</td>
<td>02</td>
</tr>
<tr>
<td>2</td>
<td>14</td>
<td>18</td>
</tr>
<tr>
<td>3</td>
<td>22</td>
<td>12</td>
</tr>
<tr>
<td>4</td>
<td>14</td>
<td>03</td>
</tr>
<tr>
<td>5</td>
<td>22</td>
<td>10</td>
</tr>
</table>
<style>
th, td {
  text-align: center;
}
</style>

Because Sql is heavily dependent on relationships the existence of such a table (like the one above) in a real life application is very likely. `classroomStudents` is an example of a many to many relationship as both classrooms and students can have many connections to the other.

Let's think for a moment about the user experience, `UX`, if we performed a simple select query on the classroomStudents table. It would be a frustrating experience for the teacher to take attendance while having only arbitrarily assigned `id` values of the corresponding `student` inserts instead of their actual names. Likewise the students would all be late as they couldn't discover which actual classroom to be in based off of an arbitrarily assigned classroom id.

So the challenge at hand is to provide additional information about both the classroom and the student beyond what the table `classroomStudents` can provide. 


We'll accomplish this with an `inner join` query. This will enable us to find a relational insert that we care about, and once found, then we'll use identifying information about a student from that insert to query the `students` table for the additional information about that student that we want to provide to the user/front-end.  We'll do the same for classrooms as well.

## 2. Utilizing Inner Joins
We'll extend what we know so far about simple queries to incorporate an inner join to complete the task at hand. Let's extend our query incrementally to get an understanding for each part of the query in turn. Our first query will return all the information available on their respective tables about the classrooms and students referenced on `classroomStudents`, and looks like this: 

```sql
SELECT * FROM classroomStudents cs
INNER JOIN students s ON s.id = cs.studentId
INNER JOIN classrooms c ON c.id = cs.classroomId;
```

Let's cover exactly what this code is doing. Remember that the `*` symbol stands for `all columns` or `everything`. So we're selecting all of the information available for each insert our query matches. This code is also using a feature of SQL we haven't used yet, namely `aliases`. Above we have three instances of an `alias` - 'cs', 's', 'c' which are the `aliases` for the tables classroomStudents, students, and classrooms respectively. An alias is declared following the first instance of the written table name and can be used in place of writting out the full table name. Using appropriately abbreviated aliases allows our code to be more condensed and even dry while still preserving readability.

Lastly, what is the `INNER JOIN` doing? Syntactically, following the Sql command `INNER JOIN` we provide the table name of the table that we want our query to look over. Then we specify a condition that will be true on the target insert of the referrenced table following the Sql keyword `ON`. Note that we provided aliases for both tables so we could use those aliases rather than the longer table names in our conditional.<br />
Functionally, we are looking at each insert in classroomStudents and for each insert we are using the studentId value to find the correct student insert on the students table and the classroomId value to find the correct classroom insert on the classrooms table.

So what does the object returned to us from this query look like exactly? It might be surprising to discover, though it should be clear why *post hoc*. Our query will return a collection (an array) full of objects populated with both classroom and student information. As our query is right now any object within the collection will have these properties with varying values:
```js
{
  // values from classroomStudents table
  classroomId: 14,
  studentId: 02,
  // ---------------

  // values from students table
  grade: 'Junior',
  // ---------------

  // values from classrooms table
  period: 02,
  roomNum: 'ILC - 103'
  // ---------------

  // conflicting property names that got values populated from classrooms
  // because classrooms was the last table in the query to be referenced
  // so its data overwrote the values of these properties
  name: 'Math',
  id: 14,
  // ---------------
}
```

## 3. Continuing with Aliases
Because both our students and classrooms inserts have the property 'name' we can't retrieve both values and save them simultaneously under the same key. But we need to do something so that the teacher can take roll call! It would be a band aid fix to simply change the order of our inner join statements from above because (though this would assign the value of the name property to be the student's 'name') we would have created the problem of not knowing the classroom's 'name'. Alas, `aliases`!

Since we know of duplicate property names we're going to create new properties on the fly to store both values at the same time by utilizing multiple key value pairs. We've modified our query to now look like this: 

```sql
SELECT cs.*, s.*, c.name AS className, c.period, c.roomNum FROM classroomStudents cs
INNER JOIN students s ON s.id = cs.studentId
INNER JOIN classrooms c ON c.id = cs.classroomId;
```

Perhaps the craziest syntax surprise from the code above is that aliases may be used before they've been declared within the statement. You'll notice that the last two lines of our query haven't changed, but we did modify what columns we wanted to populate. We've listed several instructional commands about what columns to pull data from all separated with `,`'s. `cs.*` means that from the classroomStudents table we want all of the information on every insert. We did the same thing with the students table. For classrooms we used the `AS` keyword to specify that whatever value we pulled from the classroom's 'name' property we would save in a new property called 'className'. Lastly, because we can only either get all columns (`*`) or specify the columns you want, we needed to explicity request the additional columns from classrooms that we wanted to retrieve.

Any object within the collection returned from this new query will now have these properties with varying values:
```js
{
  // values from classroomStudents table
  classroomId: 14,
  studentId: 02,
  // ---------------

  // values from students table
  name: 'Javi',
  grade: 'Junior',
  id: 02,  //Note there still exists the discrepency between cs.id and s.id
  // ---------------

  // values from classrooms table
  className: 'Math'
  period: 02,
  roomNum: 'ILC - 103'
  // ---------------
}
```

Congratulations! You've retrieved data efficiently and in a way that will benefit all your users!

## Challenge yourself
- What are some other concrete examples of objects you may need to use an inner join to query information of?
- Write your own inner join queries now and try to utilize aliases in multiple ways!

<br>
<hr>
<br>

# Stored Procedures
What is a stored procedure? You can think of it as a function in your SQL database - it's a reusable command, or set of commands, that can take in paramaters and provide an output. Imagine you have a dog database, and you want to select dogs. You may not want to select all dogs, but you might want all dogs of breed A, breed B, and breed C; and perhaps you want dogs that are between one age and another age; let's say you might also want to add dogs that are known to have a certain temperment. That's a lot of conditions to be writing in your query, and if you find yourself making the same query over and over again, it would be beneficial to create a stored procedure to expedite the process.

### Syntax

The syntax for creating a stored procedure is as follows:

```SQL
DELIMITER // -- declares a new delimiter
CREATE PROCEDURE procedure_name -- name procedure here
(IN paramater_name DATA_TYPE) --Declare any input paramaters here if you need them
BEGIN -- the beginning of the commands you'd like to run
  --command(s) inside of here
  WHERE something = paramater_name
END // -- end of procedure
DELIMITER ; -- resets delimiter back to default
```

Let's break this down. For the moment, don't worry about the word `DELIMITER`. Let's talk about everything in between, first.

Much like when you create a table, you want to use the `CREATE` keyword when creating a procedure. On the next line you can specify what paramater, or parameters, that the procedure will take in. You do not have to use paramaters, just like when writing functions you do not have to have paramaters. But if you do want them, they would go here. 

Next you use the `BEGIN` keyword to mark where the commands actually start - the beginning of the queries you want your procedure to run. (Likewise, after your queries, you would end your procedure by using the `END` keyword.) If you did use paramaters, you would put them in here. For instance, if you wanted to be able to select dogs by breed in your dog database you might write something like:

```SQL
CREATE PROCEDURE get_by_breed -- name of our procedure
(IN _breed CHAR(255)) -- declares the name of the paramater
BEGIN
SELECT * FROM dogs 
WHERE breed = _breed; -- defines where we will use the paramater
END
```

To call this procedure you would use the `CALL` keyword, like so:

```SQL
CALL get_by_breed('husky');
```

### But what is a 'Delimiter'?

The entire time you've been using SQL you've been using the default delimiter: the semi-colon. When you attach a semi-colon to the end of a command, you're signifying that that is where the command ends. 

When you create a procedure that has multiple commands, you need to be able to pass the default delimiter through to your server without mySQL interpreting it itself. The `DELIMITER` keyword alows you to change what the `DELIMITER` is. In our first example, we changed it from the semi-colon to a double forward slash so that we could temporarily use the semi-colon without it stopping our full procedure from being created. That is why after the `END` keyword you see a double forward slash. 


```SQL
DELIMITER // -- declares a new delimiter
CREATE PROCEDURE procedure_name -- name procedure here
(IN paramater_name DATA_TYPE) --Declare any input paramaters here if you need them
BEGIN -- the beginning of the commands you'd like to run
  --command(s) inside of here
  WHERE something = paramater_name
END // -- end of procedure
DELIMITER ; -- resets delimiter back to default
```

If you have a procedure that only uses one command, you will not need to change the delimiter; however, if you need to use multiple commands you will.

# When will the (data)base drop?

Occasionally you may find yourself in a situation where you are building a database and associated routes and you may need to dump all of your data and start over. However, it can be hard to write requests to your database when you have no data to request, and it would be tedious to insert dummy data row by row in all of your tables. 

This is where stored procedures can be incredibly helpful - you can call a stored procedure to drop all of your tables, recreate them, and then insert data in your tables (either dummy data, or necessary data). The action of inserting data into your tables upon creation of them is called "seeding your database". 


### If Exists

One thing that can get you into trouble is if you try to drop a table that does not exist - in the event that this happens you will throw an error. A good way to avoid this is to use the `IF EXISTS` command. The syntax of using this command followed by recreating the table would be as follows:

```SQL
DROP TABLE IF EXISTS table_name;
CREATE TABLE table_name (
-- columns/indexes/keys in here
);
```

# Stretch Goal

How could you create a procedure with multiple paramaters to make the following code a little more dry?

```SQL
INSERT INTO dogs (id, name, breed, age, temperment)
VALUES (1, "Kermit", "Grey Hound", 3, "Friendly");

INSERT INTO dogs (id, name, breed, age, temperment)
VALUES (2, "Riley", "German Shepherd", 11, "Calm");

INSERT INTO dogs (id, name, breed, age, temperment)
VALUES (3, "Winston", "Husky", 1, "Mischevious");
```
