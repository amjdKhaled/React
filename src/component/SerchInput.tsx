import React, { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SerchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div
      onSubmit={(event) => {
        if (ref.current) console.log(ref.current.value);

        event.preventDefault();
      }}>
      <input
        ref={ref}
        type="text"
        className="form-control"
        placeholder="Search games..."
        style={{ borderRadius: "20px" }}
      />
    </div>
  );
};

export default SerchInput;
