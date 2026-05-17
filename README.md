# Auth API

A RESTful authentication API built with Node.js, Express and PostgreSQL.

## Features
- User signup with bcrypt password hashing
- JWT access and refresh tokens
- Protected routes via middleware
- Supabase PostgreSQL database

## Endpoints
POST /auth/signup    — Register a new user
POST /auth/login     — Login and get tokens
POST /auth/refresh   — Get new access token
GET  /auth/profile   — Protected user profile

## Tech Stack
Node.js, Express, PostgreSQL, JWT, bcrypt
