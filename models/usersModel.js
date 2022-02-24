// this file stores the "users" model (model is table schema in sequelize lingo)

// inputs: sequelize instance and DT Class, returns: a cd Model object
module.exports = (sequelize, DataTypes) => {
    // Define a new model, representing a table in the database.
    // modelName is 'user' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "users"
    const user = sequelize.define("user", {
      id: {
        // the id will be our primary key for accessing user data
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return user;
  };
  