import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setidsong] = useState(0)
    const handlePlaySong = (idSong) => {
        setidsong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setidsong(song.id)
    }, [song])
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr 
                            key={index} 
                            className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 ${idSong === song.id && 'text-green-500 bg-gray-600'}`} 
                            onClick={() => handlePlaySong(song.id)}>
                                <th className="text-center">{index+1}</th>
                                <th className="text-left">{song.name}</th>
                                <th className="text-center">{song.author}</th>
                                <td className="text-center">
                                    <a href="{song.url}">
                                        <i className="fa fa-download"/>
                                    </a>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}