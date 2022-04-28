import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { contractABI, contractAddress } from "../../contract";

function Dashboard() {
  const { isAuthenticated, logout, user } = useMoralis();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [vertical, setVertical] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [founding, setFounding] = useState(0);
  const [file, setFile] = useState(null);
  const router = useRouter();
  const onSubmit = async (e) => {
    // do something
  };
  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={status}
            placeholder="Pool status"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={country}
            placeholder="Pool country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={vertical}
            placeholder="Vertical"
            onChange={(e) => setVertical(e.target.value)}
          />
        </div>
        
        <div className="mt-3">
          <input
            type="number"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={studentCount}
            placeholder="Student Count"
            onChange={(e) => setStudentCount(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="number"
            className="border-[1px] p-2 text-lg border-black w-full"
            value={founding}
            placeholder="Inicial pool founding"
            onChange={(e) => setFounding(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <input
            type="file"
            className="border-[1px] p-2 text-lg border-black"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="mt-5 w-full p-5 bg-green-700 text-white text-lg rounded-xl animate-pulse"
        >
          Mint now!
        </button>
        <button
          onClick={logout}
          className="mt-5 w-full p-5 bg-red-700 text-white text-lg rounded-xl"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
export default Dashboard;