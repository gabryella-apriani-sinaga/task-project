import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push } from "firebase/database";
import Button from "../../components/atoms/Button";
import { logout } from "../../stores/actions";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/atoms/Icon";
import fireDb from "../../firebase";

import { remove } from "firebase/database";
const Homepage = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState({});
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const fireDb = getDatabase();
    const eventRef = ref(fireDb, "events");

    onValue(eventRef, (snapshot) => {
      if (snapshot.exists()) {
        setEvents({ ...snapshot.val() });
      } else {
        setEvents({});
      }
    });
  }, []);

  const onDelete = (id) => {
    const fireDb = getDatabase();
    const eventRef = ref(fireDb, `events/${id}`);

    remove(eventRef)
      .then(() => {
        console.log("Data berhasil dihapus");
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat menghapus data:", error);
      });
  };

  return (
    <section className="sm:w-2/3 mx-auto">
      <nav className="flex justify-between py-5 sm:px-10 bg-[#79AC78] px-3">
        <h3 className="text-white font-bold text-xl">Gabryella</h3>
        <div className="flex gap-4">
          <Link to="/create">
            <Button>Create Events</Button>
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>

      <div className="mt-4 text-right">
        <Link to="/filter">
          <Button>Filter Page</Button>
        </Link>
      </div>

      <h1 className="text-center mt-5 font-bold font-mono text-2xl mb-5">
        Welcome To My Blog
      </h1>

      {Object.keys(events).map((id, index) => (
        <div
          className="flex flex-col gap-2 m-1 mb-8 bg-white overflow-hidden rounded-sm shadow-md"
          key={index}
        >
          <img
            src={events[id].image}
            className="w-full object-cover h-40"
            alt={events[id].title}
          />
          <div className="w-full py-0 px-1 text-center">
            <div>
              <h2 className="font-bold text-xl">{events[id].title}</h2>
              <p className="text-sm my-3">{events[id].description}</p>
              <div className="flex justify-center items-center gap-1 my-2">
                <Icon />
                <p className="text-xs">{events[id].location}</p>
              </div>
            </div>
            <div className="flex justify-between my-4 mx-4 ">
              <Link to={`/edit/${id}`}>
                <Button>Edit</Button>
              </Link>
              <Link>
                {" "}
                <Button onClick={() => onDelete(id)}>Delete</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Homepage;
