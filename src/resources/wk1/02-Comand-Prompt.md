# Command Prompt

## Intro Video
<iframe width="854" height="480" src="https://www.youtube.com/embed/d5apkVTTkrA" frameborder="0" allowfullscreen></iframe>


## The PATH to enlightenment

Okay... maybe not enlightenment but having a good understanding of what is refered to as a path in computing might help save you some time in getting started with a `Command Line Interface (CLI) which is sometimes referred to as just the “Command Line.”`

A path specifies a unique location in a file system. The path points to a file system location by following a directory tree hierarchy expressed in a string of characters in which `path components` are separated by a delimiting character such as the `(/ forward slash` or `\ back slash)` 

Paths are used extensively in computer science to represent the directory/file relationships common in modern operating systems, and are essential in the construction of Uniform Resource Locators `URLs`. Resources can be represented by either absolute or relative paths.

## `pwd`

In a unix based environment the `pwd` command stands for `print working directory`. One of the main purposes of this command is to help figure out the fully qualified path of your current location in a directory tree. 

For Example Take a look at this image. You should see a series of directories (aka. folders) that are nested inside each other. 

<img src="https://bcw.blob.core.windows.net/public/img/pwd.jpg" class="img-responsive text-center" />

From this image it would appear to the standard user that when they are looking at the images of their resume they are looking inside the following directory tree

`| Jake > source > resume > assets > img`

Now moving to the `Command Line` we can verify the path above 

<img src="https://bcw.blob.core.windows.net/public/img/pwd1.2.jpg" class="img-responsive text-center" />

Looking at the image above it would appear that we have the correct path... but, before we go jumping straight to that conclusion look a bit closer at that crazy looking symbol `~`.

Although this symbol has a very specific meaning we wont get into that right now. 

Look what happens when we take the time to actually type in the `pwd` command from this location in our `CLI`

<img src="https://bcw.blob.core.windows.net/public/img/pwd2.jpg" class="img-responsive text-center" />

Notice the fully qualified path is actually different from what we have seen anywhere else.

`| Users > Jake > source > resume > assets > img`

We can thank the `pwd` command for helping to identify this distinction


## Wait the environment matters

Its unfortunante that Linus Torvalds and Bill Gates were not better friends when they first started writting their operating systems.

Mac and Linux operating systems are unix based so they share many of the same commands... However, Windows is not unix based and therefore does not use the same words/commands. 

There are many ways of bringing the basic unix commands over to windows so you don't have to memorize both. Eitherway, I'll try to provide both commands since they function almost identically.

> `ls` - Unix `dir` - Windows

`ls` apparently stands for someting like `list files`... I know right. Well actually `ls` could be considered `list structure`, specifying you would like to see the structure of the `current working directory (cwd)` including the files and sub directories. 

Now comes the fun part. The majority of these commands come with the ability to supply `arguments` or `options` after the command. 

for example

```
$ ls -a
```

The `-a` argument specifies that you would like to see all of the contents in the `cwd` including those starting with a `. (dot)`

If you are super curious and want to learn more about the arguments that can be added to `ls` read <a href="http://linuxcommand.org/man_pages/ls1.html" target="_blank">this</a> most developers will have memorized at lest one or two of these arguments so don't go too crazy over it. 


## Going from place to place

This next command, `cd` is kind of like the "where do I want to go" or "where do I want to be" portion of the command line. It stands for `Change Directory` and it is how you go from place to place in the world of the `console (CLI)`. 

Its use is pretty straightforward: you type 

```
> cd foldername
```
where “foldername” is the name of the folder or directory you want to navigate to. To go up a folder from where you currently are to the immediate parent directory, or one step closer to the root directory, its even easier: just type `cd..` or unix `cd ..` *(Yes the space here matters)*. You don’t even have to know the name of the parent directory!

As you get more familiar with the `cd` command you may want to try a few of the more common shortcuts. The first shortcut is for when you know just where you want to go. In those cases you can type something like: 

```
> cd foldername/my-project 
```
to navigate up two (or more, if you know the whole path) directories at a time. You can also go from wherever you are all the way to the root directory by simply typing windows `cd/` or Unix `cd ~`, how easy is that!

## Blazing a new trail
So, what about when you want to go someplace new? 

There’s a command for that! The `mkdir` (Unix) or `md` (Windows) command is your trailblazer. 

To use it, you have to supply a name for the new folder or directory to be created. Your command like will look something like this: 

```
> mkdir new-project
```
where "new-project" will be the name of the new folder you wish to create. That’s all there is to it!

***Note: When creating directories/folders or files the best naming conventions state you should use a hyphen (`-`) instead of spaces... This is refered to as `kabob case`***

## Making files

Next, I’ll talk a bit about creating files directly from the command line. In Unix, the command `touch fileName.fileType` will create a new empty file with the name you specify. 

In Windows it’s a bit trickier. You can create an empty file with the command `copy nul fileName.fileType` or you can create a file with text in it by typing `copy con fileName.fileType …` this last command is tricky in that when you hit “enter” you’re not done! You may now type any text you wish, on as many lines as you choose; when you are finished creating your file you type `^Z (ctrl + z)` and when you hit “enter” the whole thing will be saved into a file with the name you specified. Personally, I would not use this method for writing code, If you really want to be a `command line junkie` invest some time into `vi, vim, or EMACS....`. I would recommend looking into those at a later point.

## Taking out the trash

Like all good housekeepers, we occasionally have to throw away things we no longer need. This can include both files and folders. Since the console commands to remove folders can only work on empty folders, we will start with the commands to delete files.

The commands to delete files are `rm` (Unix) and `del` (Windows). They can be used for specific files, like `rm my.file` or for a range of files using a wildcard character (like ? which stands for a single character, or `*` which can stand-in for an entire prefix or suffix) using a statement like: `del stuff.*` which would delete all files named stuff regardless of the suffix.

Once all the files have been removed from a directory, then we can delete it too. Move to the parent directory (using `cd ..`) and type in the command `rmdir` (Unix command for remove directory) or `rd` (the Windows version) with the name of the directory, as in: `rmdir my-folder` to get rid of the folder named “my-folder.”

*Please note that files and folders deleted in this way cannot be retrieved from the “recycling bin,” so don’t clean house using the command line unless you’re sure that you won’t be wanting those files in the future!*

<br>
<br>

## Daily Journal
### Answer the following questions 
 1. What is a `Path` and how are they used?

 2. What CLI command would you use to see all files in your `Current Working Directory` (CWD), including those that start with a '.'

 3. How can a user retrieve files deleted by the `rm` command?