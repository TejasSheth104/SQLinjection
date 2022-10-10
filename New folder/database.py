import mysql.connector

try:
    print("1")
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234",
        auth_plugin="mysql_native_password")
    print("2")
    if conn.is_connected():
        print("3")
        cursor = conn.cursor()
        print("MySQL Connection Established.")

    
except:
    print("MySQL Connection Failed.")