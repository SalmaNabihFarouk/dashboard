# Dashboard


# Angular Dashboard Project

This is a full-featured Angular dashboard project designed to simulate a basic content management system using modern UI components with Angular Material.

## 🔐 Login Credentials

To test the project, use the following credentials:

- **Email:** `admin@gmail.com`
- **Password:** `Admin@123`

The login process is powered by an API that verifies user credentials and returns profile information including username, role (`admin`), and avatar image.

## ✅ Features Implemented

- 🔒 **Login Page** – Authenticates user using an external API and displays user info (name, role, avatar) in the navbar upon successful login.
- 📋 **Posts Table** – Connected to a REST API for `GET` requests. It fetches all posts and displays them in a paginated, filterable table.
  - Filter functionality based on `User ID`.
  - Ability to reset filter and re-apply.
  - Supports pagination using Angular Material.
- ➕ **Add Post Page** – Allows adding a new post locally (not synced with API due to dummy JSON limitations).
- 📝 **Edit Post Page** – Allows editing existing post data locally.
- ❌ **Delete Post** – Deletes post locally in the UI.
- 📊 **Dashboard** – A simple dashboard landing page after login.
- 🚪 **Logout** – Clears session and returns to login.
- 📌 **Navigation** – Includes a responsive sidebar and a top navbar with user data.
- 🧭 **Routing** – Uses route guards to prevent access to routes without login.
- ⚙️ **Structure** – Feature-based folder structure using Angular best practices.
- 🌐 **Responsive Design** – Styled using Bootstrap and Angular Material.

## ℹ️ Notes

### API Usage
- **Login** and **Posts table (GET)** use a live API.
- **Add**, **Edit**, and **Delete** actions are performed **locally in memory**, since the dummy JSON API does not actually persist data changes. This is a known limitation when using public test APIs like JSONPlaceholder.

### Dummy API Limitation
> JSONPlaceholder is a fake online REST API for testing and prototyping. While it supports `POST`, `PUT`, and `DELETE` requests, it **does not persist** these changes. Therefore, all modifications (edit, delete, add) are **only reflected locally** in the UI for demonstration purposes.

---

Built with ❤️ using Angular, Angular Material, Bootstrap, and RxJS.



