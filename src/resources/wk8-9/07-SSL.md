# A Beginner's Guide to SSL: What It is & Why It Makes Your Website More Secure

![](https://blog.hubspot.com/hubfs/ssl-certificate-1.jpg)

Have you ever noticed that some URLs start with `http://`, while others start with `https://`?

Maybe you noticed that extra "s" when you were browsing websites that require giving over sensitive information, like when you were paying bills online.

But where'd that extra "s" come from, and what does it mean?

![what is ssl hubspot url](https://blog.hubspot.com/hs-fs/hubfs/Screen%20Shot%202020-08-18%20at%206.14.32%20PM.png?width=400&name=Screen%20Shot%202020-08-18%20at%206.14.32%20PM.png)

To put it simply, the extra "s" means your connection to that website is secure and encrypted; any data you enter is safely shared with that website. The technology that powers that little "s" is called SSL, which stands for "Secure Sockets Layer."

As a consumer, you always want to see `https://` when visiting any site you trust with your essential information. As a marketer, you'll want to make sure you have an SSL or two for your audience.

Let's talk about why SSL is a big deal.

## What is an SSL certificate?

SSL certificates are a small data files that cryptographically establish an encrypted link between a web server and a browser. This link ensures that all data passed between the web server and browser remain private.

When you land on a page with a form to fill in and submit, the information you enter can be intercepted by a hacker on an unsecure website.

This information could be anything from details on a bank transaction to an email enter to register for an offer. In hacker lingo, this "interception" is often referred to as a "man-in-the-middle attack."

Wondering how attacks happen? Here's one of the most common ways: A hacker places a small, undetected listening program on the server hosting a website. That program waits in the background until a visitor starts typing information on the website, and it will activate to start capturing the information and then send it back to the hacker.

A little scary, right?

But when you visit a website that's encrypted with SSL, your browser will form a connection with the web server, look at the SSL certificate, then bind your browser and the server. This binding connection is secure to ensure no one besides you and the website can see or access what you type.

This connection happens instantly, and in fact, some suggest it's faster than connecting to an unsecure website. You simply have to visit a website with SSL, and *voila* --- your connection will automatically be secured.

An SSL is security technology. It's a protocol for servers and web browsers that makes sure that data passed between the two are private. This is done using an encrypted link that connects the server and browser.

Companies that request personal information from a user, such as an email address or payment information, should have SSL certificates on their website. Having one means that the details you are collecting are private and ensures the customer that when they see that padlock and `https://`, their privacy is safe.

SSL certificates are categorized by the level of validation and encryption provided OR the number of domains or subdomains under the certificate.

There are three types of certificates you can earn depending on the SSL you obtain. Let's talk about them in more detail.

## Types Of Certificates

The umbrellas that SSL certificates fall under are encryption and validation, and domain number. They each have three classifications, and can be applied for on the [SSL website](https://www.ssl.com/article/dv-ov-and-ev-certificates/). Certificates are processed by a Certificate Authority (CA), which is software designed specifically for running and granting these certificates.

For encryption and validation certificates, there are domain, organization, and extended validation. For certificates defined by the domain number, the types are single, multidomain, and wildcard.

### Extended Validation (EV) SSL Certificate

This certificate shows the padlock, HTTPS, business name, and business country in the address bar to diminish being mistaken for a spam website.

Extended Validation (SV) SSL are the most expensive SSLs to obtain, but they are valuable in showing the legitimacy of your domain from the address bar. To set up an EV SSL, you must prove that you are authorized to own the domain you're submitting. This ensures users that you are legally collecting the data needed to execute certain actions --- such as a credit card number for an online transaction.

An EV SSL certificate can be obtained by any business, and it should be a priority especially for those that need identity assurance. For instance, if your website processes web payments or collects data, you'd want to get this certificate.

### Organization Validated (OV SSL) Certificate

This certificate verifies that your organization and domain validation are real. Organization Validated (OV) SSL certificates offer a medium level of encryption and are obtained in two steps. First, the CA would verify who owns the domain and if the organization is operating legally.

On the browser, users would see a small green padlock with the company's name following. Use this type of certificate if you don't have the financial resources for an EV SSL but still want to offer a moderate level of encryption.

### Domain Validation (DV) Certificate

The Domain Validation (DV) certificate offers a low level of encryption shown as a green padlock next to the URL in the address bar. This is the quickest validation you can receive, and you'll only need a few company documents to apply.

This verification happens when you add a DNS to the CA. For this certificate, the CA will review the right of the applicant to own the domain being submitted. (Note: DVs don't secure subdomains, just the domain itself).

Unlike the EV SSL, the CA won't vet any identity data, so you won't know who is receiving your encrypted information. But if you're part of a business that can't afford a higher-level SSL, a DV gets the job done.

### Wildcard SSL Certificates

Wildcard SSL Certificates are in the "domain and subdomain number" category. Wildcard SSLs ensure that if you buy a certificate for one domain, you can use that same certificate for subdomains.

For example, if you bought a Wildcard for `example.com`, it could be applied to `mail.example.com` and `blog.example.com`. An option like this is cheaper than obtaining multiple SSL certificates for a number or domain.

### Unified Communications (UCC) SSL Certificate

Also known as Multi-domain SSL certificates, Unified Communications certificates (UCCs) allow multiple domain names to be on the same certificate. UCCs were created to bridge communication between a single server and browser but have since expanded to include multiple domain names by the same owner.

A UCC in the address bar shows a padlock to display verification. They can also be considered an EV SSL if they are configured to show that green text, padlock, and home country. The only difference is the number of domain names associated with this certificate.

Multi-domain SSL certificates cover up to 100 domain names. If you need to alter the names in any way, you can do that with the Subject Alternative Name (SAN) option. Some examples of Multi-domain names you can use are: `www.domain.co.uk`, `www.domain.com`, `mail.example.com`, and `checkout.example.com`.

### Single Domain SSL Certificate

A Single Domain SSL protects one domain. The thing to remember about this certificate is that you can't use it to protect subdomains or a completely different domain.

For example, if you purchase this certificate for `example.com`, you can't use it for `blog.example.com` or `2ndexample.com`.

## How can I get an SSL certificate for my website?

The first step is to determine what type of certificate you need. For example, if hosting content on multiple platforms (on separate domains/subdomains) it may mean that you need different SSL certificates.

For most, a standard SSL certificate will cover your content. But for companies in a regulated industry --- such as finance or insurance --- it may be worth talking with your I.T. team to ensure you're meeting the specific SSL certificate requirements set within your industry.

The costs of SSL certificates vary, but you can get a free certificate or pay per month to obtain a custom certificate. On the free side --- [Let's Encrypt](https://letsencrypt.org/) offers certificates at no cost, but I would strongly recommend that you have someone knowledgeable about the DNS and technical setup of your website to help. These certificates will also expire every 90 days, so make sure they stay up to date.

One of the other key considerations is the validity period of a certification. Most standard SSL certificates that you purchase are available for one to two years by default, but if you're looking for longer-term options, consider more advanced certificates that offer longer time periods.

### Is SSL good for SEO?

Yes. While the primary purpose of SSL is securing information between the visitor and your website, there are benefits for SEO as well. [According to Google Webmaster Trends Analysts](http://googlewebmastercentral.blogspot.com/2014/08/https-as-ranking-signal.html), SSL is part of Google's search ranking algorithm.

In addition, let's say two websites are similar in the content provided but one has SSL enabled and the other doesn't. That first website may receive a slight rank boost because it's encrypted. As a result, there is a clear SEO benefit to enabling SSL on your website and across your pages.

## How can I tell if my website has SSL?

When you visit a website with SSL, there are a few distinct differences that display within the browser. [Click here for a free SSL checker tool](https://www.hubspot.com/ssl-checker?_ga=2.109764352.44719988.1592338092-940436819.1565181751).

### 1\. The URL says "https://" and not "http://".

The URL should look something like the screenshot below. Remember, an SSL-encrypted website will always have that "s" that stands for "secure." Additionally, that text can show up green and follows a green padlock (another indicator, explained below).

![Double checking your address is secure](https://blog.hubspot.com/hs-fs/hubfs/Double%20checking%20your%20address%20is%20secure.png?width=400&name=Double%20checking%20your%20address%20is%20secure.png)

### 2\. You'll see a padlock icon in the URL bar.

The padlock will show up on the left- or right-hand side of the URL bar, depending on your browser. For example, on Chrome and Safari, it'll be on the left. You can click on the padlock to read more information about the website and the company that provided the certificate.

![HubSpot SSL certificate padlock.](https://blog.hubspot.com/hs-fs/hubfs/HS%20SSL%20certificate%20padlcok.png?width=400&name=HS%20SSL%20certificate%20padlcok.png)

### 3\. The certificate is valid.

Even if a website has the `https://` and a padlock, the certificate could still be expired --- meaning your connection wouldn't be secure. In most cases, a site that displays as https will be secure but, if you encounter a site that asks for a lot of personal information, it may be worth double-checking to be sure the certificate is valid.

![HubSpot's validity certificate.](https://blog.hubspot.com/hs-fs/hubfs/HS%20valid%20certificate.png?width=400&name=HS%20valid%20certificate.png) 

To find out whether the certificate is valid in Chrome, go to *View* > *Developer* > *Developer Tools*. From there you will need to navigate to the *Security* tab to see if the SSL certificate is valid or expired. If you click the *View certificate* button, you will be able to see more information about the SSL certificate and the specific date it's valid through.

The next time you visit a website, check its encryption status. I love knowing that by clicking a little padlock, I can see if my data is secure. On the flip side, if you are a part of a business that doesn't have SSL certificates, make them a part of your next goal set, so you can protect your customers' data and privacy.

<br>
<br>
<hr>
<small>Vocell, J. (2020). A Beginner's Guide to SSL: What It is &amp; Why It Makes Your Website More Secure. Retrieved November 16, 2020, from https://blog.hubspot.com/marketing/what-is-ssl</small>
<br>