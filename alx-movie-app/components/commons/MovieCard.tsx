/* eslint-disable @next/next/no-img-element */
import React from "react";

interface MovieCardProps {
  title: string;
  image?: string;
  year?: string | number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, year }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-3 cursor-pointer">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded"
        />
      ) : (
        <div className="w-full h-60 bg-gray-300 rounded flex items-center justify-center">
          No Image
        </div>
      )}

      <h3 className="mt-3 font-semibold text-lg">{title}</h3>
      {year && <p className="text-gray-500 text-sm">{year}</p>}
    </div>
  );
};

export default MovieCard;
