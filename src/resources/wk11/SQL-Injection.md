# SQL injection? 
### *How these attacks work and how to prevent them*
<br>

### There are several types of SQL injection, but they all involve an attacker inserting arbitrary SQL into a web application database query. The good news? SQL injection is the lowest of the low-hanging fruit for both attackers and defenders.
<br>

Immortalized by "Little Bobby Drop Tables" in [XKCD 327](https://xkcd.com/327/), SQL injection (SQLi) was first discovered in 1998, yet continues to plague web applications across the internet. Even the [OWASP Top Ten](https://www.owasp.org/index.php/Top_10-2017_A1-Injection) lists injection as the number one threat to web application security.


## SQL injection definition

SQL injection is a type of attack that can give an adversary complete control over your web application database by inserting arbitrary SQL code into a database query.

The good news? SQL injection is the lowest of the low-hanging fruit for both attackers and defenders. It isn't some cutting edge NSA Shadow Brokers kit, it's so simple [a three-year old can do it](https://www.troyhunt.com/hacking-is-childs-play-sql-injection/). This is script kiddie stuff---and fixing your web application to mitigate the risk of SQL injection is so easy that failure to do so looks more and more like gross negligence.

## SQL injection attacks

There are several types of SQL injection, but they all involve an attacker inserting arbitrary SQL into a web application database query. The simplest form of SQL injection is through user input. Web applications typically accept user input through a form, and the front end passes the user input to the back-end database for processing. If the web application fails to sanitize user input, an attacker can inject SQL of their choosing into the back-end database and delete, copy, or modify the contents of the database.

An attacker can also modify cookies to poison a web application's database query. Cookies store client state information locally, and web applications commonly load cookies and process that information. A malicious user, or [malware](https://www.csoonline.com/article/3295877/malware/what-is-malware-viruses-worms-trojans-and-beyond.html), can modify cookies to inject SQL into the back-end database.

Server variables such as HTTP headers can also be used as a SQL injection attack vector. Forged headers containing arbitrary SQL can inject that code into the database if the web application fails to sanitize those inputs as well.

Second-order SQL injection attacks are the sneakiest of the bunch, because they aren't designed to run immediately, but much later. A developer who correctly sanitizes all their input against an immediate attack may still be vulnerable to a second-order SQLi when the poisoned data is used in a different context.

## SQL injection tools

SQL injection, as a technique, is older than many of the human attackers using them today; the attacks are rudimentary and have long since been automated. Tools like SQLninja, SQLmap, and Havij make it easy to test your own web applications, but also make it easy for attackers.

Ten years ago, a [SQL injection worm](https://isc.sans.edu/diary/SQL+Injection+Worm+on+the+Loose+%28UPDATED+x2%29/4393) rampaged across the internet. Cut to the present: Not much has changed. Despite a widespread awareness of SQL injection as a problem, a large percentage of web applications remains vulnerable.

Automated testing tools can keep you a step ahead of attackers looking for an easy payday. Pentesting your web applications with a tool like SQLmap is a quick way to see if your mitigations are adequate. SQLmap supports pretty much every major database in use today and can detect and exploit most known SQL injection vulnerabilities.

Sanitize your input, but test to verify your mitigations are successful. A useful reminder: [Blue team and red team](https://www.csoonline.com/article/2122440/disaster-recovery/emergency-preparedness-red-team-versus-blue-team-how-to-run-an-effective-simulation.html) are two sides to the same coin.

## SQL injection example

Let's look at a basic SQL injection attack. Suppose you've built a web application that lets customers enter their customer IDs and retrieve their customer profiles. The web application front end passes the user-entered customer ID to the back-end database. The database runs an SQL query and returns the results to the web application, which displays the results to the end user.

The back-end database query might look something like this:

           SELECT *

           FROM customers

           WHERE customer_id = '1234567'

Suppose a user entered the following customer_id in a web form field:

           1234567; DELETE * customers WHERE '1' = '1

The back-end database would then obediently execute the following SQL:

           SELECT *

           FROM customers

           WHERE customer_id = '1234567';

           DELETE *

           FROM customers

           WHERE 'x' = 'x'

Remember, databases will happily execute multiple SQL statements in a row if separated by a semicolon. Failure to sanitize the user input for the single quote "'" character makes it possible for an attacker to delete the entire table. Hope you had good backups. Right? Right...?

This was a deliberately simple example, and there are many different SQL injection attack vectors, but all work on the same principle: A web application's failure to sanitize input leads to remote SQL code execution.

## How to detect SQL injection attacks

Mitigating SQL injection attacks is not difficult, but even the smartest and best-intentioned developers still make mistakes. Detection is therefore an important component of mitigating the risk of a SQL injection attack. A web application firewall (WAF) can detect and block basic SQL injection attacks, but you shouldn't rely on it as the sole preventive measure.

[Intrusion detection systems (IDS)](https://www.csoonline.com/article/3255632/network-security/what-is-an-intrusion-detection-system-ids-a-valued-capability-with-serious-management-challenges.html), both network- and host-based, can be tuned to detect SQL injection attacks. Network-based IDSes can monitor all connections to your database server, and flag suspicious activity. A host-based IDS can monitor web server logs and alert when something strange happens.

Ultimately, though, SQL injection attacks are well-understood and easily preventable, and the priority for risk mitigation should be preventing SQL injection attacks in the first place.

## How to prevent SQL injection attacks

Listen to Little Bobby Tables and sanitize your database inputs. Any input to your web application database should be considered untrustworthy and treated accordingly. And listen to the good folks from OWASP when they tell you "It's somewhat shameful that there are so many successful SQL Injection attacks occurring, because it is EXTREMELY simple to avoid SQL injection vulnerabilities in your code." [their emphasis]

The [OWASP SQL injection cheat sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet) dives deeper than we ever could here, but preventing SQL injection attacks, the OWASP tell us, requires developers to whitelist input validation (not blacklisting), to use prepared statements with parameterized queries, and to escape all user-supplied input.

Also limit account privileges. Assume a breach. What if a developer fails to sanitize a single user input field? Hey, it happens. Developers are only human. Sanitize input but assume something is going to slip past you. Limit the account privileges of the database user. Is your web application read only, for example? Does it need to have DROP TABLES privileges? Probably not. The principle of least privilege applies here. Give the web application the minimum privileges it needs to run.

Stored procedures can also make SQLi a lot harder --- although not impossible. If your web application only needs to run a handful of SQL queries, create stored procedures to execute those queries. Typically, only the database administrator has privileges to create or modify stored procedures. Be aware, though, that many databases ship with default stored procedures out of the box, and attackers know this. Consider removing those default stored procedures unless you really need them.

SQL injection is the lowest of the low-hanging web application security fruit. This well-known attack vector is easily exploited by unsophisticated attackers, but it is easily mitigated with a small amount of due diligence. In 2018 there is no longer any excuse for a web application to be vulnerable to SQL injection. This is what minimum due diligence in web application security looks like, folks.

<br>
<br>
<hr>
<small>Porup, J. (2018, October 02). What is SQL injection? How these attacks work and how to prevent them. Retrieved November 13, 2020, from https://www.csoonline.com/article/3257429/what-is-sql-injection-how-these-attacks-work-and-how-to-prevent-them.html</small>
<br>