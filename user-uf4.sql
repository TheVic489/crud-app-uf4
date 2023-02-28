-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-02-2023 a las 17:06:27
-- Versión del servidor: 10.6.11-MariaDB-0ubuntu0.22.04.1
-- Versión de PHP: 8.1.2-1ubuntu2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `user-uf4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animals_bd`
--

CREATE TABLE `animals_bd` (
  `Id` int(11) NOT NULL,
  `Grup` varchar(11) DEFAULT NULL,
  `Familia` varchar(19) DEFAULT NULL,
  `Espècie` varchar(65) DEFAULT NULL,
  `Origen` varchar(9) DEFAULT NULL,
  `Endemisme` varchar(11) DEFAULT NULL,
  `Ambient` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Volcado de datos para la tabla `animals_bd`
--

INSERT INTO `animals_bd` (`Id`, `Grup`, `Familia`, `Espècie`, `Origen`, `Endemisme`, `Ambient`) VALUES
(1, 'Brachiopoda', 'Megathyrididae ', 'Argyrotheca cistellula (Wood, 2020)', 'Autòctona', 'NO', 'Medi marí'),
(2, 'Brachiopoda', 'Megathyrididae ', 'Argyrotheca cuneata (Risso, 1826)', 'Autòctona', 'Mediterrani', 'Medi marí'),
(3, 'Brachiopoda', 'Terebratulidae ', 'Gryphus vitreus (Born, 1778)', 'Autòctona', 'NO', 'Medi marí'),
(4, 'Brachiopoda', 'Megathyrididae ', 'Joania cordata (Risso, 1826) (=Argyrotheca cordata)', 'Autòctona', 'NO', 'Medi marí'),
(5, 'Brachiopoda', 'Thecideidae ', 'Lacazella mediterranea (Risso, 1826)', 'Autòctona', 'Mediterrani', 'Medi marí'),
(6, 'Brachiopoda', 'Megathyrididae ', 'Megathiris detruncata (Gmelin, 1791)', 'Autòctona', 'NO', 'Medi marí'),
(7, 'Brachiopoda', 'Kraussinidae ', 'Megerlia truncata (Linnaeus, 1767)', 'Autòctona', 'NO', 'Medi marí'),
(8, 'Brachiopoda', 'Craniidae', 'Novocrania anomala (Müller, 1776)', 'Autòctona', 'NO', 'Medi marí'),
(9, 'Brachiopoda', 'Platidiidae ', 'Platidia anomioides (Scacchi & Philippi, 1844, in Philippi, 1844)', 'Autòctona', 'NO', 'Medi marí'),
(10, 'Brachiopoda', 'Cancellothyrididae ', 'Terebratulina retusa (Linnaeus, 1758)', 'Autòctona', 'NO', 'Medi marí'),
(11, 'Phoronida', 'Phoronidae', 'Phoronis australis Haswell, 1883', 'Autòctona', 'NO', 'Medi marí'),
(12, 'Phoronida', 'Phoronidae', 'Phoronis hippocrepia Wright, 1856', 'Autòctona', 'NO', 'Medi marí'),
(13, 'Phoronida', 'Phoronidae', 'Phoronis muelleri Selys-Longchamps, 1903', 'Autòctona', 'NO', 'Medi marí'),
(14, 'Phoronida', 'Phoronidae', 'Phoronis ovalis Wright, 1856', 'Autòctona', 'NO', 'Medi marí'),
(15, 'Phoronida', 'Phoronidae', 'Phoronis psammophila Cori, 1889', 'Autòctona', 'NO', 'Medi marí'),
(16, 'Entoprocta', 'Barentsiidae ', 'Barentsia gracilis (Sars, 1835)', 'Autòctona', 'NO', 'Medi marí'),
(17, 'Entoprocta', 'Loxosomatidae ', 'Loxosoma annelidicola (Van Beneden & Hesse, 1863)', 'Autòctona', 'NO', 'Medi marí'),
(18, 'Entoprocta', 'Loxosomatidae ', 'Loxosoma claparedei Bobin & Prenant, 1953', 'Autòctona', 'NO', 'Medi marí'),
(19, 'Entoprocta', 'Loxosomatidae ', 'Loxosoma singulare Keferstein, 1862', 'Autòctona', 'NO', 'Medi marí'),
(20, 'Entoprocta', 'Loxosomatidae', 'Loxosomella crassicauda (Salensky, 1877)', 'Autòctona', 'NO', 'Medi marí'),
(21, 'Entoprocta', 'Loxosomatidae', 'Loxosomella fauveli Bobin & Prenant, 1953', 'Autòctona', 'NO', 'Medi marí'),
(22, 'Entoprocta', 'Loxosomatidae', 'Loxosomella leptoclini (Harmer, 1885)', 'Autòctona', 'NO', 'Medi marí'),
(23, 'Entoprocta', 'Loxosomatidae', 'Loxosomella obesa (Atkins, 1932)', 'Autòctona', 'NO', 'Medi marí'),
(24, 'Entoprocta', 'Loxosomatidae', 'Loxosomella phascolosomata (Vogt, 1876)', 'Autòctona', 'NO', 'Medi marí'),
(25, 'Entoprocta', 'Loxosomatidae', 'Loxosomella teissieri (Bobin & Prenant, 1953)', 'Autòctona', 'NO', 'Medi marí'),
(26, 'Entoprocta', 'Loxosomatidae', 'Loxosomella tethyae (Salensky, 1877)', 'Autòctona', 'NO', 'Medi marí'),
(27, 'Entoprocta', 'Pedicellinidae', 'Pedicellina cernua (Pallas, 1774)', 'Autòctona', 'NO', 'Medi marí'),
(28, 'Entoprocta', 'Barentsiidae ', 'Urnatella gracilis Leidy, 1851', 'Autòctona', 'NO', 'Aigua dolça');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_table`
--

CREATE TABLE `user_table` (
  `all_name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tel` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_table`
--

INSERT INTO `user_table` (`all_name`, `username`, `password`, `role`, `email`, `tel`) VALUES
('alex', 'alex123', '12345', 'admin', 'aaaa@gmail.com', 987654123),
('anrau', 'arnau123', '12345', 'staff', 'aaaa@gmail.com', 987654321),
('asdasdasds', 'asdasd', 'asdasd', 'staff', 'asdasdd@asd', 687547687),
('asdasdasd', 'asdasdasd', 'pass123', 'staff', 'asdasdasd@asd', 1123123123),
('calvo calvo', 'calvo123', 'pass123123', 'staff', 'calvo123@gmail', 689213845),
('luis', 'luis123', '12345', 'staff', 'llll@gmail.com', 654321795),
('marti', 'marti123', '12345', 'staff', 'mmmm@gmail.com', 987321456),
('pau', 'pablo123', '12345', 'staff', 'pppp@gmail.com', 956132987),
('victor', 'victor123', '12345', 'admin', 'vvvv@gmail.com', 621654789);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animals_bd`
--
ALTER TABLE `animals_bd`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animals_bd`
--
ALTER TABLE `animals_bd`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
