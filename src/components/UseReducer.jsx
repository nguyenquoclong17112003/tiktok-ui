import { React, useEffect, useReducer, useRef } from "react";

import "../App.css";

export default function UseReducer() {
  /* 
    !    Init state
    ?    Action
    todo Reducer
    *    Dispatch
    
    */
  const jsonLocalState = JSON.parse(localStorage.getItem("todo")) ?? [];
  // ! Init state
  const initState = {
    job: "",
    jobs: jsonLocalState,
  };

  //? Action
  const SET_JOB = "set_job";
  const CREATE_JOB = "create_job";
  const DELETE_JOB = "delete_job";

  const set_job = (payload) => {
    return {
      type: SET_JOB,
      payload,
    };
  };

  const create_job = (payload) => {
    return {
      type: CREATE_JOB,
      payload,
    };
  };

  const delete_job = (payload) => {
    return {
      type: DELETE_JOB,
      payload,
    };
  };

  // TODO Reducer
  const reducer = (state, action) => {
    console.log({ action });
    console.log({ state });
    let newState;
    switch (action.type) {
      case SET_JOB:
        newState = {
          ...state,
          job: action.payload,
        };
        break;
      case CREATE_JOB:
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
        break;
      case DELETE_JOB:
        let newJob = [...state.jobs]; 
        newJob.splice(action.payload, 1);
        newState = {
          ...state,
          jobs: newJob,
        };
        break;

      default:
        throw new Error("Invalid action type");
    }
    console.log({ newState });
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef(null);

  useEffect(() => {
    // Đảm bảo inputRef hiện tại không phải là undefined trước khi truy cập focus
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state.jobs));
  }, [state.jobs]);

  const { job, jobs } = state;

  const handleSubmit = () => {
    if (job !== "") {
      dispatch(create_job(job));
    }
    dispatch(set_job(""));
  };

  return (
    <div>
      <input
        className="Input"
        ref={inputRef}
        value={job}
        placeholder="Name"
        onChange={(e) => dispatch(set_job(e.target.value))}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              {job}{" "}
              <span onClick={() => dispatch(delete_job(index))}>&times;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
