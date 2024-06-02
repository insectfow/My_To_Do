import axios from "axios";
import { TodoProps } from "../types/types";

export const createTodo = async (payload: TodoProps) => {
  try {
    await axios.post(`http://localhost:3004/todo`, payload);
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (payload: TodoProps) => {
  try {
    await axios.put(
      `http://localhost:3004/todo/${payload.id ? payload.id : ""}`,
      payload
    );
  } catch (error) {
    throw error;
  }
};

export const getTodo = async (id?: string) => {
  try {
    const res = await axios.get(`http://localhost:3004/todo/${id ? id : ""}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await axios.delete(`http://localhost:3004/todo/${id}`);
  } catch (error) {
    throw error;
  }
};
