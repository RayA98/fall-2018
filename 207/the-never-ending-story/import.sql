-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 24, 2018 at 11:54 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `tnes`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE `chapters` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `text` longtext NOT NULL,
  `story_id` int(11) NOT NULL,
  `is_done` tinyint(1) NOT NULL DEFAULT '0',
  `title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chapters`
--

INSERT INTO `chapters` (`id`, `author_id`, `text`, `story_id`, `is_done`, `title`) VALUES
(1, 1, 'Lorem ipsum dolor sit amet, duo conceptam scriptorem theophrastus ei, vis nobis deseruisse expetendis cu. Vim cu placerat percipit consectetuer. Id augue vitae per. Vis ex amet voluptua.\r\n\r\nIgnota aliquando pro ea. Pri no quaestio adversarium definitionem. Vim an dico quando recteque. Soleat deterruisset vis no, in eos nemore patrioque, ei sonet persius percipit usu. Everti meliore eu mel, te mea vocent aeterno, eu ius malorum moderatius theophrastus. Reprimique intellegebat eam ut, id est iudico decore appareat. An vis nisl delectus quaestio, aliquam volutpat pro ne.', 1, 0, 'Day 1: They\'re watching.'),
(2, 2, 'Lorem ipsum dolor sit amet, duo conceptam scriptorem theophrastus ei, vis nobis deseruisse expetendis cu. Vim cu placerat percipit consectetuer. Id augue vitae per. Vis ex amet voluptua.\r\n\r\nIgnota aliquando pro ea. Pri no quaestio adversarium definitionem. Vim an dico quando recteque. Soleat deterruisset vis no, in eos nemore patrioque, ei sonet persius percipit usu. Everti meliore eu mel, te mea vocent aeterno, eu ius malorum moderatius theophrastus. Reprimique intellegebat eam ut, id est iudico decore appareat. An vis nisl delectus quaestio, aliquam volutpat pro ne.', 1, 0, 'Day 2: They\'re Watching.');

-- --------------------------------------------------------

--
-- Table structure for table `editor_picks`
--

CREATE TABLE `editor_picks` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `excerpt` longtext NOT NULL,
  `story_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `stories` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `author_id` int(11) NOT NULL,
  `created_date` date NOT NULL,
  `is_done` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`id`, `title`, `author_id`, `created_date`, `is_done`) VALUES
(1, 'Youtube is big brother.', 1, '2018-10-17', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `alias` text NOT NULL,
  `img` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `alias`, `img`, `email`, `password`) VALUES
(2, 'Prof', 'R', 'Batmannnnnnnnnnnn', '', 'rag@rag.com', '827ccb0eea8a706c4c34a16891f84e7b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editor_picks`
--
ALTER TABLE `editor_picks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chapters`
--
ALTER TABLE `chapters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `editor_picks`
--
ALTER TABLE `editor_picks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `stories`
--
ALTER TABLE `stories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
