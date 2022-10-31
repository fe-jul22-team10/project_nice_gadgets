# Get started

1. clone repository -`git clone https://github.com/fe-jul22-team10/project_nice_gadgets.git`

2. install modules for Frontend

   - `cd fe`
   - `npm install`
   - `cd ../`

3. install modules for Backend
   - `cd api`
   - `npm install`
   - `cd ../`

## WORKING WITH PROJECT

1.  Switch to master and pull the latest master

    - `git checkout master`
    - `git pull origin master`

2.  Create new branch with name `<feature-name>` to develop your feature

    - `git checkout -b <feature-name>`

3.  Write your code

4.  Add your changes

    - `git add .` - add all
    - `git add fe/.` - add all changes in fe/
    - `git add api/.` - add all changes in api/

5.  Commit your changes

    - `git commit -m '<description>'`

6.  Push your commit to GitHub

    - `git push origin <feature-name>`

###Solving conflicts

1. get the latest master

   - `git checkout master`
   - `git pull origin master`

2. rebase your branch in the end of master branch (`lg` - to check)

   - `git checkout <feature-name>`
   - `git rebase master`

3. push your changes

   - `git push origin <feature-name>`

# npm Scripts and Commands

You should run listed commands in project root directory

## for FRONTEND

- `npm run dev:fe` - start dev server for Frontend;
- `npm run deploy:fe` - deploys the project to gh-pages

- `npm run lint:fe` - run linter test in `fe/` dir;
- `npm run fix-style:fe` - autofomat with prettier and autofix some lint issues
- `npm run build:fe` - compiles project in fe/build/

## for BACKEND

- `npm run dev:api` - start dev server for Backend;

- `npm run lint:api` - run linter test in `fe/` dir;
- `npm run fix-style:api` - autofomat with prettier and autofix some lint issues
- `npm run build:api` - compiles project in fe/build/
- `npm run start:api` - compiles project in fe/build/ and starts it on your PC
