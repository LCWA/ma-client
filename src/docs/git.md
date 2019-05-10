# 1. Merging branches with the master branch

Make sure you are in the master branch.

To check what branch you are on, type this command:

        git branch
        
The one that's green is the one you're on at the moment.
To switch to master branch, type:

        git checkout master

It is advisable to pull the remote repository before merging, just to be sure to have latest changes locally:

        git pull --rebase

**The important thing about pulling remote repository is to be inside the root directory of application and on master branch.**

Listed are the commands needed to run for merging one branch with the master branch:

        git merge --no-ff name-of-new-branch

--no-ff means no fast forwarding. To read more about it, check [this](https://git-scm.com/docs/git-merge) page.
When some kind of text editor (vim or nano) comes up, hit key ESC and then type

        :wq
        
Final step is to push changes remotely:

        git push
        
# 2. What to do if you were in the wrong branch/folder when pulling from remote repository?

One can make mistake to run _git pull --rebase_ inside a branch that has not yet been merged with master branch. That means the mistake will cause the deletion of local changes that have been made on the branch that has not yet been merged. Since the files were not yet merged, that menas they don't exist in remote repository from which you are pulling, hence the deletion. In that case, follow these steps:

1. Again, make sure you're inside master branch and inside root folder

        git checkout master
        
2. Drop changes you created locally by typing

        git status
        
3. Follow the instructions in terminal for reverting your working directory into a state it was before the changes. To revert everything, type:
    
        git checkout --

4. Now you have locally the same files that exist remotely. To be sure of that, type again:

        git pull --rebase
        
5. Check existing branches and switch to your branch (the one that still exists remotely):

        git branch
        git checkout your-branch

6. Pull changes that you previously commited on remote branch:

        git pull remotename branchname
        
After executing command number 6, you'd again have your changes locally and you can push them to master.

The consequence of pulling from remote repository while in the wrong branch or folder is that some libraries that you used to create application are also deleted. For example, for building React application, it's necesarry to have react, react-dom and react-scripts libraries installed. But if those were deleted, you'd have to install them again. Those libraries are listed as dependencies in _.package.json_ file of your application and way to install them again is to, inside terminal, enter in the folder of your application and run

        npm install
        
npm install reads the dependencies from package.json that were used while creating the application and automatically installs them for you. 
[INITIALIZE NPM ON AN EXISTING PROJECT](http://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Node_Package_Manager/Initialize_NPM_on_an_existing_project.html)

## 3. Useful tips when using git

Let's say you're on this path

    /mnt/c/code/lcwa-website/client$
    
and that you want to go one folder back. To go one folder back, type:

    cd ..
    
and you'll get:

    /mnt/c/code/lcwa-website$
    
To save time when typing

    cd /mnt/c/code/lcwa-website/client
    
use TAB key for automatic completion. For instance, you start typing

    cd /mnt/c/

and then press TAB key once or twice, the process will recognize the path and finish it writing itself.

Great shell that offers autocompletion based on history is called **fish** and you can download it here:

https://fishshell.com/