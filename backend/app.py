import mysql.connector
from mysql.connector import MySQLConnection
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'username'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'database'

mysql = MySQL(app)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')

    if not all([name, phone, email, password, confirmPassword]):
        return jsonify({'error': 'Please fill all the fields'}), 400
    elif len(password) < 8:
        return jsonify({'error': 'Password must be at least 8 characters long'}), 400
    elif password != confirmPassword:
        return jsonify({'error': 'Passwords do not match'}), 400

    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM new_user WHERE email = %s OR phone = %s", (email, phone))
    existing_user = cursor.fetchone()
    if existing_user:
        return jsonify({'error': 'User with email {} or phone {} already exists'.format(email, phone)}), 400

    cursor.execute("INSERT INTO new_user (name, phone, email, password) VALUES (%s, %s, %s, %s)", (name, phone, email, password))
    mysql.connection.commit()

    return jsonify({'message': 'User created successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=8080)