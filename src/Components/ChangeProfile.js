import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newusername, setNewusername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setNewusername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newusername);
        }}
      >
        click here
      </button>
    </div>
  );
};
