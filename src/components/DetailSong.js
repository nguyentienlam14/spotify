import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className="col-span-1">
            <h2 className="text-cyan-500 font-bold ml-5 mt-3">Now Playing</h2>
            <h2 className="text-neutral-400 text-2xl ml-5">Sing me to lepp</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-full" src={song.links.images[0].url} alt="avatar"/>
            </div>
            <div className="flex justify-evenly items-center mt-7">
                <img className="w-[70px] rounded-full ml-10" src={song.links.images[1].url} alt="avatar2"/>
                <span className="text-xl text-white mr-8">{song.author}</span>
            </div>
        </div>
    )
}