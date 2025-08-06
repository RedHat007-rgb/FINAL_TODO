"use client";
import React, { useState } from "react";
import { Status } from "@repo/shared";
import { trpc } from "../../utils/trpc";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<Status | "">("");
  const [error, setError] = useState("");

  const mutation = trpc.todoRouter.createTodo.useMutation();

  const onSubmitHandler = async () => {
    setError("");

    if (!title || !status) {
      setError("Please fill in both title and status");
      return;
    }

    const newTodo = { title, status };

    try {
      const result = await mutation.mutateAsync(newTodo);
      console.log("Result:", result);
    } catch (err) {
      console.error("Failed to create todo", err);
      setError("Something went wrong while creating the todo.");
    }
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Status)}
      >
        <option value="">Select status</option>
        <option value={Status.COMPLETED}>Completed</option>
        <option value={Status.IN_PROGRESS}>In Progress</option>
        <option value={Status.NOT_INTERESTED}>Not Interested</option>
      </select>
      <button onClick={onSubmitHandler}>Submit</button>

      {error && <div style={{ color: "red" }}>{error}</div>}
      {JSON.stringify(mutation.data)}
    </div>
  );
};

export default CreateTodo;
