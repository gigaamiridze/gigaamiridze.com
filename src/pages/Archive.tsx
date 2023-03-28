import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import { tabTitle } from "../utilities";
import { ArchiveTitle, ArchiveSubtitle } from "../components";
import { ProjectsTable } from "../layouts";

function Archive() {
  const _ = undefined;

  useEffect(() => {
    tabTitle("Archive | Giga Amiridze");
  }, []);

  return (
    <motion.div 
      id="archive-content"
      variants={fadeIn("up", _, 0.7)}
      initial="hidden"
      animate="visible"
    >
      <ArchiveTitle>Archive</ArchiveTitle>
      <ArchiveSubtitle>A big list of things I’ve worked on</ArchiveSubtitle>
      <ProjectsTable />
    </motion.div>
  )
}

export default Archive;