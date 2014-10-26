'use strict';

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    firstname:   { type: DataTypes.STRING,  allowNull: false },
    lastname:    { type: DataTypes.STRING,  allowNull: false },
    gender:      { type: DataTypes.BOOLEAN, allowNull: false },
    birthDate:   { type: DataTypes.DATE,    allowNull: true  },
    deathDate:   { type: DataTypes.DATE,    allowNull: true  },
    nationality: { type: DataTypes.STRING,  allowNull: true  },
    description: { type: DataTypes.TEXT,    allowNull: true  }
  }, {
    tableName: 'author',
    timestamps: false
  });

  return Author;
};
