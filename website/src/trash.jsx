import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route, Link, Outlet, Form
} from "react-router-dom";

function Layout() {
    return (
        <div>
            <h3 style={{ color: "black" }}>Welcome to my page!</h3>
            <nav style={{ color: "black" }}>
                <Link style={{ color: "black" }} to="/" >Home</Link> | <Link style={{ color: "black" }} to="/about">About</Link> | <Link style={{ color: "black" }} to="/contact">Contact</Link> |<Link style={{ color: "black" }} to="/login">Login</Link>
            </nav>
            <Outlet />
        </div>
    )
};

function HomePage() {
    return (
        <main>
            <h2 style={{ color: "black" }}>Home</h2>
        </main>
    );
}

function AboutPage() {
    return (
        <main>
            <h2 style={{ color: "black" }}>About Me</h2>
        </main>
    );
}

function ContactPage() {
    return (
        <main>
            <h2 style={{ color: "black" }}>Contact</h2>
        </main>
    );
}

export async function actionHandler({ request }) {
    console.log(request)
    return null
}

export function LoginForm() {
    return (<>
        <Form method="post" style={{ color: "black" }}>
            <input type="text" name="title" />
            <input type="text" name="description" />
            <button type="submit">Create</button>
        </Form>
    </>)
}

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
            path="login"
            element={<LoginForm />}
            action={actionHandler}
            errorElement={<h1>Error</h1>}
        />
    </Route>
))



export default function App2() {
    return (
        <RouterProvider router={router} />
    )
}