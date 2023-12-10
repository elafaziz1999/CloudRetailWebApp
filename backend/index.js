import express from "express";
import mysql from 'mysql2'
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "root",
    database: "cloudretail"
})

// In case of authentication error use the following
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

app.use(express.json()) // allows us to any json file using a client
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: false,
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session({
    secret: 'secret', // this is the secret key that is used to sign in and encrypt the session cookie
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // this is set to false because we are not using https
        maxAge: 1000 * 60 * 60 * 24 // cookie expires in 1 day (this variable represents cookie age)
    }
}))

/*app.get('/account', (req,res) => {
    const query = "SELECT * FROM account"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/account', (res,req) => {
    const query = "UPDATE account SET f_name = ?, l_name = ? email_address = ? where accountid = accountid"
    const values = [
        req.body.f_name,
        req.body.l_name,
        req.body.email_address,
    ];

    db.query(query, [values], (err,data) => {
        if(err) return res.json({Message: "Error in Node!"})
        return res.json(data)
    })
})*/

/*app.get('/', (req,res) => {
    if(req.session.email_address) {
        return res.json({valid: true, email_address: req.session.email_address})
    } else {
        return res.json({valid: false})
    }
})

app.post("/login", (req,res) => {
    const query = "SELECT * FROM account where email_address = ? and  user_pass = ?"
    db.query(query, [req.body.email_address, req.body.user_pass], (err,data) => {
        if(err) return res.json({Message: "Error inside the server"});
        if(data.length > 0){
            req.session.email_address = data[0].email_address;
            return res.json({Login: true})
        } else {
            return res.json({Login: false})
        }
    })
})

app.post("/register", (req,res) => {
    const query = "INSERT INTO account (`f_name`,`l_name`,`email_address`,`user_pass`,`dob`) VALUES (?)"
    const values = [
        req.body.f_name,
        req.body.l_name,
        req.body.email_address,
        req.body.user_pass,
        req.body.dob,
    ];

    db.query(query, [values], (err,data) => {
        if(err) return res.json({Message: "Error in Node!"})
        return res.json(data)
    })
})*/

app.get('/product/:productId', (req, res) => {
    const productId = req.params.productId;
  
    const query = 'SELECT * FROM product WHERE product_id = ?';
  
    db.query(query, [productId], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (results.length > 0) {
          // Product found
          const product = results[0];
          res.json(product);
        } else {
          // Product not found
          res.status(404).send('Product not found');
        }
      }
    });
  });

app.get('/getImage/:id', (req, res) => {
    const imageId = req.params.id;
    const query = 'SELECT image FROM product WHERE product_id = ?';
    console.log('Query:', query, [imageId]);
    db.query(query, [imageId], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
  
      if (result.length === 0) {
        return res.status(404).send('Image not found');
      }
  
      const imageBuffer = result[0].image; // Assuming your image column is named 'image'
  
      // Set the appropriate content type for the response
      res.setHeader('Content-Type', 'image/PNG'); // Adjust based on your image type
  
      // Send the image as a binary response
      res.send(imageBuffer);
    });
  });

app.post("/login", (req,res) => {
    const query = "SELECT * FROM account WHERE email_address = ? and  user_pass = ?"
    db.query(query, [req.body.email_address, req.body.user_pass,], (err,data) => {
        if(err) {
            return res.json('Error');
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    })
})

app.post("/register", (req,res) => {
    const query = "INSERT INTO account (`f_name`,`l_name`,`email_address`,`user_pass`,`dob`) VALUES (?)"
    const values = [
        req.body.f_name,
        req.body.l_name,
        req.body.email_address,
        req.body.user_pass,
        req.body.dob,
    ];

    db.query(query, [values], (err,data) => {
        if(err) {
            return res.json('Error');
        }
        return res.json(data);
    })
})

app.get("/product", (req,res) => {
    const query = "SELECT * FROM product where product_id = ?"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/men", (req,res) => {
    const query = "SELECT * FROM product where category = 'Men'"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/women", (req,res) => {
    const query = "SELECT * FROM product where category = 'Women'"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/kids", (req,res) => {
    const query = "SELECT * FROM product where category = 'Kids'"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/phones", (req,res) => {
    const query = "SELECT * FROM product where category = 'Phones'"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/contact", (req,res) => {
    const query = "SELECT * FROM contact"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/contact", (req,res) => {
    const query = "INSERT INTO contact (`name`,`email_address`,`message`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email_address,
        req.body.message,
    ];

    db.query(query, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Contact Form Submitted")
    })
})

app.get("/newsletter", (req,res) => {
    const query = "SELECT * FROM newsletter"
    db.query(query,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/newsletter", (req,res) => {
    const query = "INSERT INTO newsletter (`email_address`) VALUES (?)"
    const values = [
        req.body.email_address,
    ];

    db.query(query, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Subscribed!")
    })
})

app.post("/checkout", (req,res) => {
    const query = "INSERT INTO checkout (`firstname`, `lastname`, `email_address`, `address`) VALUES (?)"
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email_address,
        req.body.address,
    ];

    db.query(query, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Checkout Successful")
    })
})

app.listen(3001, () => {
    console.log("Connected!")
})