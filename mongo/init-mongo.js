// init-mongo.js

db.createUser(
	{
		user: "agustin",
		pwd: 	"1234",
		roles: [
			{
				role: "readWrite",
				db: 	"pagos" 
			}
		]   
	}
)