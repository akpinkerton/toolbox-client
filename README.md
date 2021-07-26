# Toolbox Fullstack App (FRONT END)

SPA that allows a user to store and keep up with tools, tips, tricks, and resources in their coding journey.

[Server repo][server] is needed to run locally.

- [Link to front-end][fend]
- [Link to server][bend]

## Table of Contents
- Objective
- Commands
- Functionality
- Tasks
- Issues
- Advanced Goals
- Future adds

### Objective

- Build a PERN app (an application leveraging PosgreSQL, Express, React, and Node) for CRUD submission to apply for USSF z-prefix.

---

### Commands
- [Client / Frontend][fend]
  - `npm run devstart` to run locally on 3000
- [Server / Backend][server]
  - `npm start` to start server locally on 3001
  - `npm run migrate` will rollback tables, migrate the latest tables, and send the seed data

### Functionality
- Add different types of resources to be stored on the site

---

### Tasks
- [X] React front end
- [X] Express server
- [X] PostgreSQL database
- [X] Basic CSS implementation
- [X] Deploy this application via AWS or Heroku

### Issues
- [ ] Icons do not display for all tags, only the first tag
- [ ] URL has to be exact to work on maps
---

### Advanced Goals
- [ ] Add log in option to store ind user data

### In future updates

##### Home Pag
- [ ] make description input box able to be styled to allow for code inputs
- [ ] support file uploads of templates
  - file upload is simple, the hold up was storing in the DB and retrieving.

##### Admin Page
- Recycle/Trash bin
  - [ ] holds all deleted items
  - [ ] POST to an archive sheet
  - [ ] option to delete perm form archive or send back to its db
- [ ] Add/Edit/Delete a tags
  - [ ] input icon html src from icons8
  - [ ] map these onto input form  (buttons or checklist)

##### Research List
 - [ ] Add a 'file away' option that you can add the research item to resources

##### Styling
 - [ ] Toggle Theme

##### Create Pages
- [ ] Cheatsheets
  - [ ] display in a list using accordion to organize by topic
- [ ] Brain Gym
  - [ ] tools that increase skills like games and challenge websites
- [ ] Repos
  - [ ] to store all personal and outside repos with tags to be included in searches


---

[server]: [bend]:https://github.com/akpinkerton/coding-toolbox-server
[fend]:https://coding-toolbox.herokuapp.com/
[bend]:https://coding-toolbox-server.herokuapp.com/
