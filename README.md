# challenge_13
# NextJs + TypeScript
  This project is a full-stack web application developed using NextJs, typeScript,nd Postgres.
# Prerequisites
  Docker
  Node.js
  Make
# Getting Started
 1.Clone the repository :

  git clone git@github.com:zel-hach/challenge_13.git


  2. Create a file named .env in the project root with the following content :
```js
 DATABASE_URL=postgres://user_challenge:1234challenge@127.0.0.1:5432/challengeDb         #url for connect frontend with database


  POSTGRES_HOST=172.17.0.1   # The host where your PostgreSQL database is running
  POSTGRES_PORT=5432         # The port on which PostgreSQL is listening

  POSTGRES_USER=user_challenge        # The username for connecting to the PostgreSQL database
  POSTGRES_PASSWORD=1234challenge  # The password for the specified username

  POSTGRES_DB=challengeDb     # The name of the PostgreSQL database
```
  3. Use the Makefile to run the code :

```js
{
  make up 
}
```