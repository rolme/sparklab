# Spark Lab
> The difference is measurable
---

Spark Lab is a basic web application with a Rails API only backend and React/Redux front end.
- Ruby 2.5
- Node 10.2.1
- Rails 5.2
- PostgreSQL 10.1

---
## Requirements
This section assumes you have MacOS. If not, replicate steps appropriate for your OS.

### Install required packages
```
$ brew install rbenv ruby-build node postgresql watchman
```

### Update your ruby version
```
$ rbenv build 2.5.1
```
### Start required services
```
$ brew services start postgresql
```

## Setup
__Initialize Project__

Clone the project if you have not yet
```
$ cd ~/code
~/code $ git clone git@github.com:rolme/sparklab.git
~/code $ cd sparklab
```

After cloning the project and cd'ing into the directory.
```
~/code/sparklab $ bundle
~/code/sparklab $ rails db:reload
~/code/sparklab/client $ yarn install
~/code/sparklab/client $ cd ..
```

__Start Project__

```
~/project/sparklab $ rake start
```
The application should automatically start or you can visit it here:
Visit: [https://localhost:3000](https://localhost:3000)

## Running the tests
To run the tests you need to enter to the ___client___ folder:
```
$ cd client
```
And run the following command:
```
$ npm run test
```
