# oma-knowledge-based

## Development

The development process for this process is described in more detail in
[Development](/DEVELOPMENT.md) document.

### Get Started
1. Install `nvm` package. This allows you to install different versions of the Node.js
2. Check which Node version you are running:
    `nvm ls`
3. Use at least version v20
    `nvm use v20`
4. Install npm
    `npm install`
5. Run it locally
    `npm run dev`

## Deployment in PRe Production Server

Setup
^^^^^
(you only need to do this once)

On your local computer, open terminal and go to the folder where you want to manage the folder for this new mirrored repository. Then run the following commands:

`git clone --mirror https://github.com/OpenMobileAlliance/oma-knowledge-base.git oma-knowledge-base-PPRD-mirror`

`cd oma-knowledge-base-PPRD-mirror`

`git remote set-url --push origin https://github.com/OpenMobileAlliance/oma-knowledge-base-PPRD-mirror.git`


Make Your Changes
^^^^^^^^^^^^^^^^^

In the original oma-knowledge-base folder where you have been working normally, make any changes that you want to make

You can either Merge or recreate the PPRD-deployment Branch:

Merge:
Merge the changes into the PPRD-deployment branch (or do a pull request)
Push to GitHub as normal.

Recreate the branch:
git push origin --delete PPRD-deployment
git branch -D PPRD-deployment
git checkout -b PPRD-deployment
git push --set-upstream origin PPRD-deployment


Publication
^^^^^^^^^^^

Then when you want to publish to pprdwww.openmobilealliance.org, in terminal, go to the oma-knowledge-base-PPRD-mirror folder and run the following commands:
git fetch -p origin
git push --mirror
(Note: the git push --mirror command will give lots of errors. That's because it doesn't support pull request references. It's not a problem so you can ignore those errors)


The explanation
^^^^^^^^^^^^^^^
What the setup is doing is cloning the source repository to a local folder called oma-knowledge-base-PPRD-mirror. The --mirror option is important as it's making sure absolutely everything is going to be included. Then we are changing the push location using the "remote set-url" command of this newly cloned repository to the location of the PPRD mirror in GitHub. What this means is that when you do a fetch, it pulls it from the original repository (oma-knowledge-base). And when you do a push, it's doing it to the PPRD mirror (oma-knowledge-base-PPRD-mirror) repository. So in effect, to publish to pprdwww.openmobilealliance.org, you just run those 2 commands.

### Information
- **Repository:** https://github.com/OpenMobileAlliance/oma-knowledge-base-PPRD-mirror
- **Server:** https://pprdwww.openmobilealliance.org/
- **Diagram:**![Image](https://github.com/user-attachments/assets/c359829a-75a4-49de-b54b-efcb7fbdaa98)

### Deployment Steps
1. From `oma-knowledge-base-PPRD-mirror` Repository run the following commands:
2. Run:
```
git fetch -p origin
```
3. Run:
```
git push --mirror
```
