import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Loading/Loading";
import { toast } from "react-hot-toast";

type Props = {};

const Reviews = (props: Props) => {
  const { user, loading } = useContext(AuthContext);
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameInput = user?.displayName;

    const emailInput = user?.email;
    const PhotoURL = user?.photoURL;
    const userInfo = {
      name: nameInput,
      email: emailInput,
      rating: rating,
      comment: comment,
      imgUrl: PhotoURL,
    };
    fetch("http://localhost:8000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Thanks for your review, stay with us 😉");
        setComment("");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(userInfo);
  };
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newRating = parseFloat(event.target.value);
    setRating(newRating);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="text-2xl text-black font-bold">
            Publish your comment to the world about us:{" "}
          </p>
          <div>
            <p className="font-bold text-2xl border p-1 bg-indigo-100 border-indigo-500 mr-40 text-center rounded-md w-[300px] border-b-black border-r-black  border-b-4 border-r-4 my-2">
              {user.displayName}
            </p>
            <p className="font-bold  text-gray-700 underline">
              Email: {user.email}
            </p>
          </div>
          <div>
            <p className="font-bold">Give us Rating: </p>
            <div className="rating rating-lg">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-indigo-500 text-base"
                  value={1}
                  checked={rating === 1}
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-indigo-500"
                  value={2}
                  checked={rating === 2}
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-indigo-500"
                  value={3}
                  checked={rating === 3}
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-indigo-500"
                  value={4}
                  checked={rating === 4}
                  onChange={handleRatingChange}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-indigo-500"
                  value={5}
                  checked={rating === 5}
                  onChange={handleRatingChange}
                />
              </div>
            </div>
          </div>
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-[400px] h-[150px] outline-none border border-indigo-400 focus:border-indigo-900 rounded-md"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className=" font-bold text-black bg-indigo-200 p-1 border border-indigo-600 rounded-md hover:bg-indigo-300 transition-all ease-in duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
