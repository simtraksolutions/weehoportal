import re
import datetime
import mysql.connector
from mysql.connector import MySQLConnection
from flask import Flask, request, jsonify, session
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, unset_jwt_cookies

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'username'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'database'
app.config['SECRET_KEY'] = 'your_secret_key'

mysql = MySQL(app)
jwt = JWTManager(app)

@app.route('/Registration', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')

    if not all([name, phone, email, password, confirmPassword]):
        return jsonify({'error': 'Please fill all the fields'}), 400
    elif not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
        return jsonify({'error': 'Invalid email format'}), 400
    elif len(password) < 8:
        return jsonify({'error': 'Password must be at least 8 characters long'}), 400
    elif password != confirmPassword:
        return jsonify({'error': 'Passwords do not match'}), 400
    
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM new_user WHERE email = %s OR phone = %s", (email, phone))
    existing_user = cursor.fetchone()
    if existing_user:
        return jsonify({'error': f'User with email {email} or phone {phone} already exists'}), 400

    cursor.execute("INSERT INTO users (name, phone, email, password) VALUES (%s, %s, %s, %s)", (name, phone, email, hashed_password))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'User created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Please provide email and password'}), 400

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cur.fetchone()
    cur.close()

    if user:
        hashed_password = user[4]
        if bcrypt.check_password_hash(hashed_password, password):
            access_token = create_access_token(identity=email, expires_delta=datetime.timedelta(hours=1))
            return jsonify({'access_token': access_token}), 200
        else:
            return jsonify({'error': 'Invalid email or password.'}), 401
    else:
        return jsonify({'error': 'Invalid email or password.'}), 401

@app.route('/Bookanevent', methods=['POST'])
@jwt_required()
def book_event():
    email = get_jwt_identity()

    data = request.get_json()
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    city = data.get('city')
    state = data.get('state')
    event_date = data.get('event_date')
    occasion = data.get('occasion')
    performer_name = data.get('performer_name')
    
    if not all([name, phone, email, city, state, event_date, occasion]):
        return jsonify({'error': 'Please fill all the fields'}), 400

    cur = mysql.connection.cursor()
    if performer_name:
        cur.execute("""
            INSERT INTO events (name, phone, email, city, state, event_date, occasion, performer_name)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (name, phone, email, city, state, event_date, occasion, performer_name))
    else:
        cur.execute("""
            INSERT INTO events (name, phone, email, city, state, event_date, occasion)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """, (name, phone, email, city, state, event_date, occasion))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Event booked successfully.'}), 200

@app.route('/contactus', methods=['POST'])
@jwt_required()
def contact_us():
    email = get_jwt_identity()
    
    data = request.get_json()
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    message = data.get('message')

    if not all([name, phone, email, message]):
        return jsonify({'error': 'Please fill all the fields'}), 400

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO contact_us (name, phone, email, message) VALUES (%s, %s, %s, %s)", (name, phone, email, message))
    mysql.connection.commit()
    cur.close()

    return jsonify({'message': 'Message sent successfully.'}), 200

@app.route('/history', methods=['GET'])
@jwt_required()
def get_history():
    email = get_jwt_identity()

    cur = mysql.connection.cursor()
    cur.execute("SELECT id, name, phone, email, city, state, event_date, occasion, performer_name FROM events WHERE email = %s", (email,))
    events = cur.fetchall()
    cur.close()

    history = []
    for event in events:
        history.append({
            'id': event[0],
            'name': event[1],
            'phone': event[2],
            'email': event[3],
            'city': event[4],
            'state': event[5],
            'event_date': event[6].strftime('%d-%m-%Y'),
            'occasion': event[7],
            'performer_name': event[8] if event[8] else "N/A"
        })

    return jsonify(history), 200

@app.route('/logout', methods=['GET'])
def logout():
    session.clear()
    return jsonify({'message': 'Logout successful'}), 200

@app.route('/performer_registration', methods=['POST'])
def performer_signup():
    data = request.get_json()
    performer_name = data.get('performer_name')
    performer_email = data.get('performer_email')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')

    if not all([performer_name, performer_email, password, confirmPassword]):
        return jsonify({'error': 'Please fill all the fields'}), 400
    elif not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', performer_email):
        return jsonify({'error': 'Invalid email format'}), 400
    elif len(password) < 8:
        return jsonify({'error': 'Password must be at least 8 characters long'}), 400
    elif password != confirmPassword:
        return jsonify({'error': 'Passwords do not match'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM performers WHERE performer_email = %s", (performer_email,))
    existing_performer = cursor.fetchone()
    if existing_performer:
        return jsonify({'error': f'Performer with email {performer_email} already exists'}), 400

    cursor.execute("INSERT INTO performers (performer_name, performer_email, password) VALUES (%s, %s, %s)", (performer_name, performer_email, hashed_password))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'Performer registered successfully'}), 201

@app.route('/performer_login', methods=['POST'])
def performer_login():
    data = request.get_json()
    performer_email = data.get('performer_email')
    password = data.get('password')
    
    if not performer_email or not password:
        return jsonify({'error': 'Please provide email or password'}), 400
    
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM performer_users WHERE performer_email = %s", (performer_email,))
    performer = cur.fetchone()
    cur.close()

    if performer:
        hashed_password = performer[5]
        if bcrypt.check_password_hash(hashed_password, password):
            access_token = create_access_token(identity=performer_email, expires_delta=datetime.timedelta(hours=1))
            return jsonify({'access_token': access_token}), 200
        else:
            return jsonify({'error': 'Invalid email or password.'}), 401
    else:
        return jsonify({'error': 'Invalid email or password.'}), 401

@app.route('/performer_profile', methods=['GET'])
@jwt_required()
def get_performer_profile():
    performer_email = get_jwt_identity()

    cur = mysql.connection.cursor()
    cur.execute("SELECT performer_name, performer_phone, performer_email, performance FROM performer_users WHERE performer_email = %s", (performer_email,))
    performer_data = cur.fetchone()
    cur.close()

    performer_profile = {
        'performer_name': performer_data[0],
        'performer_phone': performer_data[1],
        'performer_email': performer_data[2],
        'performance': performer_data[3]
    }

    return jsonify(performer_profile), 200

@app.route('/performer_history', methods=['GET'])
@jwt_required()
def get_performer_history():
    performer_email = get_jwt_identity()
    
    cur = mysql.connection.cursor()
    cur.execute("SELECT performer_name FROM performer_users WHERE performer_email = %s", (performer_email,))
    result = cur.fetchone()

    if not result:
        return jsonify({"error": "Performer not found"}), 404

    performer_name = result[0]
    
    cur.execute("""
        SELECT id, name, phone, email, city, state, event_date, occasion 
        FROM events 
        WHERE performer_name = %s
    """, (performer_name,))
    events = cur.fetchall()
    cur.close()

    history = []
    for event in events:
        history.append({
            'id': event[0],
            'name': event[1],
            'phone': event[2],
            'email': event[3],
            'city': event[4],
            'state': event[5],
            'event_date': event[6].strftime('%d-%m-%Y'),
            'occasion': event[7]
        })

    return jsonify(history), 200

@app.route('/performer_logout', methods=['GET'])
@jwt_required()
def performer_logout():
    response = jsonify({'message': 'Successfully logged out(performer)'})
    unset_jwt_cookies(response)
    return response, 200

if __name__ == '__main__':
    app.run(debug=True, port=8080)