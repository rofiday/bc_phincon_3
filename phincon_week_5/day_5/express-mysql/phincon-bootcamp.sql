/*
 Navicat Premium Data Transfer

 Source Server         : MySQL Server
 Source Server Type    : MySQL
 Source Server Version : 80040
 Source Host           : localhost:3306
 Source Schema         : phincon-bootcamp

 Target Server Type    : MySQL
 Target Server Version : 80040
 File Encoding         : 65001

 Date: 13/01/2025 11:44:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for advisors
-- ----------------------------
DROP TABLE IF EXISTS `advisors`;
CREATE TABLE `advisors`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `advisor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `faculty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of advisors
-- ----------------------------
INSERT INTO `advisors` VALUES (1, 'John Appleseed', 'Faculty of Computer Science and Information Technology');
INSERT INTO `advisors` VALUES (2, 'Bob', 'Faculty of Computer Science and Information Technology');
INSERT INTO `advisors` VALUES (3, 'Habibie', 'Faculty of Math');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `stock` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2025-01-13 03:51:51',
  `updatedAt` datetime NOT NULL DEFAULT '2025-01-13 03:51:51',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('0ddc7812-431a-4ef9-a4d5-ce79cd57614a', 'Lemari', 450000, 'Decorations', 20, '2025-01-13 04:22:31', '2025-01-13 04:22:31');
INSERT INTO `products` VALUES ('28711221-5186-41c7-9cc4-e57d922988ad', 'Television', 3000000, 'Electronics', 10, '2025-01-13 03:51:51', '2025-01-13 03:51:51');
INSERT INTO `products` VALUES ('5ebd50bb-6156-4a9b-9ad7-0fd1cafd40f8', 'Radio', 2500000, 'Electronics', 20, '2025-01-13 03:51:51', '2025-01-13 03:51:51');
INSERT INTO `products` VALUES ('6375dc01-0138-4196-80fb-f6cb803dee81', 'Meja Gaming', 450000, 'Decorations', 20, '2025-01-13 04:24:47', '2025-01-13 04:24:47');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20250113023701-create-product.js');

-- ----------------------------
-- Table structure for student_scores
-- ----------------------------
DROP TABLE IF EXISTS `student_scores`;
CREATE TABLE `student_scores`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `student_id` int NULL DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `score` float NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT INDEX `fulltext_subject_idx`(`subject`),
  FULLTEXT INDEX `fulltext_subject_id`(`subject`),
  FULLTEXT INDEX `fulltext_subject_idz`(`subject`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student_scores
-- ----------------------------
INSERT INTO `student_scores` VALUES (1, 'Jhon Doe', 1, 'Math', 80);
INSERT INTO `student_scores` VALUES (2, 'Jhon Doe', 1, 'English', 90);
INSERT INTO `student_scores` VALUES (3, 'Jane Doe', 2, 'Math', 85);
INSERT INTO `student_scores` VALUES (4, 'Jane Doe', 2, 'English', 75);
INSERT INTO `student_scores` VALUES (5, 'Avarage Joe', 3, 'Math', 75);
INSERT INTO `student_scores` VALUES (6, 'Avarage Joe', 3, 'English', 95);
INSERT INTO `student_scores` VALUES (8, 'Alice A', 4, 'English', 85);

-- ----------------------------
-- Table structure for student_scores_json
-- ----------------------------
DROP TABLE IF EXISTS `student_scores_json`;
CREATE TABLE `student_scores_json`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `student_id` int NULL DEFAULT NULL,
  `score` json NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `student_id`(`student_id`) USING BTREE,
  CONSTRAINT `student_scores_json_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student_scores_json
-- ----------------------------
INSERT INTO `student_scores_json` VALUES (1, 'Jane Doe', 5, '{\"math\": 90}');
INSERT INTO `student_scores_json` VALUES (4, 'Alice A', 6, '{\"math\": 90, \"pyhsics\": 85}');
INSERT INTO `student_scores_json` VALUES (5, 'Shabqie', 4, '{\"math\": 100, \"english\": 90, \"pyhsics\": 70}');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `admission_year` int NULL DEFAULT NULL,
  `major` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `advisor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `advisor_id`(`advisor_id`) USING BTREE,
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`advisor_id`) REFERENCES `advisors` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (1, 'Jane Doe', 2018, 'Computer Science', 1);
INSERT INTO `students` VALUES (2, 'Alice A', 2018, 'Computer Science', 2);
INSERT INTO `students` VALUES (3, 'Average Joe', 2018, 'Game Design', 2);
INSERT INTO `students` VALUES (4, 'Shabqie', 2018, 'Computer Science', NULL);
INSERT INTO `students` VALUES (5, 'Hamzah', 2018, 'Computer Science', NULL);
INSERT INTO `students` VALUES (6, 'Khawarizmi', 2018, 'Game Development', NULL);

SET FOREIGN_KEY_CHECKS = 1;
