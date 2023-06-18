import { useCustomContext } from "./Context/Context";

export const Main = () => {
  const { toggle, toggleValue } = useCustomContext();
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={() => toggle(!toggleValue)}>open Alert</button>
    </div>
  );
};
