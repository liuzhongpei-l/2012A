/*
 Navicat Premium Data Transfer

 Source Server         : @lcoalhost
 Source Server Type    : MySQL
 Source Server Version : 50738
 Source Host           : localhost:3306
 Source Schema         : demo666

 Target Server Type    : MySQL
 Target Server Version : 50738
 File Encoding         : 65001

 Date: 22/03/2023 11:31:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopName` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `mis` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of car
-- ----------------------------
BEGIN;
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (1, '喜之郎果冻', '5', 71, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (2, '喜之郎果冻', '5', 1, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (3, '喜之郎果冻', '5', 1, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (4, '喜之郎果冻', '5', 1, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (5, '喜之郎果冻', '5', 10, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (6, '喜之郎果冻', '5', 10, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `car` (`id`, `shopName`, `price`, `num`, `url`, `mis`) VALUES (7, '哇哈哈', '10', 1000, 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD%20%281%29.jpeg', '哇哈哈喜唰唰');
COMMIT;

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fileName` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `fileType` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `fileSize` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of files
-- ----------------------------
BEGIN;
INSERT INTO `files` (`id`, `fileName`, `fileType`, `fileSize`, `url`) VALUES (1, 'newDir/下载.jpeg', 'image/jpeg', '100kb', 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD.jpeg');
INSERT INTO `files` (`id`, `fileName`, `fileType`, `fileSize`, `url`) VALUES (2, 'newDir/下载(2).jpeg', 'image/jpeg', '64kb', 'https://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/%E4%B8%8B%E8%BD%BD%20%281%29.jpeg');
COMMIT;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '0:待发货、1:已发货待收货、2:待取件、3:待评价、4:已完成',
  `shop_id` int(11) DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `create_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `shop_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO `orders` (`id`, `state`, `shop_id`, `price`, `create_time`, `shop_num`) VALUES (5, '2', 2, '50', '2023-03-10 16:05:18', 5);
INSERT INTO `orders` (`id`, `state`, `shop_id`, `price`, `create_time`, `shop_num`) VALUES (6, '2', 1, '15', '2023-03-10 16:05:20', 3);
INSERT INTO `orders` (`id`, `state`, `shop_id`, `price`, `create_time`, `shop_num`) VALUES (7, '0', 2, '20', NULL, 2);
COMMIT;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopName` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `num` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `mis` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of shop
-- ----------------------------
BEGIN;
INSERT INTO `shop` (`id`, `shopName`, `price`, `num`, `mis`) VALUES (1, '喜之郎果冻', '5', '10', '我要当太空人，爷爷奶奶给我最爱吃的喜之郎果冻');
INSERT INTO `shop` (`id`, `shopName`, `price`, `num`, `mis`) VALUES (2, '哇哈哈', '10', '1000', '哇哈哈喜唰唰');
COMMIT;

-- ----------------------------
-- Table structure for shop_join_files
-- ----------------------------
DROP TABLE IF EXISTS `shop_join_files`;
CREATE TABLE `shop_join_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) DEFAULT NULL,
  `files_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of shop_join_files
-- ----------------------------
BEGIN;
INSERT INTO `shop_join_files` (`id`, `shop_id`, `files_id`) VALUES (1, 1, 1);
INSERT INTO `shop_join_files` (`id`, `shop_id`, `files_id`) VALUES (2, 2, 2);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (1, 'lzp', 'qwer', '刘中沛', '17601052957', '0', 'http://liuzhongpei.oss-cn-beijing.aliyuncs.com/newDir/1678347405763666.png');
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (2, 'lulu', 'qwer1234', '露露', '1763423847', '1', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (3, 'sdsd', 'fsdfd', '法规的风格给对方的方式地方', '234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (4, 'fgfsdfdfhdskjf', 'fsdfd', 'df对方的的方式地方', '111233', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (5, 'gfdsdfdfhdskjf', 'fsdfd', '黑寡妇的方式地方', '331234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (6, 'fsdfdfhdskjf', 'fsdfd', '的方式地方', '1111344', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (7, 'dfhdskjf', 'fsdfd', '梵蒂冈的的方式地方', '234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (8, 'sdfdfhdskjf', 'fsdfd', '哈哈哈高仿号的方式地方', '234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (9, 'sdfdfhdskjf', 'fsdfd', '发广告', '234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (10, 'sdfdfhdskjf', 'fsdfd', '法规和健康', '234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (11, 'sdfdfhdskjf', 'fsdfd', '发给他的手', '234234345', '0', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `nickname`, `phone`, `state`, `avatar`) VALUES (12, 'sdfdsdfhdskjf', 'fsdfd', '似是而非', '234234345', '0', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
