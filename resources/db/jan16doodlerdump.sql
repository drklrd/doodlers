-- MySQL dump 10.13  Distrib 5.6.27, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: doodlers
-- ------------------------------------------------------
-- Server version	5.6.27-0ubuntu1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `post` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,1,'All in one !','2016-01-12 15:08:58','2016-01-12 15:08:58',0),(2,1,'All in one !','2016-01-12 15:09:32','2016-01-12 15:09:32',0),(3,1,'All in one !','2016-01-12 15:09:33','2016-01-12 15:09:33',0),(4,1,'All in one !','2016-01-12 15:09:34','2016-01-12 15:09:34',0),(5,1,'kj','2016-01-12 15:10:51','2016-01-12 15:10:51',0),(6,1,'mayfaie','2016-01-12 15:12:12','2016-01-12 15:12:12',0),(7,1,'COol','2016-01-12 15:20:17','2016-01-12 15:20:17',0),(8,1,'23','2016-01-12 15:21:34','2016-01-12 15:21:34',0),(9,1,'2332','2016-01-12 15:21:40','2016-01-12 15:21:40',0),(10,1,'asd','2016-01-12 15:22:05','2016-01-12 15:22:05',0),(11,1,'asd23','2016-01-12 15:22:07','2016-01-12 15:22:07',0),(12,1,'sadas','2016-01-13 14:52:53','2016-01-13 14:52:53',0),(13,1,'sadas\n3123','2016-01-13 14:52:55','2016-01-13 14:52:55',0),(14,1,'sadas\n3123','2016-01-13 14:52:57','2016-01-13 14:52:57',0),(15,1,'fine here','2016-01-13 14:53:19','2016-01-13 14:53:19',0),(16,1,'fine here','2016-01-13 14:53:22','2016-01-13 14:53:22',0),(17,1,'fine here','2016-01-13 14:53:22','2016-01-13 14:53:22',0),(18,1,'fine here','2016-01-13 14:53:22','2016-01-13 14:53:22',0),(19,1,'fine here','2016-01-13 14:53:22','2016-01-13 14:53:22',0),(20,1,'okay','2016-01-13 14:56:11','2016-01-13 14:56:11',0),(21,1,'lets talk !','2016-01-13 16:16:35','2016-01-13 16:16:35',0),(22,1,'This is new\nIsnt it ?\nYeah it is ....','2016-01-13 16:17:37','2016-01-13 16:17:37',0),(23,1,'dsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaadsaaaaaaaaaaaaaa','2016-01-13 16:17:49','2016-01-13 16:17:49',0),(24,1,'dsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaa','2016-01-13 16:19:08','2016-01-13 16:19:08',0),(25,1,'hello there are many things in the world  hello there are many things in the world  hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world hello there are many things in the world','2016-01-13 16:23:56','2016-01-13 16:23:56',0),(26,1,'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello','2016-01-13 16:34:07','2016-01-13 16:34:07',0),(27,5,'holl','2016-01-13 16:37:59','2016-01-13 16:37:59',0),(28,5,'i am very ,uc hhappy to see htis ty of this !','2016-01-13 16:38:17','2016-01-13 16:38:17',0),(29,6,'Hello there ! i am little\nackwarad to tell ou this ...','2016-01-16 07:56:51','2016-01-16 07:56:51',0),(30,6,'bookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilter','2016-01-16 07:57:04','2016-01-16 07:57:04',0),(31,6,'bookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilter\nbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilter\nbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilterbookAppointmentFilter\nbookAppointmentFilterbookAppointmentFilterbookAppointmentFilter','2016-01-16 07:57:19','2016-01-16 07:57:19',0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `color_profile` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@user.com','test','2016-01-11 15:15:13','2016-01-11 15:15:13',0,'TEst','cool','#df5b2a'),(2,'testnew@user.com','abc','2016-01-12 15:36:55','2016-01-12 15:36:55',0,'','',''),(3,'kumar@gaurav.com','test','2016-01-13 15:48:04','2016-01-13 15:48:04',0,'undefined','undefined','undefined'),(4,'test@user.coms','test','2016-01-13 15:59:37','2016-01-13 15:59:37',0,'undefined','undefined','undefined'),(5,'color@profile.com','123','2016-01-13 16:00:42','2016-01-13 16:00:42',0,'Color','Profile','#38bb90'),(6,'test@doodler.com','cool123','2016-01-16 07:31:01','2016-01-16 07:31:01',0,'Doodler','Test','#240b60');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersTs`
--

DROP TABLE IF EXISTS `usersTs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usersTs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersTs`
--

LOCK TABLES `usersTs` WRITE;
/*!40000 ALTER TABLE `usersTs` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersTs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-16 14:41:32
