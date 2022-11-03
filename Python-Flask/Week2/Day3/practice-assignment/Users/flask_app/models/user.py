from flask_app.config.mysqlconnection import connectToMySQL




class Users:
    db_name = "users"
    def __init__(self,data):
        
        self.id=data["id_"]
        self.first_name=data["first_name"]
        self.last_name=data["last_name"]
        self.email=data["email"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
# getALLROBOTS
    @classmethod
    def get_all(cls):
        query ="SELECT * FROM Users;" #name of the table Users

        results = connectToMySQL(cls.db_name).query_db(query) #name of data-base "users"

        users=[]

        for user in results:
            users.append(user)
        return users
#get One Robot
    @classmethod
    def oneUser(cls,data):
        query  = "SELECT * FROM Users WHERE id = %(id)s";
        result = connectToMySQL(cls.db_name).query_db(query,data)
        return cls(result[0])

#AddRobot Route to the template

    @classmethod
    def AddUser(cls,data):
        query = "INSERT INTO Users (first_name,last_name,email, created_at, updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(created_at)s,%(updated_at)s);"

        # comes back as the new row id
        result = connectToMySQL(cls.db_name).query_db(query,data)
        
        return result
    
    
#Update One Robot
    @classmethod
    def UpdateUser(cls,data):
        query = "UPDATE Users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s,updated_at=%(updated_at)s,created_at=%(created_at)s  WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)
#delete Robot
    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM Users WHERE id= %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)