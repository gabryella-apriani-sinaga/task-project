import React, { useRef, useEffect } from "react";
import Label from "../../components/atoms/Label";
import fireDb from "../../firebase";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDatabase, ref, push, set } from "firebase/database";
import { onValue } from "firebase/database";
import Button from "../../components/atoms/Button";
import IconArrow from "../../components/atoms/IconArrow";
import { Link } from "react-router-dom/dist";

const initialState = {
  title: "",
  description: "",
  location: "",
  image: "",
  id: "",
};

const Create = () => {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputLocation = useRef();
  const inputImage = useRef();
  const inputID = useRef();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Jika id ada, berarti Anda sedang dalam mode edit
      const fireDb = getDatabase();
      const eventRef = ref(fireDb, `events/${id}`);

      onValue(eventRef, (snapshot) => {
        if (snapshot.exists()) {
          const eventData = snapshot.val();
          inputID.current.value = eventData.id;
          inputTitle.current.value = eventData.title;
          inputDescription.current.value = eventData.description;
          inputLocation.current.value = eventData.location;
          inputImage.current.value = eventData.image;
        }
      });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredLocation = inputLocation.current.value;
    const enteredImage = inputImage.current.value;
    const enteredID = inputID.current.value;

    if (!id) {
      // Mode create
      const fireDb = getDatabase();
      const eventRef = ref(fireDb, "events");
      const newEventRef = push(eventRef);

      set(newEventRef, {
        title: enteredTitle,
        description: enteredDescription,
        location: enteredLocation,
        image: enteredImage,
        id: enteredID,
      });
      navigate("/homepage");
    } else {
      // Mode edit, lakukan perubahan data di Firebase
      const fireDb = getDatabase();
      const eventRef = ref(fireDb, `events/${id}`);

      set(eventRef, {
        title: enteredTitle,
        description: enteredDescription,
        location: enteredLocation,
        image: enteredImage,
        id: enteredID,
      });

      navigate("/homepage");
    }
  };

  return (
    <>
      <div className="bg-[#79AC78] p-5  gap-8 flex items-center ">
        <Link to="/homepage">
          <IconArrow />
        </Link>
        <h1 className="text-center text-2xl font-bold  text-white">
          {id ? "Edit Event" : "Tambah Data"}
        </h1>
      </div>

      <section className="flex justify-center items-center bg-green-400 w-full sm:w-1/3 md:w-2/3  mx-auto py-20 relative rounded sm:mt-10 h-3/4">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-24 mb-4">
            <Label>ID</Label>

            <input
              type="text"
              className="border-2 border-gray-600 ml-3 py-1 sm:px-4 border-none rounded"
              ref={inputID}
            />
          </div>
          <div className="flex gap-20 mb-4">
            <Label>Title</Label>
            <input
              type="text"
              className="border-2 border-gray-600 ml-3 py-1 sm:px-4 border-none rounded"
              ref={inputTitle}
            />
          </div>
          <div className="flex gap-10 mb-4">
            <Label>Description</Label>
            <input
              type="text"
              className="border-2 border-gray-600 py-1 sm:px-4 border-none rounded"
              ref={inputDescription}
            />
          </div>

          <div className="flex gap-12 mb-4">
            <Label>Location</Label>

            <input
              type="text"
              className="border-2 border-gray-600 ml-3 py-1 sm:px-4 border-none rounded"
              ref={inputLocation}
            />
          </div>

          <div className="flex gap-16 mb-4">
            <Label>Image</Label>

            <input
              type="text"
              className="border-2 border-gray-600 ml-4 py-1 sm:px-4 border-none rounded"
              ref={inputImage}
            />
          </div>
          <div className="flex justify-center mt-7 -ml-2 ">
            <div className="flex justify-center ">
              <Button type="submit">{id ? "Update" : "Create"}</Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Create;
