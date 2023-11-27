## Software Requirements
- Node.js 
- MongoDB 3.4+ (setup MongoDB Replication is required), we using 2 DB for this project, one is build-in Mongo of Meteor, another one is an external Mongo which being setup with ReplicaSet. 
- Meteor

### Install npm dependencies 

```bash
cd btaskee-backend-cs
meteor npm install
```

### Setting up "settings.json" file
1.  You will find a file named `settings.development.json` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `settings.json`
3.  The file `settings.json` is already ignored by git
4.  Change the values of the file to your settings.

### How to run for Development
1. On Root directory of project
    ```bash
    npm run dev
    ```
### How to run for Testing
1.  You will find a file named `settings.testing.json` on root directory of project.
2.  Change the values of the file to your settings.
3.  Make sure the external Mongo still running.
4.  On root directory of project
   *For running unit test*
      ```bash 
        npm run test:unit 
    ```
    *For running e2e test*
      ```bash 
        npm run e2e 
    ```
    *For running coverage test*
      ```bash 
        npm run coverage:local 
    ```

## About "settings.testing-ci.json"
- We use this file for run CI on GitLab, make sure the `setting.testing-ci.json` always updated with the `setting.test.json` file

