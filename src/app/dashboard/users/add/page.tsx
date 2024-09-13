"use client";

import { useFormStatus } from "react-dom";

import { addUser } from "../lib/actions";

export default function AddUser() {
  return (
    <div className="max-w-md mx-auto mt-5 p-4">
      <h2 className="text-center text-2xl font-semibold mb-4">Add User</h2>
      <form action={addUser}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-input"
              name="firstName"
              id="firstName"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              id="lastName"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            autoComplete="email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            autoComplete="new-password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role">Role</label>
          <select name="role" id="role" className="form-input">
            <option value="retailer">Retailer</option>
            <option value="distributor">Distributor</option>
            <option value="driver">Driver</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <Submit />
      </form>
    </div>
  );
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="primary-btn max-w-fit" type="submit" disabled={pending}>
      {pending ? "Adding User..." : "Add User"}
    </button>
  );
}
