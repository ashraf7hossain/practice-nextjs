"use client";
import Image from "next/image";
import PostList from "./(components)/PostList";
import MainHeader from "./(components)/MainHeader";
import { useState } from "react";
export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  function hideModal() {
    setIsModalOpen(false);
  }
  function showModal() {
    setIsModalOpen(true);
  }
  return (
    <div className="">
      <MainHeader onCreatePost={showModal}/>
      <PostList isPosting={isModalOpen} onStopPosting={hideModal} />
    </div>
  );
}
