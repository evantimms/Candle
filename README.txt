Features:
1. One - One / Many-Many Messaging
2. Contact List
3. Conversation List
4. Delete/Create Conversation
5. Read Receipts
6. Performant
7. Notifications

Models:
- User
- Conversation
- Messages

1. Users have an assocaited id, username, email and any other assocaited information
2. Users send messages to other users via conversations. Conversations list users and all messages sent in the
conversation as well as timestamps and other information
3. Messages have text, id, and information regarding who sent the message etc

Goals
1. Fullstack web app
2. Multithreading
3. Serverside (Redis) + Clientside Caching(Serviceworkers)

Stack:
Client: React
Server: Python + Flask
DB: SQLite3