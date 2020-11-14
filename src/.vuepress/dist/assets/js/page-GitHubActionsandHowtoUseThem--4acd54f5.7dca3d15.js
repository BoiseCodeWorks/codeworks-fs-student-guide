(window.webpackJsonp = window.webpackJsonp || []).push([[26], { 519: function(t, e, a) { "use strict"; a.r(e); var s = a(2), n = Object(s.a)({}, (function() { var t = this, e = t.$createElement, a = t._self._c || e; return a("ContentSlotsDistributor", { attrs: { "slot-key": t.$parent.slotKey } }, [a("h1", { attrs: { id: "github-actions-and-how-to-use-them" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#github-actions-and-how-to-use-them" } }, [t._v("#")]), t._v(" GitHub Actions and How to Use Them")]), t._v(" "), a("h2", { attrs: { id: "introduction" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#introduction" } }, [t._v("#")]), t._v(" Introduction")]), t._v(" "), a("p", [t._v("In this article, I'm going to share and demo a solution that could help offload some of the toolings to GitHub. This is called GitHub Actions. The way it works is that you create actions in your repositories by creating one or more text files. These are called workflows.")]), t._v(" "), a("p", [t._v("Workflows can handle common build tasks, like continuous delivery and continuous integration. That means that you can use an action to compress images, test your code, and push the site to your hosting platform when the master branch changes.")]), t._v(" "), a("p", [t._v("You can also have tasks that run on a specific timeframe, or that control what happens when somebody interacts with the GitHub repository itself.")]), t._v(" "), a("p", [a("img", { attrs: { src: "https://miro.medium.com/max/4000/1*Kk0672ozGHVHn7bb45Vj9Q.jpeg", alt: "Image for post" } })]), t._v(" "), a("p", [t._v("So, when someone makes a comment on a pull request, it can send you a note or you can run an action when somebody stars your project.")]), t._v(" "), a("p", [t._v("Actions can run in a variety of platforms, including Linux, macOS or Windows, and these will run on virtual machines or containers. That means you can test your code in different environments. You can even run matrix workflows so you can test on multiple platforms simultaneously.")]), t._v(" "), a("h2", { attrs: { id: "understanding-workflows" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#understanding-workflows" } }, [t._v("#")]), t._v(" Understanding Workflows")]), t._v(" "), a("p", [t._v("So, the main concept at the heart of GitHub actions is the workflow; this is done by creating a series of YAML files that contain a series of actions that determine your workflow in your repositories. These YAML files are stored in a special folder in the "), a("em", [t._v(".github/workflows")]), t._v(" folder inside your repository. Here is an example:")]), t._v(" "), a("p", [a("img", { attrs: { src: "https://miro.medium.com/max/4924/1*KFn2j_ZZT-eNckTso0EiJQ.png", alt: "Image for post" } })]), t._v(" "), a("blockquote", [a("p", [t._v("At the moment, you can create up to 20 yaml files at this time, and each of the workflow files will respond to a specific event. In addition to that, each one of these workflows can have a number of jobs that perform different actions, and this is also where you specify the platform that you want to run the action under.")])]), t._v(" "), a("p", [t._v("So, to demo this; I'm going to use "), a("a", { attrs: { href: "https://github.com/YannMjl/Analog-Clock-JS", target: "_blank", rel: "noopener noreferrer" } }, [t._v("my Analog clock"), a("OutboundLink")], 1), t._v(" project which is build with simple Javascript vanilla. I made my project repository a "), a("a", { attrs: { href: "https://github.com/YannMjl/Analog-Clock-JS", target: "_blank", rel: "noopener noreferrer" } }, [t._v("template"), a("OutboundLink")], 1), t._v(". You can go ahead and create a repository from this template and have something to play around with.")]), t._v(" "), a("p", [a("img", { attrs: { src: "https://miro.medium.com/max/5052/1*K-vOjDkUrnmjkbgeRpzzpg.png", alt: "Image for post" } })]), t._v(" "), a("p", [a("a", { attrs: { href: "https://github.com/YannMjl/Analog-Clock-JS", target: "_blank", rel: "noopener noreferrer" } }, [t._v("https://github.com/YannMjl/Analog-Clock-JS"), a("OutboundLink")], 1)]), t._v(" "), a("p", [t._v("You can do this on your own projects if you want to, but it's actually better to start off by creating a template repository or a brand new repository to play around with actions.")]), t._v(" "), a("p", [t._v("So let's go ahead and add actions. The first time you create a workflow, Github provides some templates that you can use to create your first workflow based on your project repository. In this case, I'm going to add a "), a("em", [t._v("Simple Workflow")]), t._v(" action.")]), t._v(" "), a("p", [a("img", { attrs: { src: "https://miro.medium.com/max/3330/1*KvwRNsT3vxpZDLTzGCqObw.gif", alt: "Image for post" } })]), t._v(" "), a("p", [t._v("So A quick review of what I did to Set Up the simple workflow:")]), t._v(" "), a("ul", [a("li", [t._v("This workflow will respond to a specific event which is the push event. So whenever somebody pushes something to this repository, it's going to execute a series of jobs. I added dev, test and master branches because those are the branch I have set up in my repo.")]), t._v(" "), a("li", [t._v("The first job that it's going to execute is going to be called build, and we want this job to run on a Linux machine which will be a Ubuntu machine with the latest version, and then we define a series of steps:")])]), t._v(" "), a("div", { staticClass: "language-yaml extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-yaml" } }, [a("code", [a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# This is a basic workflow to help you get started with Actions")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" My First Action\n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Controls when the action will run. Triggers the workflow on push or pull request")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# events but only for the master branch")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("push")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("branches")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("[")]), t._v(" dev"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" test"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" master "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("]")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("pull_request")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("branches")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("[")]), t._v(" dev"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" test"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" master "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("]")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("jobs")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v('# This workflow contains a single job called "build"')]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("build")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# The type of runner that the job will run on")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("runs-on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" ubuntu"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("latest\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Steps represent a sequence of tasks that will be executed as part of the job")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("steps")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("uses")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" actions/checkout@v2\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Runs a single command using the runners shell")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Run a one"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("line script\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("run")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" echo Hello"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" world"), a("span", { pre: !0, attrs: { class: "token tag" } }, [t._v("!")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Runs a set of commands using the runners shell")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Run a multi"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("line script\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("run")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("|")]), a("span", { pre: !0, attrs: { class: "token scalar string" } }, [t._v("\n        echo Add other actions to build,\n        echo test, and deploy your project.")]), t._v("\n\n")])])]), a("p", [t._v("Now, depending on what you're trying to do; you can edit the YAML file and the different steps or actions. So that's how you create the most basic action using an existing template. Now, Let's dig into some of the other features of actions.")]), t._v(" "), a("h2", { attrs: { id: "triggering-actions" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#triggering-actions" } }, [t._v("#")]), t._v(" Triggering actions")]), t._v(" "), a("p", [t._v("There are different types of events that you can call for whenever you're working with an action:")]), t._v(" "), a("ul", [a("li", [t._v("Workflow")]), t._v(" "), a("li", [t._v("Scheduled")]), t._v(" "), a("li", [t._v("Webhooks")]), t._v(" "), a("li", [t._v("External")])]), t._v(" "), a("p", [t._v("These workflow events manage the triggering of the actions. Something like a "), a("em", [t._v("push")]), t._v(", a "), a("em", [t._v("pull request")]), t._v(", or a "), a("em", [t._v("fork")]), t._v(" that refers to changes in the repository.")]), t._v(" "), a("blockquote", [a("p", [t._v("Another type is something called a webhook event. That means some action that GitHub performs, like when somebody stars your repo or when a Wiki page gets created or edited.")]), t._v(" "), a("p", [t._v("you can have an event triggered by an external process outside of GitHub. That's called a repository dispatch event. And you would use that when you want something external to communicate back with your GitHub repo")])]), t._v(" "), a("p", [t._v("To learn more about the full GitHub Actions documentation on workflows, please see the "), a("a", { attrs: { href: "https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow", target: "_blank", rel: "noopener noreferrer" } }, [a("em", [t._v("configuration workflows")]), a("OutboundLink")], 1), t._v(".")]), t._v(" "), a("h2", { attrs: { id: "github-action-job" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#github-action-job" } }, [t._v("#")]), t._v(" GitHub Action Job")]), t._v(" "), a("p", [t._v("Now, even though you can run only up to 20 workflows per repository, you can run one or multiple jobs for each workflow. Since each workflow can have one or more jobs, each job is identified by an ID label, a unique name that starts with a letter or underscore and contains only alphanumeric characters plus a hyphen or an underscore.")]), t._v(" "), a("p", [t._v("By default, Jobs run in parallel unless you ask one job to wait until another job is finished. Each job can also run on different machines or on an array of machines. You can pass along a number of environment variables that will be available to every job. If you want to use environment variables in more than one job, you can place that at the same level as the job object.")]), t._v(" "), a("p", [t._v("You can also run a job only if it meets certain conditions. Each job will also have a series of steps and these are a sequence of tasks that you want the job to perform.")]), t._v(" "), a("h2", { attrs: { id: "expression-and-context" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#expression-and-context" } }, [t._v("#")]), t._v(" Expression and Context")]), t._v(" "), a("p", [t._v("The most important information about your repository is stored inside a GitHub object, but there's a few other, what are called contexts, that you can use, including information about the job that is running or the steps that are currently running as well.")]), t._v(" "), a("p", [t._v("There's also a very special and pretty useful context called "), a("em", [t._v("secrets")]), t._v(", which lets you store information in GitHub itself that won't be seen by anyone else, including other people in your repository. To learn more visit "), a("a", { attrs: { href: "https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#:~:text=Object%20filters-,About%20contexts%20and%20expressions,workflow%20files%20and%20access%20contexts.&text=When%20you%20use%20expressions%20in,if%20conditional%20as%20an%20expression.", target: "_blank", rel: "noopener noreferrer" } }, [a("em", [t._v("Context and expression syntax for GitHub Actions")]), a("OutboundLink")], 1), a("em", [t._v(".")])]), t._v(" "), a("p", [t._v("Now let's say that I have a project that I wan to deploy in my master branch which is my production branch. I'll add steps and restrictions related to whatever I'm trying to do in a job.")]), t._v(" "), a("p", [t._v("Now, let's added:")]), t._v(" "), a("ul", [a("li", [t._v('a second job called "'), a("em", [t._v('deploy"')])]), t._v(" "), a("li", [t._v('"*environment variables", *name and full name')]), t._v(" "), a("li", [t._v("if condition to run the deploy job only when the "), a("em", [t._v("build job")]), t._v(" is completed successfully")]), t._v(" "), a("li", [t._v("and only run the deploy job on pull request")]), t._v(" "), a("li", [t._v("a "), a("em", [t._v("show_context")]), t._v(" job that displays in JSON format all the GitHub context")]), t._v(" "), a("li", [t._v("the name of the person who committed the code")])]), t._v(" "), a("p", [t._v("Our YAML file now looks like this:")]), t._v(" "), a("div", { staticClass: "language-yaml extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-yaml" } }, [a("code", [a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# This is a basic workflow to help you get started with Actions")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" My First Action\n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Controls when the action will run. Triggers the workflow on push or pull request")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# events but only for the master branch")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("push")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("branches")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("[")]), t._v(" dev"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" test"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" master "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("]")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("pull_request")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("branches")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("[")]), t._v(" dev"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" test"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" master "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("]")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# A environment variable accsible to all jobs")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("env")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Yann \n"), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]), t._v("\n"), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("jobs")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v('# This workflow contains 2 jobs job called "build and deploy"')]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("build")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# The type of runner that the job will run on")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("runs-on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" ubuntu"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("latest\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# added an name env variable (Only accessible to the build job) ")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("env")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("fullname")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Yannick Mulonda\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Steps represent a sequence of tasks that will be executed as part of the job")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("steps")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("uses")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" actions/checkout@v2\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Runs a set of command using the runners shell")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Run a one"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("line script\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("run")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("|")]), a("span", { pre: !0, attrs: { class: "token scalar string" } }, [t._v("\n        echo Hello, world!\n        echo My name is $fullname but I go by $name\n        echo Actor: ${{ github.actor }}\n        echo This code was committed by: ${{ github.event.commits[0].author.name }}")]), t._v("\n        \n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("show_context")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("runs-on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" ubuntu"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("latest\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("steps")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n      "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("env")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n          "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("GITHUB_CONTEXT")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" $"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("{")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("{")]), t._v(" toJson(github) "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("}")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("}")]), t._v("\n        "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("run")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(' echo "$GITHUB_CONTEXT"\n      \n  '), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v('# This is "deploy" that\'s responsable for deploying our app')]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("deploy")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# The type of runner that the job will run on")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("runs-on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" ubuntu"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("latest\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# only run if on pull request")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("if")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" github.env_name == 'pull_request' \n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Steps represent a sequence of tasks that will be executed as part of the job")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("steps")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("uses")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" actions/checkout@v2\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Runs a set of commands using the runners shell")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Run a multi"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("line script\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("run")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("|")]), a("span", { pre: !0, attrs: { class: "token scalar string" } }, [t._v("\n        echo hello! my name is $name, nice to meet you!\n        echo Add other actions to build,\n        echo test, and deploy your project.       ")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# Deploy if the app is build successfully     ")]), t._v("\n  "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("deploy_if_build")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# The type of runner that the job will run on")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("runs-on")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" ubuntu"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("latest\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("# only run if build job complte successfully ")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("needs")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("[")]), t._v("build"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("]")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token comment" } }, [t._v("#test the app on many matrix and different version of nodeJS (e.g)")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("strategy")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("matrix")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n        "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("node-version")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("[")]), t._v("10.x"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" 12.x"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(",")]), t._v(" 14.x"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("]")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("steps")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("uses")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" actions/checkout@v2\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("name")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" Use Node.js $"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("{")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("{")]), t._v(" matrix.node"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("version "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("}")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("}")]), t._v("\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("uses")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" actions/setup"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("node@v1\n      "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("with")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v("\n        "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("node-version")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" $"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("{")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("{")]), t._v(" matrix.node"), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v("version "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("}")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("}")]), t._v("\n    "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("-")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token key atrule" } }, [t._v("run")]), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v(":")]), t._v(" "), a("span", { pre: !0, attrs: { class: "token punctuation" } }, [t._v("|")]), a("span", { pre: !0, attrs: { class: "token scalar string" } }, [t._v(' \n        echo "hello world"\n        echo test, and deploy your project.    ')]), t._v("\n")])])]), a("p", [t._v("Actions can run on any language, including Node.js, Rust, Python, PHP and lots more. Every action creates detailed logs that can be used to troubleshoot deploys in realtime while your actions are running.")]), t._v(" "), a("p", [t._v("GitHub Actions has a very strong community of developers with several templates of prebuilt actions, examples, and workflows so you don't have to start from scratch. Feel free to play with it and get familiar so you can leverage this amazing tool.")]), t._v(" "), a("br"), t._v(" "), a("br"), t._v(" "), a("hr"), t._v(" "), a("small", [t._v("Mulonda, Y. (2020, July 06). What are GitHub Actions and How to Use Them. Retrieved November 10, 2020, from https://blog.bitsrc.io/what-are-github-actions-and-how-to-use-them-e89904201a41")]), t._v(" "), a("br")]) }), [], !1, null, null, null); e.default = n.exports } }]);