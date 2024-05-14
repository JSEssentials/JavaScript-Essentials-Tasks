# JavaScript essentials tasks

## Introduction

This repository contains the tasks for the JavaScript essentials module. Complete the material in JavaScript Essentials
Moodle Course and Cisco Networking Academy before starting these tasks. The tasks are designed to test your knowledge
based on the material in the course.
The tasks are contained in separate folders and the code contains TODO comments where the code needs to be added.
The tasks should take 10-20 minutes to complete. 
Note that already existing code does not need to be modified unless specified in the task description.

You will also need to set up a GitHub repository where you will push your completed tasks and project. You can follow the instructions
below to get started.

The folder contains a pdf which has instructions on a project you will need to complete. You will need to create the files
for the project according to the instructions.

## Getting started

### Downloading the project
To get started, you need to download the project. You can do this from the top right corner of the page from
<> Code -> Download ZIP, or from console with git: `git clone https:repository-url.git`.

### Development environment
You will need an IDE to work on these tasks. [Visual Studio Code](https://visualstudio.microsoft.com/) or
[WebStorm](https://www.jetbrains.com/webstorm/) is recommended. Install the IDE of your choice and open the
project folder in it.
### Running the code
The task folders contain JavaScript files and index.html files. After completing
the tasks in the JavaScript files you can run the code by opening the index.html
file from your IDE or directly from the file system to your browser.
### Creating your GitHub repository
* You will need a github account: if you do not have one yet create one here [GitHub Signup](https://github.com/signup?source=login)
* You will also need git installed on your console. You can download git here [git download](https://git-scm.com/downloads). Alternatively, you can download [GitBash for Windows](https://gitforwindows.org/) or similar.
* After you have a GitHub account, create a new empty repository from your profile. You can name it anything, and it can have no files for now.
  You will need to open the files you downloaded from this repository in your command line (CMD for Windows, Terminal on MacOS). You can often open a folder in terminal directly by right clicking on it -> open in terminal
  Or by navigating from console
```bash
cd /path_to_your_folder/JavaScript-Essentials-Tasks-main
```

You can navigate inside the folder similarly with `cd` (navigate to task_1 folder)
```bash
cd task_1
```

navigate back a level
```bash
cd ..
```

You will need to connect the repository you have created to your local files. You can do it in following ways or by looking at this [guide](https://github.com/git-guides/git-init).

Make sure you are at the root of the folder in `/JavaScript-Essentials-Tasks-main`
Initialize the git repository with
```bash
git init
```
Add all of the local files to be tracked
```bash
git add .
```
Add your first commit. These are "Save points" with messages on progression of the files.
```bash
git commit -m "Initial commit"
```
Add GitHub repository as origin to your local files.
```bash
git remote add origin https://github.com/username/repository-name.git
```
Push your changes to be updated on the repository
```bash
git push -u origin main
```
If you run into authorizing issue, make sure you are authenthicated. You can set up authenthication with this
[tutorial](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)
You can now add commits and push changes to your repository with using
```bash
git add .
```
```bash
git commit -m "your message"
```
```bash
git push
```
### Troubleshooting
If you have completed all of the tasks and the code is not working as expected in your browser you can
use the browser developer tools to debug the code. In Chrome you can open the developer tools by right clicking
on the page, selecting Inspect -> Console tab and look for possible error messages. If you get absolutely stuck,
you can look for solutions in the answers folder. Try your best at solving the tasks before looking at the answers.

## Tasks

All of the tasks folders contain TODO comments which help you to complete them. Follow the instructions in the comments and complete the tasks. Commit and push changes made to each tasks when a TODO is complete.

## Project

The folder contains a `pdf` file which contains instructions on creating a food ordering application project. Commit and push all your tasks to the repository you have made.
