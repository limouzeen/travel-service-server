-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: travel_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `travel_tb`
--

DROP TABLE IF EXISTS `travel_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travel_tb` (
  `travelId` int(11) NOT NULL AUTO_INCREMENT,
  `travelPlace` varchar(200) NOT NULL,
  `travelStartDate` varchar(30) NOT NULL,
  `travelEndDate` varchar(30) NOT NULL,
  `travelCostTotal` double NOT NULL,
  `travellerId` int(11) NOT NULL,
  `travelImage` varchar(150) NOT NULL,
  PRIMARY KEY (`travelId`),
  KEY `travellerId` (`travellerId`),
  CONSTRAINT `travel_tb_ibfk_1` FOREIGN KEY (`travellerId`) REFERENCES `traveller_tb` (`travellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travel_tb`
--

/*!40000 ALTER TABLE `travel_tb` DISABLE KEYS */;
INSERT INTO `travel_tb` VALUES (1,'เชียงใหม่','2025-01-01','2025-01-05',5000,1,'travel_211737531158114.jpg'),(2,'ภูเก็ต','2025-02-10','2025-02-15',8000,2,'travel_211737531158114.jpg'),(3,'กรุงเทพมหานคร','2025-03-01','2025-03-03',2000,3,'travel_211737531158114.jpg'),(4,'อยุธยา','2025-04-12','2025-04-13',1500,1,'travel_211737531158114.jpg'),(5,'หัวหิน','2025-05-01','2025-05-03',3000,2,'travel_211737531158114.jpg'),(6,'เขาค้อ','2025-06-05','2025-06-07',4000,3,'travel_211737531158114.jpg'),(7,'กระบี่','2025-07-10','2025-07-14',7000,1,'travel_211737531158114.jpg'),(8,'สุโขทัย','2025-08-20','2025-08-22',2500,2,'travel_211737531158114.jpg'),(9,'พัทยา','2025-09-15','2025-09-17',3500,3,'travel_211737531158114.jpg'),(10,'เกาะสมุย','2025-10-01','2025-10-05',9000,1,'travel_211737531158114.jpg'),(11,'แม่ฮ่องสอน','2025-11-20','2025-11-25',6000,2,'travel_211737531158114.jpg'),(12,'อุดรธานี','2025-12-05','2025-12-07',3000,3,'travel_211737531158114.jpg'),(13,'น่าน','2025-09-15','2025-09-17',6500,1,'travel_351738738706518.jpg'),(15,'นครสวรรค์','2024-11-20','2024-11-20',5000,1,'travel_211737531158114.jpg');
/*!40000 ALTER TABLE `travel_tb` ENABLE KEYS */;

--
-- Table structure for table `traveller_tb`
--

DROP TABLE IF EXISTS `traveller_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traveller_tb` (
  `travellerId` int(11) NOT NULL AUTO_INCREMENT,
  `travellerFullname` varchar(50) NOT NULL,
  `travellerEmail` varchar(50) NOT NULL,
  `travellerPassword` varchar(50) NOT NULL,
  `travellerImage` varchar(150) NOT NULL,
  PRIMARY KEY (`travellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traveller_tb`
--

/*!40000 ALTER TABLE `traveller_tb` DISABLE KEYS */;
INSERT INTO `traveller_tb` VALUES (1,'สมชาย ใจดี','somchai.jai@thaiemail.com','password123','traveller_491737530694749.jpg'),(2,'สมหญิง รักสงบ','somying.rak@thaiemail.com','pass4567','traveller_491737530694749.jpg'),(3,'อำนาจ ชาญชัย','amnaj.charnchai@thaiemail.com','securepass789','traveller_491737530694749.jpg'),(5,'ขวัญฤดี มั่นคง','kwanrudee@hotmail.com','123456','traveller_491737530694749.jpg'),(7,'สิงหา','singha@hotmail.com','123456','traveller_441738737317781.jpg'),(8,'น้ำหวาน','namwham@hotmail.com','123456789','traveller_751737530784510.jpg'),(9,'น้ำหวานมะลิ','namwhanmali@hotmail.com','123456789','');
/*!40000 ALTER TABLE `traveller_tb` ENABLE KEYS */;

--
-- Dumping routines for database 'travel_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-26 13:11:45
