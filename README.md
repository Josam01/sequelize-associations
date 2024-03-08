# SEQUELIZING  ASSOCIATIONS
---------------------------------

# CHANGES MADE

1. **INDEX.MJS**
* Added comments

2. **MODELS.MJS**
*  Added comments
*  Specified the foreign key for the **CLUB MODEL**
*  SpecifIED the foreign key and alias for the **PLAYER MODEL**
* This code written below was with the help of ChatGPT on bidirectional association...
*Club.hasMany(Player, { foreignKey: 'clubId' });*
*Player.belongsTo(Club, { foreignKey: 'clubId', as: "club" });*

3. **SEQUELIZE INIT**
* Ran *npx sequelize-climigration:generate--name=create_club_and_player_tables*
to generate the table and 
> Folders like
* config, migrations, models, seeders popped up in my main folder

The main folder touched was the *migrations folder*
Within the folder a file called '20240305083756-create_club_and_player_tables.js' is generated.
I deleted the code pre-generated for me and copied from **sequelize website on migrations** and edited it with the help of a little googling here and there and stackoverflow.

Therefore giving the table a skeleton of what i need.

* Finally applying the migrations to create the table in my database
using *npx sequelize-cli db:migrate*

ENCOUNTERD A BIT OF A PROBLEM AT THIS STAGE. beacause it gives me an error which was...

*Sequelize CLI [Node: 18.17.0, CLI: 6.6.2, ORM: 6.35.2]*
*Loaded configuration file "config\config.json".*
*Using environment "development".*
*ERROR: connect ECONNREFUSED 127.0.0.1:3306*

that was due to me trying to set up MySQL server and i wasn't trying to use that service due to the fact i wanted to use postman only.
so i installed **SQLite**...
*npm install sqlite3*
and updated my configurations from the preset code to this⬇️⬇️

**{
  "development": {
    "dialect": "sqlite",
    "storage": "./database.sqlite"
},
}**

so this configuration will let the database file to be stored in a file called *database.sqlite*


4. **CLUBCONTROLLERS**
* In the clubscontrollers.mjs file i removed the... 
*import{sequilize} from ""../database.mjs""* because it wasn't actually doing anything.

* Added error messages to the file for us to keep track of where the problem is coming from

* In the *createOneClub()* function i added the parameters by which a club can be created.
e.g name, coach


5. **PLAYERCONTROLLERS**
* Same stuff like the clubs own
* Adding error messages them also.
* Added parameters for the creation of players e.g name, clubId.
* The clubId is generated numerically oo


# Thats all.
* Please bring my attention to any thing you find difficult. SHALOM!!!

You can Test it with Postman.
