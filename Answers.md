## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. What is the purpose of using _sessions_?

    A: Sessions allow a server to store information about a client. Example to persist authentication, you don't have to re-enter your credentials on every request to the server. Persists data across requests. 

2. What does bcrypt do to help us store passwords in a secure manner.

    A: bcrypt hashes and salts the password for you. 

3. What does bcrypt do to slow down attackers?

    A: adds a number to indicate rounds the hash should be hashed. "Hashing Rounds" 

4. What are the three parts of the JSON Web Token?

    A: The Header, The Payload, The Signature.