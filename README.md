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